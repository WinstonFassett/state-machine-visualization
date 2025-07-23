function findNode(nodes, id) {
  return nodes.find((it) => it.id === id);
}

function canFire(machine, state, event) {
  const mode = machine.states[state];
  return mode && mode.on && mode.on[event];
}

function getQuadraticXY(t, sx, sy, cp1x, cp1y, ex, ey) {
  return {
    x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * cp1x + t * t * ex,
    y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * cp1y + t * t * ey
  };
}

class StateForceGraphComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._value = null;
    this._definition = null;
    this._prevState = null;
    this._lastEvent = null;
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['definition', 'value', 'prev-state', 'last-event'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case 'definition':
        this.definition = JSON.parse(newValue);
        break;
      case 'value':
        this.value = newValue;
        break;
      case 'prev-state':
        this._prevState = newValue;
        break;
      case 'last-event':
        this._lastEvent = JSON.parse(newValue);
        if (this.graph && this._lastEvent) {
            const link = this.graph.graphData().links.find(
                (it) => it.source.id === this._prevState && it.name === this._lastEvent.type
            );
            if (link) {
                this.graph.emitParticle(link);
            }
        }
        break;
    }
  }

  set definition(value) {
    this._definition = value;
    if (this.graph) {
      this.updateGraphData();
    }
  }

  get definition() {
    return this._definition;
  }

  set value(value) {
    this._value = value;
    if (this.graph) {
      this.graph.value = value;
    }
  }

  get value() {
    return this._value;
  }

  updateGraphData() {
    if (!this.definition) {
      return;
    }
    const { nodes, links } = this.createDiagram(this.definition);
    this.graph.graphData({ nodes, links });
  }

  createDiagram(definition) {
    const stateIds = Object.keys(definition.states);
    const nodes = stateIds.map((key) => {
      return { name: key, id: key };
    });

    const links = [];
    stateIds.forEach((key) => {
      const state = definition.states[key];
      const source = findNode(nodes, key);
      state.on &&
        Object.keys(state.on).forEach((name) => {
          const targetId = state.on[name];
          const target = findNode(nodes, targetId);
          links.push({ name, source, target });
        });
    });

    let selfLoopLinks = {};
    let sameNodesLinks = {};
    const curvatureMinMax = 0.5;

    links.forEach((link) => {
      link.nodePairId =
        link.source.id <= link.target.id
          ? link.source.id + "_" + link.target.id
          : link.target.id + "_" + link.source.id;
      let map = link.source === link.target ? selfLoopLinks : sameNodesLinks;
      if (!map[link.nodePairId]) {
        map[link.nodePairId] = [];
      }
      map[link.nodePairId].push(link);
    });

    Object.keys(selfLoopLinks).forEach((id) => {
      let links = selfLoopLinks[id];
      let lastIndex = links.length - 1;
      links[lastIndex].curvature = 1;
      let delta = (1 - curvatureMinMax) / lastIndex;
      for (let i = 0; i < lastIndex; i++) {
        links[i].curvature = curvatureMinMax + i * delta;
      }
    });

    Object.keys(sameNodesLinks)
      .filter((nodePairId) => sameNodesLinks[nodePairId].length > 1)
      .forEach((nodePairId) => {
        let links = sameNodesLinks[nodePairId];
        let lastIndex = links.length - 1;
        let lastLink = links[lastIndex];
        lastLink.curvature = curvatureMinMax;
        let delta = (2 * curvatureMinMax) / lastIndex;
        for (let i = 0; i < lastIndex; i++) {
          links[i].curvature = -curvatureMinMax + i * delta;
          links[i].offset = i;
          if (lastLink.source !== links[i].source) {
            links[i].curvature *= -1;
            links[i].flipped = true;
          }
        }
      });

    return { nodes, links };
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 300px;
          --font-size: 6px;
          --node-color: darkGrey;
          --active-node-color: black;
          --link-color: darkgrey;
          --active-link-color: blue;
          --transition-color: teal;
          --particle-color: teal;
        }
      </style>
      <div class="graph-container"></div>
    `;
    const container = this.shadowRoot.querySelector('.graph-container');
    const Graph = global.ForceGraph()(container);
    this.graph = Graph;

    const styles = getComputedStyle(this);
    const fontSize = parseInt(styles.getPropertyValue('--font-size'), 10);
    const nodeColor = styles.getPropertyValue('--node-color');
    const activeNodeColor = styles.getPropertyValue('--active-node-color');
    const linkColor = styles.getPropertyValue('--link-color');
    const activeLinkColor = styles.getPropertyValue('--active-link-color');
    const transitionColor = styles.getPropertyValue('--transition-color');
    const particleColor = styles.getPropertyValue('--particle-color');


    Graph.height(300)
      .linkCurvature("curvature")
      .linkDirectionalArrowLength(6)
      .linkDirectionalArrowRelPos(1)
      .nodeCanvasObjectMode(() => "after")
      .nodeCanvasObject((node, ctx, globalScale) => {
        const label = node.name;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillStyle = node.name === this.value ? activeNodeColor : nodeColor;
        ctx.fillText(label, node.x - 2, node.y);
      })
      .nodeId("id")
      .nodeLabel("name")
      .nodeAutoColorBy("name")
      .linkCanvasObjectMode(() => "after")
      .linkCanvasObject((link, ctx) => {
        const MAX_FONT_SIZE = 4;
        const LABEL_NODE_MARGIN = Graph.nodeRelSize() * 1.5;

        const start = link.source;
        const end = link.target;

        if (typeof start !== "object" || typeof end !== "object") return;

        let textPos = Object.assign(
          ...["x", "y"].map((c) => ({
            [c]: start[c] + (end[c] - start[c]) / 2
          }))
        );

        if (+link.curvature > 0) {
          if (link.__controlPoints)
            textPos = getQuadraticXY(
              0.5,
              start.x,
              start.y,
              link.__controlPoints[0],
              link.__controlPoints[1],
              end.x,
              end.y
            );
        }

        const relLink = { x: end.x - start.x, y: end.y - start.y };

        const maxTextLength =
          Math.sqrt(Math.pow(relLink.x, 2) + Math.pow(relLink.y, 2)) -
          LABEL_NODE_MARGIN * 2;

        let textAngle = Math.atan2(relLink.y, relLink.x);
        if (textAngle > Math.PI / 2) textAngle = -(Math.PI - textAngle);
        if (textAngle < -Math.PI / 2) textAngle = -(-Math.PI - textAngle);

        const label = `${link.name}`;

        ctx.font = "1px Sans-Serif";
        const fontSize = Math.min(
          MAX_FONT_SIZE,
          maxTextLength / ctx.measureText(label).width
        );
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(
          (n) => n + fontSize * 0.2
        );

        ctx.save();
        ctx.translate(textPos.x, textPos.y);
        ctx.rotate(textAngle);

        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fillRect(
          -bckgDimensions[0] / 2,
          -bckgDimensions[1] / 2,
          ...bckgDimensions
        );
        const color =
          this.value === link.source.name &&
          canFire(this.definition, this.value, link.name)
            ? activeLinkColor
            : linkColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = color;
        ctx.fillText(link.name, 0, 0);
        ctx.restore();
      })
      .linkColor((link) => {
        if (
          this._prevState === link.source.name &&
          this._lastEvent &&
          this._lastEvent.type === link.name
        ) {
          return transitionColor;
        }
        return this.value === link.source.name &&
          canFire(this.definition, this.value, link.name)
          ? activeLinkColor
          : linkColor;
      })
      .linkDirectionalParticleColor(() => particleColor)
      .linkDirectionalParticleSpeed(0.04)
      .linkDirectionalParticleWidth(8)
      .linkHoverPrecision(10)
      .onLinkClick(({ name }) => {
        this.dispatchEvent(new CustomEvent('edge-click', { detail: { type: name } }));
      });

    this.updateGraphData();
  }
}

customElements.define('state-force-graph', StateForceGraphComponent);
