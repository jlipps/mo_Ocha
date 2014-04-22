/* global it:true, before:true, after:true, beforeEach:true, afterEach: true */
"use strict";

var _ = require('lodash')
  , monocle = require('monocle-js')
  , o_O = monocle.o_O;

var mo_O = {};

mo_O.it = function (desc, gen) {
  it(desc, function (done) {
    o_O(gen)().add(done);
  });
};

var mochaHooks = {
  before: before,
  after: after,
  beforeEach: beforeEach,
  afterEach: afterEach
};

_.each(mochaHooks, function (hook, name) {
  mo_O[name] = function (gen) {
    hook(function (done) {
      o_O(gen)().add(done);
    });
  };
});

module.exports = mo_O;
