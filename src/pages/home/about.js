import { html, LitElement } from '@polymer/lit-element';
import css from './layout.css';

class AboutPageComponent extends LitElement {
  render() {
    return html`
      <style>
        ${css}
      </style>

      <div class="container">
        <h1>About</h1>
      </div>
    `;
  }
}

customElements.define('about-page', AboutPageComponent);
