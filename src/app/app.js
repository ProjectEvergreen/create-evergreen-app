import { html, LitElement } from '@polymer/lit-element';
import '../components/header/header.js';
import '../pages/home/home.js';
import css from './app.css';

class AppComponent extends LitElement {
  render() {
    return html`
      <style>
        ${css}
      </style>

      <div>
        <section>
          <eve-header></eve-header>
        </section>
        <section>
          <eve-home-page></eve-home-page>
        </section>
      </div>
    `;
  }
}

customElements.define('eve-app', AppComponent);
