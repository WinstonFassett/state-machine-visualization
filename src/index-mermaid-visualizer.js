import React from 'react';
import ReactDOM from 'react-dom';
import MermaidVisualizer from './components/MermaidVisualizer.js';

if (!customElements.get('mermaid-visualizer')) {
  customElements.define('mermaid-visualizer', class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const definition = JSON.parse(this.getAttribute('definition'));
      const value = this.getAttribute('value');

      const container = document.createElement('div');
      this.shadowRoot.appendChild(container);

      const component = React.createElement(MermaidVisualizer, { definition, value });
      ReactDOM.render(component, container);
    }
  });
}
