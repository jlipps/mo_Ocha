mo_Ocha
=======

Use [monocle-js](https://github.com/jlipps/monocle-js) to write asynchronous mocha code without callbacks or remembering to pass "done" everywhere!

Install:

```
npm install mo_Ocha
```

Then:

```js
var mo_Ocha = require('mo_Ocha')
  , it = mo_Ocha.it
  , before = mo_Ocha.before
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
