import React from 'react';
import ReactDOM from 'react-dom';
import BasicVisualizer from './components/BasicVisualizer.js';

if (!customElements.get('basic-visualizer')) {
  customElements.define('basic-visualizer', class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const definition = JSON.parse(this.getAttribute('definition'));
      const value = this.getAttribute('value');
      const dispatch = (detail) => this.dispatchEvent(new CustomEvent('dispatch', { detail }));

      const container = document.createElement('div');
      this.shadowRoot.appendChild(container);

      const component = React.createElement(BasicVisualizer, { definition, value, dispatch });
      ReactDOM.render(component, container);
    }
  });
}
