import { html, LitElement } from '@polymer/lit-element';
import css from './Card.css';

class Card extends LitElement {
  render() {
    return html`
            <style>
                ${css}
            </style>
            <slot>
                
            </slot>
        `;
  }
}

customElements.define('x-card', Card);
