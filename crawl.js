const jsdom = require("jsdom");
const validUrl = require('valid-url');
const { JSDOM } = jsdom;
const { fetcher } = require("./fetcher.js")



function getURLsfromHTML(htmlBody, baseURL) {
  const dom = new JSDOM(htmlBody);
  const urls = [];
  const links = dom.window.document.querySelectorAll('a');
  const linksArr = Array.from(links);

  for (const link of linksArr) {
    if (link.href.startsWith('/')) {
      try {
        const url = new URL(`${baseURL.toLowerCase()}${link.href}`);
        if (validUrl.isUri(url.href)) {
          urls.push(url.href);
        }
      } catch (err) {
        console.error(`Error with relative URL ${err.message}`);
      }
    } else {
      try {
        const url = new URL(link.href);
        if (validUrl.isUri(url.href)) {
          urls.push(url.href);
        }
      } catch (err) {
        console.error(`Error with absolute URL ${err.message}`);
      }
    }
  }
  console.log(urls);
  return urls;
}

function normalizeURL(URLstring) {
  const { host, pathname } = new URL(URLstring);
  const stripProtocol = `${host}${pathname}`;

  if (stripProtocol.length > 0 && stripProtocol.slice(-1) === '/') {
    return stripProtocol.slice(0, -1);
  }
  return stripProtocol;
}

// const inputHTML = `
//   <html>
//   <body>
//     <a href="invalid">
//       Link to Github
//     </a>
//     <a href="https://Github.com/coreybutler/nvm-windows/releases/">
//       Link to Github
//     </a>
//   </body>
//   </html>`;

// const baseURL = "https://Github.com";

// getURLsfromHTML(inputHTML, baseURL);

module.exports = {
  normalizeURL,
  getURLsfromHTML
};
