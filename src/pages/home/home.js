import { html, LitElement } from '@polymer/lit-element';

class HomePageComponent extends LitElement {

  render() {
    return html`      
      <div class="page-home">

        <h1>Home Page</h1>
      
      </div>
    `;
  }
}

customElements.define('eve-home-page', HomePageComponent);