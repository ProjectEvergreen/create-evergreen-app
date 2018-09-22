import { html, LitElement } from '@polymer/lit-element';
import '../components/footer/footer.js';
import '../components/header/header.js';
import '../pages/home/home.js';
import css from './app.css';

class AppComponent extends LitElement {

  render() {
    return html`
      <style>
        ${css}
      </style>
      
      <div class="app-container">

        <section>
          <eve-header></eve-header>
        </section>

        <section>
          <eve-home-page></eve-home-page>
        </section>

        <section>
          <eve-footer></eve-footer>
        </section>

      </div>
    `;
  }
}

customElements.define('eve-app', AppComponent);