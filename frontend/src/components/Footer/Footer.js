import { html, LitElement } from '@polymer/lit-element';
import '../FontAwesome/FaIcon';
import css from './Footer.css';

class Footer extends LitElement {
  render() {
    return html`
        <style>
            ${css}
        </style>
        <footer>
            <p>
                <a href="https://projectevergreen.github.io/">
                <span>
                    <fa-icon iclass="fab fa-lg fa-github-square" ></fa-icon>
                </span>
                &nbsp;Project Evergreen&nbsp;
                </a>released under the Apache 2.0 License
            </p>
        </footer>
    `;
  }
}

customElements.define('eve-footer', Footer);
