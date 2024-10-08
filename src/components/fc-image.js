import { html, LitElement } from "lit";
export default class FcImage extends LitElement {
  static get properties() {
    return {
      name: { attribute: true },
      height: { attribute: true },
      width: { attribute: true },
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

  async loadIcon() {
    let cdnUrl = "https://icons.facilio.com/icons/svg/";
    let baseUrl = window[this.sym]?.baseUrl ? window[this.sym].baseURL : cdnUrl;
    const url = `${baseUrl}images/${this.name}.webp`;
    this._url = url;
  }
  render() {
    return html` <img
      src=${this._url}
      alt=${this.name}
      style="max-height:
    ${this.height + "px"}; max-width: ${this.width +
      "px"}; width: 'auto'; height:
    'auto'"
    />`;
  }
}
if (!window.customElements.get("fc-image")) {
  window.customElements.define("fc-image", FcImage);
}
