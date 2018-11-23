import { html, LitElement } from '@polymer/lit-element';
import css from './App.css';
import '../components/Header/Header';
import '../components/PostList/PostList';
import '../components/Post/Post';
import '../pages/docs/docs';
import '../pages/about/about';
import { connectRouter } from 'lit-redux-router';
import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

class AppComponent extends connect(store)(LitElement) {

  constructor() {
    super();
    connectRouter(store);
  }

  render() {
    return html`
      <style>
        ${css}
      </style>

      <eve-header></eve-header>
        <lit-route path="/" component="post-list"></lit-route>
        <lit-route path="/about" component="about-page"></lit-route>
        <lit-route path="/docs" component="docs-page"></lit-route>
        <lit-route path="/page/:id" component="eve-post"></lit-route>
    `;
  }
}

customElements.define('eve-app', AppComponent);
