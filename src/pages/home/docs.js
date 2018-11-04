import { html, LitElement } from '@polymer/lit-element';
import css from './layout.css';

class DocsPageComponent extends LitElement {
  render() {
    return html`
      <style>
        ${css}
      </style>

      <div class="container">
        <h1>Documentation</h1>
      </div>
    `;
  }
}

customElements.define('docs-page', DocsPageComponent);
