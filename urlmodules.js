const url = require('url');
///const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
const myURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(myURL)

const myURL2 = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL2)