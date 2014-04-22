"use strict";

var _ = require('underscore')
  , monocle = require('monocle-js')
  , o_O = monocle.o_O;

var mo_O = {}
  , mochaIt = GLOBAL.it
  , mochaBefore = GLOBAL.before
  , mochaBeforeEach = GLOBAL.beforeEach
  , mochaAfter = GLOBAL.after
  , mochaAfterEach = GLOBAL.afterEach;

mo_O.it = function (desc, gen) {
  mochaIt(desc, function (done) {
    o_O(gen)().add(done);
  });
};

var mochaHooks = {
  before: mochaBefore,
  after: mochaAfter,
  beforeEach: mochaBeforeEach,
  afterEach: mochaAfterEach
};

_.each(mochaHooks, function (hook, name) {
  mo_O[name] = function (gen) {
    hook(function (done) {
      o_O(gen)().add(done);
    });
  };
});

mo_O.rewrite = function () {
  GLOBAL.before = mo_O.before;
  GLOBAL.after = mo_O.after;
  GLOBAL.beforeEach = mo_O.beforeEach;
  GLOBAL.afterEach = mo_O.afterEach;
  GLOBAL.it = mo_O.it;
};

module.exports = mo_O;
