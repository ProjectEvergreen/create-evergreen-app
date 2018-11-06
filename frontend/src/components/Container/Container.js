import { html, LitElement } from '@polymer/lit-element';
import css from './Container.css';

class container extends LitElement {
  static get properties() {
    return {
      fluid: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.fluid = false;
  }

  render() {
    return html`
        <style>
        ${css}
        </style>
        <div class=${this.fluid ? 'container-fluid' : 'container'}>
            <slot></slot>
        </div>
        `;
  }
}

customElements.define('eve-container', container);
