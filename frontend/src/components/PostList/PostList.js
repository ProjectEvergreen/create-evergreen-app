import { html, LitElement } from '@polymer/lit-element';
import css from './PostList.css';
import '../Post/Post';

class PostList extends LitElement {
  static get properties() {
    return {
      posts: { type: Array },
      apiUrl: { type: String }
    };
  }

  // prettier-ignore
  render() {
    return html`
    <style>
        ${css}
    </style>
    <ul>
        ${this.posts.posts.map(post => html`
            <eve-post .post=${post} apiUrl=${this.apiUrl}></eve-post>
        `)}
    </ul>
    `;
  }
}

customElements.define('post-list', PostList);
