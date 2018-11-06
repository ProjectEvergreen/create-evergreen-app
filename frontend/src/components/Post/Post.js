import { html, LitElement } from '@polymer/lit-element';
// import css from './Post.css';
import '../Card/Card';

class Post extends LitElement {
  static get properties() {
    return {
      post: { type: Object },
      apiUrl: { type: String }
    };
  }

  render() {
    const { title, author, image, content } = this.post;

    return html`
    <li>
        <x-card>
        <h2>${title}</h2>
        <p>By: ${author.username}</p>
        <img src=${`${this.apiUrl}${image.url}`} width="500px" />
        <p>${content}</p>
        </x-card>
  </li>
        `;
  }
}

customElements.define('eve-post', Post);
