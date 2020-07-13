var assert = require('assert');
var expect = require('chai').expect

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('chai demo',function(){
        var foo = 1
        expect(foo).to.be.a('string');

    })
  });
});