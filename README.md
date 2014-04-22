mo_ocha
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

(Where in the example above, `doSomeTestSetup` and `myAsyncMethod` are [monocle-js o-routines](https://github.com/jlipps/monocle-js#using-callback-based-methods) or promises)

Running tests written this way is easy: simply run `mocha` with the `--harmony` flag:

```
mocha --harmony my-specs.js
```

Notice that we're simply redefining `it` and `before` to clobber Mocha's built-in one. We could also have simply done this:

```js
require('mo_Ocha').rewrite();
```

Which rewrites the `it`, `before`, `beforeEach`, `after`, and `afterEach` globals.

## Run tests for this project:

```
make test
```
