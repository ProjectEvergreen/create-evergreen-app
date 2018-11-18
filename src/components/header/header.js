import { html, LitElement } from '@polymer/lit-element';
import css from './header.css';
import logo from './logo.png';

class HeaderComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>

      <header>
        <a href="https://projectevergreen.github.io/" title="Project Evergreen home link" style="background-image: url(./${logo})">&nbsp;</a>
        <h1>
          <small>Welcome to</small>
          Create&nbsp;Evergreen&nbsp;App!</h1>
      </header>
    `;
  }
}

customElements.define('eve-header', HeaderComponent);