import { html, LitElement } from "lit";
import { unsafeSVG } from "lit-html/directives/unsafe-svg.js";
export default class FcIcon extends LitElement {
  static get properties() {
    return {
      name: { attribute: true },
      group: { attribute: true },
      size: { attribute: true },
      color: { attribute: true },
      _svgContent: { state: true },
      _iconClass: { state: true },
      _icon: { state: true },
      _baseURL: { state: true },
      _sym: { state: true },
      _url: { state: true },
    };
  }

  constructor() {
    super();
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("name") || changedProperties.has("group")) {
      this.loadIcon();
    }
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
    const url = `${baseUrl}${this.group}/${this.name}.svg`;
    this._url = url;
    this._svgContent = await this.getSvgContent(this._url);
  }
  render() {
    let styledSvg = `<svg class="${
      this._iconClass ? this._iconClass : "icon"
    }" style="height:${this.size}px; width: ${this.size}px; fill: ${
      this.color
    }"`;
    styledSvg = this._svgContent?.replace(/<svg/, styledSvg);
    this._icon = styledSvg;

    return html`${unsafeSVG(this._icon)}`;
  }
}

window.customElements.define("fc-icon", FcIcon);
