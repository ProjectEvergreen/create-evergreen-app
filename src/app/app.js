import { html, LitElement } from '@polymer/lit-element';
import '../components/header/header.js';
import '../pages/home/docs.js';
import '../pages/home/home.js';
import '../pages/home/about.js';
import css from './app.css';
import { connectRouter } from 'lit-redux-router';
import store from './store.js';

connectRouter(store);

class AppComponent extends LitElement {
  render() {
    return html`
      <style>
        ${css}
      </style>
      
      <div>
        <eve-header></eve-header>
        <lit-route path="/" component="home-page"></lit-route>
        <lit-route path="/about" component="about-page"></lit-route>
        <lit-route path="/docs" component="docs-page"></lit-route>
      </div>
    `;
  }
}

customElements.define('eve-app', AppComponent);
