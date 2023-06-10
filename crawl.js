function normalizeURL(URLstring) {
    const { host, pathname } = new URL(URLstring);
    const stripProtocol = `${host}${pathname}`;

    // Removing trailing slashes //

    if(stripProtocol.length > 0 && stripProtocol.slice(-1) === '/') {
        console.log(stripProtocol.slice(0, -1))
        return stripProtocol.slice(0, -1)
    }

    return stripProtocol;
}
// normalizeURL('https://github.com/coreybutler/nvm-windows/releases/')
module.exports = {
    normalizeURL
}
