import { html, LitElement } from '@polymer/lit-element';
import css from './home.css';

class HomePageComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <div>

        <h1>Welcome to Project Evergreen!</h1>

        <p>To get started, edit <code>./src/pages/home/home.js</code>!</p>
      
      </div>
    `;
  }
}

customElements.define('eve-home-page', HomePageComponent);