import { html, LitElement } from "lit";
export default class FcIllustration extends LitElement {
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

  async loadIcon() {
    let cdnUrl = "https://icons.facilio.com/icons/svg/";
    let baseUrl = window[this.sym]?.baseUrl ? window[this.sym].baseURL : cdnUrl;
    const url = `${baseUrl}illustrations/${this.name}.webp`;
    this._url = url;
  }
  render() {
    const SIZE_HASH = {
      S: "80px",
      M: "160px",
      L: "320px",
    };
    let illustrationSize = SIZE_HASH[this.size];
    return html` <img
      src=${this._url}
      alt=${this.name}
      style="max-height:
    ${illustrationSize}; max-width: ${illustrationSize}; width: 'auto'; height:
    'auto'"
    />`;
  }
}

if (!window.customElements.get("fc-illustration")) {
  window.customElements.define("fc-illustration", FcIllustration);
}
