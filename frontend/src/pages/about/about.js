import { html, LitElement } from '@polymer/lit-element';
import css from './about.css';

class AboutPageComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div>

        <p>To get started, edit <code>src/pages/about/about.js</code>!</p>

      </div>
    `;
  }
}

customElements.define('about-page', AboutPageComponent);