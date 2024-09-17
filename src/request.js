export const getSvgContent = async (url) => {
  if (url) {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let svgContent = response.text();
        return svgContent;
      }
      return "";
    } catch (e) {
      console.error(e);
    }
  }

  return req;
};
