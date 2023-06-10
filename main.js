function normalizeURL(URLstring) {
    
    const { host, pathname } = new URL(URLstring);
    const stripProtocal = `${host}${pathname}`
    
    if(stripProtocal.length > 0 && stripProtocal.slice(-1) === '/') {
        return stripProtocal.slice(0,-1);
    }
    return stripProtocal;
}

normalizeURL('https://github.com/coreybutler/nvm-windows/releases/')