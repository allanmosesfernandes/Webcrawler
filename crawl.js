function normalizeURL(URLstring) {
     const { host, pathname } = new URL(URLstring);
     const stripProtocol = `${host}${pathname}`
    
    // if(stripProtocal.length > 0 && stripProtocal.slice(-1) === '/') {
    //     return stripProtocal.slice(0,-1);
    // }
    // console.log(stripProtocol);
    return stripProtocol;
}
// normalizeURL('https://github.com/coreybutler/nvm-windows/releases/')
module.exports = {
    normalizeURL
}
