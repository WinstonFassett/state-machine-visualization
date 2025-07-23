# State Machine Visualizers

A collection of web components for visualizing state machines.

## Installation

### npm

```bash
npm install state-machine-visualizers
```

### CDN

```html
<script src="https://unpkg.com/state-machine-visualizers/dist/state-force-graph.js"></script>
<script src="https://unpkg.com/state-machine-visualizers/dist/basic-visualizer.js"></script>
<!-- The mermaid visualizer is only available as an ES module -->
```

## Usage

### State Force Graph

```html
<state-force-graph
  definition='{"states": ...}'
  value="..."
  prev-state="..."
  last-event='{...}'
  style="
    --node-color: grey;
    --active-node-color: blue;
    --link-color: lightgrey;
    --active-link-color: blue;
    --transition-color: green;
    --particle-color: green;
  "
></state-force-graph>
```

### Basic Visualizer

```html
<basic-visualizer
  definition='{"states": ...}'
  value="..."
></basic-visualizer>
```

### Mermaid Visualizer

The mermaid visualizer is only available as an ES module.

```html
<script type="module">
  import 'https://unpkg.com/state-machine-visualizers/dist/mermaid-visualizer/index-mermaid-visualizer.js';
</script>

<mermaid-visualizer
  definition='{"states": ...}'
  value="..."
></mermaid-visualizer>
```

## Development

To run the demo application:

```bash
npm start
```

To build the distributable files:

```bash
npm run build
```
