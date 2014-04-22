/*global describe:true, before:true, beforeEach:true, afterEach:true, it:true,
  after:true */
"use strict";

var mo_Ocha = require('../lib/main.js')
  , monocle = require('monocle-js')
  , o_O = monocle.o_O
  , sleep = monocle.utils.sleep;

require('should');
mo_Ocha.rewrite();

var slowDouble = o_O(function* (x) {
  yield sleep(10);
  return x * 2;
});

var slowConcat = o_O(function* (str, extra) {
  yield sleep(20);
  return str + extra;
});

describe('mo_Ocha tests', function () {

  var myInt = 2;
  var myStr = '';
  var testsRun = 0;

  before(function* () {
    var start = Date.now();
    myStr.should.equal('');
    myStr = yield slowConcat(myStr, 'foo');
    (Date.now() - start).should.be.above(19);
  });

  beforeEach(function* () {
    var start = Date.now();
    myInt = yield slowDouble(myInt);
    (Date.now() - start).should.be.above(9);
  });

  after(function* () {
    var start = Date.now();
    myInt = yield slowDouble(myInt);
    (Date.now() - start).should.be.above(9);
    myInt.should.equal(32);
  });

  afterEach(function* () {
    var start = Date.now();
    yield sleep(50);
    if (testsRun === 1) {
      myStr.should.equal('foobar');
    } else {
      myStr.should.equal('foobarbaz');
    }
    (Date.now() - start).should.be.above(49);
  });

  it('should work like mocha', function* () {
    myStr.should.equal('foo');
    myInt.should.equal(4);
    var start = Date.now();
    myInt = yield slowDouble(myInt);
    var then = Date.now();
    (then - start).should.be.above(9);
    myStr = yield slowConcat(myStr, 'bar');
    (Date.now() - start).should.be.above(19);
    testsRun++;
  });

  it('should work like mocha some more', function* () {
    myStr.should.equal('foobar');
    myInt.should.equal(16);
    var start = Date.now();
    myStr = yield slowConcat(myStr, 'baz');
    (Date.now() - start).should.be.above(19);
    testsRun++;
  });
});
