const { normalizeURL } = require('./crawl.js');
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
    const expected = "github.com/coreybutler/nvm-windows/releases/"
    expect(actualOutput).toEqual(expected)
})