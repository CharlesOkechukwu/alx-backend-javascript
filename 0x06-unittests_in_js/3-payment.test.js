const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi =  require('./3-payment');

describe("sendPaymentRequestToApi", function() {
  beforeEach(function() {
    sinon.spy(Utils, 'calculateNumber');
  });
  afterEach(function() {
    sinon.restore();
  });
  it("validate that utils.calculateNumber is called once", function() {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });
  it("validate the arguments used to call utils.calculateNumber", function() {
    sendPaymentRequestToApi(100,20);
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal('SUM');
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });
});
