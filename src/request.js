export const iconContent = new Map();
const requests = new Map();

export const getSvgContent = (url) => {
  let req = requests.get(url);
  if (!req) {
    let [reqURL] = url.split(",");
    req = fetch(reqURL)
      .then((rsp) => {
        if (rsp.ok) {
          return rsp.text().then((svgContent) => {
            iconContent.set(url, svgContent || "");
          });
        }
        iconContent.set(url, "");
      })
      .catch((e) => console.error(e));

    requests.set(url, req);
  }

  return req;
};
