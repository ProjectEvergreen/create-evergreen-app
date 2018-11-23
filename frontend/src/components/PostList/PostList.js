import { html, LitElement } from '@polymer/lit-element';
import css from './PostList.css';
import '../Post/Post';
import { store } from '../../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { getPosts } from '../../actions/app.js';

class PostList extends connect(store)(LitElement) {
  static get properties() {
    return {
      id: Object,
      posts: Array,
      post: Object
    };
  }

  render() {
    return this.posts && html`
    <style>
        ${css}
    </style>
    <ul>
      ${this.posts.map(post => html`
        <li>
          <eve-post .post=${post}></eve-post>
        </li>
      `)}
    </ul>
    `;
  }

  constructor() {
    super();
    store.dispatch(getPosts());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this.posts = state.app.posts;
  }
}

customElements.define('post-list', PostList);
