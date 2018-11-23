import { html, LitElement } from '@polymer/lit-element';
import css from './Post.css';
import { store } from '../../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { getPost } from '../../actions/app.js';

const apiUrl = process.env.API_URL || 'http://localhost:1337';

class Post extends connect(store)(LitElement) {
  static get properties() {
    return {
      post: Object,
      id: String
    };
  }

  updated(changedProps) {
    if (changedProps.has('id')) {
      store.dispatch(getPost(this.id));
    }
    return true;
  }

  changeContainer() {
    if (this.id) {
      return 'single-card card';
    }
    return 'card';
  }

  render() {
    if (this.post) {
      const { _id, title, author, image, content } = this.post;

      return html`
    <style>
        ${css}
    </style>
    <div class=${this.changeContainer()}>
      <h2><a href="/page/${_id}">${title}</a></h2>
      <p>By: ${author.username}</p>
      <img src=${`${apiUrl}${image.url}`} width="500px" />
      <p>${content}</p>
    </div>
    `;
    }
    return null;
  }
  // This is called every time something is updated in the store.
  stateChanged(state) {
    if (this.id) {
      this.post = state.app.post;
    }
  }
}

customElements.define('eve-post', Post);
