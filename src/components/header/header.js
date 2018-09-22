import { html, LitElement } from '@polymer/lit-element';

class HeaderComponent extends LitElement {

  render() {
    return html`      
      <header class="header">

        <h1>Header</h1>
      
      </header>
    `;
  }
}

customElements.define('eve-header', HeaderComponent);