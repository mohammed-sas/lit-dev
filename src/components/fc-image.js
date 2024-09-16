import { html, LitElement } from "lit";
import { unsafeSVG } from "lit-html/directives/unsafe-svg.js";
export class FcImage extends LitElement {
  static get properties() {
    return {
      name: { attribute: true },
      size: { attribute: true },
      color: { attribute: true },
      _baseURL: { state: true },
      _sym: { state: true },
      _url: { state: true },
    };
  }

  constructor() {
    super();
  }
  updated() {
    this.loadIcon();
  }
  async getSvgContent(url) {
    try {
      let rsp = await fetch(url);
      let content = rsp.text();
      return content;
    } catch (e) {}
  }
  async loadIcon() {
    let cdnUrl = "https://icons.facilio.com/icons/svg/";
    let baseUrl = window[this.sym]?.baseUrl ? window[this.sym].baseURL : cdnUrl;
    const url = `${baseUrl}images/${this.name}.webp`;
    this._url = url;
    this._svgContent = await this.getSvgContent(this._url);
  }
  render() {
    return html` <img
      src=${this._url}
      alt=${this.name}
      style="maxHeight:
    ${this.height + "px"}; maxWidth: ${this.width +
      "px"}; width: 'auto'; height:
    'auto'"
    />`;
  }
}

window.customElements.define("fc-icon", FcIcon);
