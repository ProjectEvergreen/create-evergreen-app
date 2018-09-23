import { html, LitElement } from '@polymer/lit-element';
import css from './header.css';
import logo from './logo.png';

class HeaderComponent extends LitElement {

  render() {
    return html`      
      <style>
        ${css}
      </style>

      <header class="header">

        <a href="https://projectevergreen.github.io/">
          <img src=${logo} alt="Project Evergreen logo"/>
        </a>

        <h1>Welcome to Create Evergreen App!</h1>
      
      </header>
    `;
  }
}

customElements.define('eve-header', HeaderComponent);