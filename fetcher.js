async function fetcher(baseURL) {
    console.log(`Actively crawling ${baseURL}`);
    try {
        const res = await fetch(baseURL);

        //===Check if request returns a valid response===//

        if(res.status > 399) {
            console.log(`Error in fetching URL with status code ${res.status}`);
            return
        }
        const contentType = res.headers.get('content-type');

        //===check if response is valid html===//
        
        if (!contentType.includes('text/html')) {
         
            console.log(`Error in fetching URL non html content ${res.status}`);
            return 
        }
        const HTMLbody = await res.text();
        console.log(HTMLbody);
        return HTMLbody;

    }catch (err){
        console.log(`Error: Invalid fetching URL, invalid URL ${baseURL}`);
    }
}


fetcher('https://allanfernandes.dev/garbageURL');

module.exports = {
    fetcher
}