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

test('Normalize URLs', () => {
    const input = ""
    const actualOutput = normalizeURL(input)
    const expected = "something else"
    expect(actualOutput).toEqual(expected)
})