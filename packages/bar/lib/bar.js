'use strict';
const foo = require('foo')

module.exports = bar;

function bar() {
    // TODO
    console.log('bar2')
    foo()
}

bar()
