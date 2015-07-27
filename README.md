# Easy Test

A straightforward test suite for node.js

## Installation

```
$  npm install --save-dev easy-test
```

# Usage

Set test script:

```
//in package.json
scripts: {
  test: "node ./test/index.js"
}
```

Run tests on invocation:
```
//in test/index.js
easyTest = require('easy-test')
easyTest.run({
  dir: {DIR} // defaults to ./test/tests
  files: {FILES} //defaults to *.js (is a shell glob like used in find . -name {FILES})
})
```

# TODO

* Async tests
