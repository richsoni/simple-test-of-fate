# Easy Test

A straightforward test suite for node.js

## Installation

```
$  npm install --save-dev simple-test-of-fate
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
stof = require('easy-test')
stof.run({
  dir: {DIR} // defaults to ./test/tests
  files: {FILES} //defaults to *.js (is a shell glob like used in find . -name {FILES})
})
```

# TODO

* Async tests
