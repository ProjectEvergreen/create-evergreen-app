import { html, LitElement } from '@polymer/lit-element';

class FooterComponent extends LitElement {

  render() {
    return html`      
      <footer class="footer">

        <h1>Footer</h1>
      
      </footer>
    `;
  }
}

customElements.define('eve-footer', FooterComponent);