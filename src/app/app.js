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
          <eve-header></eve-header>
          <eve-home-page></eve-home-page>
      </div>
    `;
  }
}

customElements.define('eve-app', AppComponent);
