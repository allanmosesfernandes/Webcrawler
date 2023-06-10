const jsdom = require("jsdom");
const { JSDOM } = jsdom; 


function getURLsfromHTML(htmlBody, baseURL ) {
    const dom = new JSDOM(htmlBody);
    const urls = [];
    const Links = dom.window.document.querySelectorAll('a');
    const linksArr = Array.from(Links)
    for (const LinkElements of linksArr) {
        urls.push(LinkElements.href)
    }
    console.log(urls);
    return urls;
}



function normalizeURL(URLstring) {
    const { host, pathname } = new URL(URLstring);
    const stripProtocol = `${host}${pathname}`;

    // Removing trailing slashes //

    if(stripProtocol.length > 0 && stripProtocol.slice(-1) === '/') {
        console.log(stripProtocol.slice(0, -1));
        return stripProtocol.slice(0, -1)
    }
    console.log(stripProtocol);
    return stripProtocol;
}


// const inputHTML = `
//     <html>
//     <body>
//         <a href="https://Github.com/coreybutler/nvm-windows/releases/">
//             Link to Github 
//         </a>
//     </body>
//     </html>`;


// const baseURL = "https://Github.com/coreybutler/nvm-windows/releases/"

// getURLsfromHTML(inputHTML, baseURL)


module.exports = {
    normalizeURL,
    getURLsfromHTML
}
