const { normalizeURL,getURLsfromHTML } = require("./crawl.js")


async function fetcher(baseURL, currentURL, pages = {}) {
  const baseURLObject = new URL(baseURL);
  const currentURLObject = new URL(currentURL);

  const normalizedCurrentURL = normalizeURL(currentURL);
  if (!pages[normalizedCurrentURL]) {
    pages[normalizedCurrentURL] = 0;
  }

  if (pages[normalizedCurrentURL] > 0) {
    pages[normalizedCurrentURL]++;
    return pages;
  }

  pages[normalizedCurrentURL]++;
  console.log(`Actively crawling ${currentURL}`);

  if (baseURLObject.hostname !== currentURLObject.hostname) {
    return pages;
  }

  try {
    const res = await fetch(baseURL);

    if (res.status > 399) {
      console.log(`Error in fetching URL with status code ${res.status}`);
      return pages;
    }

    const contentType = res.headers.get('content-type');

    if (!contentType.includes('text/html')) {
      console.log(`Error in fetching URL non html content ${res.status}`);
      return pages;
    }

    const HTMLbody = await res.text();
    const nextURLs = getURLsfromHTML(HTMLbody, baseURL);
    for (const nextURL of nextURLs) {
      pages = await fetcher(baseURL, nextURL, pages);
    }
    return HTMLbody;
  } catch (err) {
    console.log(`Error: Invalid fetching URL, invalid URL ${baseURL}`);
  }

  return pages;
}



// fetcher('https://allanfernandes.dev',);

module.exports = {
    fetcher
}