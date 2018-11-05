import { html, LitElement } from '@polymer/lit-element';
import css from './app.css';
import '../components/header/header';
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
      <div>
        <ul>
          ${this.posts.map(post => html`
            <li>
              <h2>${post.title}</h2>
              <p>By: ${post.author.username}</p>
              <img src=${`${apiUrl}${post.image.url}`} width="500px" />
              <p>${post.content}</p>
            </li>
          `)}
        </ul>

      </div>
    `;
  }
}

customElements.define('eve-app', AppComponent);
