import { html, LitElement } from '@polymer/lit-element';
import css from './App.css';
import '../components/Header/Header';
import '../components/Container/Container';
import '../components/PostList/PostList';

import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class AppComponent extends LitElement {
  static get properties() {
    return {
      posts: []
    };
  }
  async connectedCallback() {
    const response = await strapi.request('POST', '/graphql', {
      data: {
        query: `query {
          posts {
            _id
            title
            content
            image {
              url
            }
            author {
              username
            }
          }
        }`
      }
    });

    this.posts = response.data.posts;
  }

  render() {
    // prettier-ignore
    return html`
      <style>
        ${css}
      </style>
      
      <eve-header></eve-header>
      <eve-container>
        ${this.posts && html`
          <post-list name='test' .posts=${this.posts} apiUrl=${apiUrl}></post-list>
        `}
      </eve-container>
    `;
  }
}

customElements.define('eve-app', AppComponent);
