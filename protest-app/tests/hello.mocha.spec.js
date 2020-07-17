var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;


describe('Mocha with protractor', function() {
  it('should still do normal tests', function() {
    expect(true).to.equal(true);
  });
});