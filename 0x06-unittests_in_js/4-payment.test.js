const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi =  require('./4-payment');

describe("sendPaymentRequestToApi", function() {
  beforeEach(function() {
    sinon.spy(console, "log");
    sinon.stub(Utils, "calculateNumber").returns(10);
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
  it("validate that function prints 'the total is 10'", function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
  });
});
