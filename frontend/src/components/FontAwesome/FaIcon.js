import { LitElement, html } from '@polymer/lit-element';
import { FaStyles } from './fontawesome-all.js';

/* https://stackoverflow.com/questions/50342356/how-to-use-font-awesome-with-polymer-litelement */

export class FaIcon extends LitElement {
  static get properties() {
    return {
      iclass: String
    };
  }
  constructor() {
    super();
    this.iclass = '';
    const fontEl = document.createElement('link');

    fontEl.rel = 'stylesheet';
    fontEl.href = 'https://use.fontawesome.com/releases/v5.0.13/css/all.css';
    document.head.appendChild(fontEl);
  }
  render() {
    return html`${FaStyles}<i class=${this.iclass}></i>`;
  }
}
customElements.define('fa-icon', FaIcon);
