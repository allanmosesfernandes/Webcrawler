const { normalizeURL, getURLsfromHTML } = require('./crawl.js');
const { test, expect } = require('@jest/globals')

/* 
the way JEST works with tests is 
test('name of your test', () => {
    const input = ''
    const actualOutput = normalizeURL(input)
    const expected = ''
    expect(actualOutput).toEqual(expected)   
})
*/

test('Remove protocol', () => {
    const input = "https://github.com/coreybutler/nvm-windows/releases/"
    const actualOutput = normalizeURL(input)
    const expected = "github.com/coreybutler/nvm-windows/releases"
    expect(actualOutput).toEqual(expected)
})

test('Trim trailing /', () => {
    const input = "https://github.com/coreybutler/nvm-windows/releases/"
    const actualOutput = normalizeURL(input)
    const expected = "github.com/coreybutler/nvm-windows/releases"
    expect(actualOutput).toEqual(expected)
})

test('Normalize remove capitals', () => {
    const input = "https://Github.com/coreybutler/nvm-windows/releases/"
    const actualOutput = normalizeURL(input)
    const expected = "github.com/coreybutler/nvm-windows/releases"
    expect(actualOutput).toEqual(expected)
})

test('Get Absolute urls from HTML', () => {
    const inputHTML = `
<html>
    <body>
        <a href="https://Github.com/coreybutler/nvm-windows/releases/">
            Link to Github 
        </a>
    </body>
</html>`; 
    const baseURL = "https://Github.com/coreybutler/nvm-windows/releases/"
    const actualOutput = getURLsfromHTML(inputHTML,baseURL)
    const expected = ['https://github.com/coreybutler/nvm-windows/releases/']
    expect(actualOutput).toEqual(expected)
})


test('Get Relative urls from HTML', () => {
    const inputHTML = `
<html>
    <body>
        <a href="/releases">
            Link to Github 
        </a>
    </body>
</html>`; 
    const baseURL = "https://Github.com"
    const actualOutput = getURLsfromHTML(inputHTML,baseURL)
    const expected = ['https://github.com/releases']
    expect(actualOutput).toEqual(expected)
})


test('More than one Link', () => {
    const inputHTML = `
<html>
    <body>
        <a href="/releases">
            Link to Github 
        </a>
        <a href="https://Github.com/coreybutler/nvm-windows/releases/">
            Link to Github 
        </a>
    </body>
</html>`; 
    const baseURL = "https://Github.com"
    const actualOutput = getURLsfromHTML(inputHTML,baseURL)
    const expected = ['https://github.com/releases','https://github.com/coreybutler/nvm-windows/releases/']
    expect(actualOutput).toEqual(expected)
})