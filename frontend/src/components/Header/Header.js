import { html, LitElement } from '@polymer/lit-element';
import css from './Header.css';
import '../Container/Container';

class HeaderComponent extends LitElement {
  render() {
    return html`      
      <style>
        ${css}
      </style>

        <nav>
        <eve-container>
          <div class="brand"><h1>Project Evergreen</h1></div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/docs">Docs</a></li>
          </ul>
        </eve-container>
        </nav>
    `;
  }
}

customElements.define('eve-header', HeaderComponent);
