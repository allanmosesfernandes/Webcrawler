const { fetcher : PageHTML } = require("./fetcher.js")


function main() {

    if(process.argv.length < 3) {
        console.log('no website provided');
        process.exit(1)
    }
    if(process.argv.length > 3) {
        console.log('Too many command line arguments');
        process.exit(1)
    }
    const baseURL = process.argv[2];
    const crawlPage = PageHTML(baseURL);
}

main()