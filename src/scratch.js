function old() {
  let nodeIdCounter = 0,
    linkIdCounter = 0;
  let nodes = [],
    links = [];

  const serializeNode = ({ id, name }) => ({ id, name });
  const serializeEdge = ({ id, source, target, name }) => ({
    id,
    source: source.id,
    target: target.id,
    name
  });
  const findNode = (id) => nodes.find((it) => it.id === id);
  const loadEdge = ({ id, source, target, name }) => ({
    id,
    source: findNode(source),
    target: findNode(target),
    name
  });

  function loadGraph() {
    const json = localStorage.getItem("graph") || JSON.stringify(stoplight);
    if (json) {
      // console.log('parsing', json)
      const parsed = JSON.parse(json);
      // console.log("parsed", parsed);
      nodes = parsed.nodes;
      links = parsed.links.map(loadEdge);
      nodeIdCounter += nodes.length;
      linkIdCounter += links.length;
    }
  }
  loadGraph();

  function saveGraph() {
    const json = JSON.stringify({
      nodes: nodes.map(serializeNode),
      links: links.map(serializeEdge)
    });
    // console.log("saved", json);
    localStorage.setItem("graph", json);
  }

  let dragSourceNode = null,
    interimLink = null;
  const snapInDistance = 15;
  const snapOutDistance = 40;

  const updateGraphData = () => {
    // console.log("updateGraphData", { nodes, links });
    Graph.graphData({ nodes: nodes, links: links });
    saveGraph();
  };

  const distance = (node1, node2) => {
    return Math.sqrt(
      Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
    );
  };

  const rename = (nodeOrLink, type) => {
    let value = prompt("Name this " + type + ":", nodeOrLink.name);
    if (!value) {
      return;
    }
    nodeOrLink.name = value;
    updateGraphData();
  };

  const setInterimLink = (source, target) => {
    let linkId = linkIdCounter++;
    interimLink = {
      id: linkId,
      source: source,
      target: target,
      name: "link_" + linkId
    };
    links.push(interimLink);
    updateGraphData();
  };

  const removeLink = (link) => {
    links.splice(links.indexOf(link), 1);
  };

  const removeInterimLinkWithoutAddingIt = () => {
    removeLink(interimLink);
    interimLink = null;
    updateGraphData();
  };

  const removeNode = (node) => {
    links
      .filter((link) => link.source === node || link.target === node)
      .forEach((link) => removeLink(link));
    nodes.splice(nodes.indexOf(node), 1);
  };

  const clear = () => {
    nodes = [];
    links = [];
    updateGraphData();
    localStorage.removeItem("graph");
  };
  document.getElementById("clear").addEventListener("click", clear);

  const Graph = ForceGraph()(document.getElementById("graph"))
    .linkDirectionalArrowLength(6)
    .linkDirectionalArrowRelPos(1)
    .onNodeDrag((dragNode) => {
      dragSourceNode = dragNode;
      for (let node of nodes) {
        if (dragNode === node) {
          continue;
        }
        // close enough: snap onto node as target for suggested link
        if (!interimLink && distance(dragNode, node) < snapInDistance) {
          setInterimLink(dragSourceNode, node);
        }
        // close enough to other node: snap over to other node as target for suggested link
        if (
          interimLink &&
          node !== interimLink.target &&
          distance(dragNode, node) < snapInDistance
        ) {
          removeLink(interimLink);
          setInterimLink(dragSourceNode, node);
        }
      }
      // far away enough: snap out of the current target node
      if (
        interimLink &&
        distance(dragNode, interimLink.target) > snapOutDistance
      ) {
        removeInterimLinkWithoutAddingIt();
      }
    })
    .onNodeDragEnd(() => {
      dragSourceNode = null;
      interimLink = null;
      updateGraphData();
    })
    // .nodePointerAreaPaint(() =>{})
    // .nodeCanvasObject((node, ctx) => {})
    .nodeColor((node) =>
      node === dragSourceNode ||
      (interimLink &&
        (node === interimLink.source || node === interimLink.target))
        ? "orange"
        : null
    )
    // .nodeCanvasObject((node, ctx, globalScale) => {
    //   const label = node.name;
    //   const color = "blue"
    //   const fontSize =  6// 12/globalScale;
    //   ctx.font = `${fontSize}px Sans-Serif`;
    //   const textWidth = ctx.measureText(label).width;
    //   const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

    //   ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    //   ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

    //   ctx.textAlign = 'center';
    //   ctx.textBaseline = 'middle';
    //   ctx.fillStyle = color;
    //   ctx.fillText(label, node.x, node.y);

    //   node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
    // })
    // .nodePointerAreaPaint((node, color, ctx) => {
    //   ctx.fillStyle = '#ff0000';
    //   const bckgDimensions = node.__bckgDimensions;
    //   bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
    // })
    .linkColor((link) => (link === interimLink ? "orange" : "#bbbbbb"))
    .linkLineDash((link) => (link === interimLink ? [2, 2] : []))
    .onNodeClick((node, event) => rename(node, "node"))
    .onNodeRightClick((node, event) => removeNode(node))
    .onLinkClick((link, event) => rename(link, "link"))
    .onLinkRightClick((link, event) => removeLink(link))
    .onBackgroundClick((event) => {
      let coords = Graph.screen2GraphCoords(event.layerX, event.layerY);
      let nodeId = nodeIdCounter++;
      nodes.push({
        id: nodeId,
        x: coords.x,
        y: coords.y,
        name: "New Node"
      });
      updateGraphData();
    })
    .nodeCanvasObjectMode(() => "after")
    .nodeCanvasObject((node, ctx, globalScale) => {
      const label = node.name;
      const fontSize = 6; /// globalScale;
      ctx.font = `${fontSize}px Sans-Serif`;
      ctx.textAlign = "center";
      // ctx.textBaseline = "middle";
      ctx.fillStyle = "black"; //node.color;
      ctx.fillText(label, node.x, node.y);
    })
    // edge labels
    .nodeId("id")
    .nodeLabel("name")
    .nodeAutoColorBy("name")
    .linkCanvasObjectMode(() => "after")
    .linkCanvasObject((link, ctx) => {
      // if (Graph.value !== lin)

      const MAX_FONT_SIZE = 4;
      const LABEL_NODE_MARGIN = Graph.nodeRelSize() * 1.5;

      const start = link.source;
      const end = link.target;

      // ignore unbound links
      if (typeof start !== "object" || typeof end !== "object") return;

      // calculate label positioning
      const textPos = Object.assign(
        ...["x", "y"].map((c) => ({
          [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
        }))
      );

      const relLink = { x: end.x - start.x, y: end.y - start.y };

      const maxTextLength =
        Math.sqrt(Math.pow(relLink.x, 2) + Math.pow(relLink.y, 2)) -
        LABEL_NODE_MARGIN * 2;

      let textAngle = Math.atan2(relLink.y, relLink.x);
      // maintain label vertical orientation for legibility
      if (textAngle > Math.PI / 2) textAngle = -(Math.PI - textAngle);
      if (textAngle < -Math.PI / 2) textAngle = -(-Math.PI - textAngle);

      const label = `${link.name}`;

      // estimate fontSize to fit in link length
      ctx.font = "1px Sans-Serif";
      const fontSize = Math.min(
        MAX_FONT_SIZE,
        maxTextLength / ctx.measureText(label).width
      );
      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const bckgDimensions = [textWidth, fontSize].map(
        (n) => n + fontSize * 0.2
      ); // some padding

      // draw text label (with background rect)
      ctx.save();
      ctx.translate(textPos.x, textPos.y);
      ctx.rotate(textAngle);

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillRect(
        -bckgDimensions[0] / 2,
        -bckgDimensions[1] / 2,
        ...bckgDimensions
      );

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "darkgrey";
      ctx.fillText(label, 0, 0);
      ctx.restore();
    });

  updateGraphData();
}
