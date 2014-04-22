mo_ocha
=======

Use [monocle-js](https://github.com/jlipps/monocle-js) to write asynchronous mocha code without callbacks or remembering to pass "done" everywhere!

Install:

```
npm install mo_ocha
```

Then:

```js
var mo_ocha = require('mo_ocha')
  , it = mo_ocha.it
  , before = mo_ocha.before
  , should = require('should');

describe('My sweet project', function () {
  before(function* () {
    yield doSomeTestSetup();
  });

  it('should work as expected', function* () {
    var res = yield myAsyncMethod();
    res.should.equal('foo');
  });
});
```

## Run tests:

```
make test
```
