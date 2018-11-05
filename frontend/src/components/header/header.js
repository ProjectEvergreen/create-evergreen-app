import { html, LitElement } from '@polymer/lit-element';
import css from './header.css';

class HeaderComponent extends LitElement {
  render() {
    return html`      
      <style>
        ${css}
      </style>

        <nav>
        <div class="container">
          <div class="brand"><h1>Project Evergreen</h1></div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/docs">Docs</a></li>
          </ul>
        </div>
        </nav>
    `;
  }
}

customElements.define('eve-header', HeaderComponent);
