import { html, LitElement } from '@polymer/lit-element';
import css from './docs.css';

class DocsPageComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div>

        <p>To get started, edit <code>src/pages/docs/docs.js</code>!</p>

      </div>
    `;
  }
}

customElements.define('docs-page', DocsPageComponent);