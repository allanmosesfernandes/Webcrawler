async function fetcher(baseURL) {
    const res = await fetch(baseURL);
    const HtMLbody = await res.text();
}

fetcher('https://github.com/ogt/valid-url')