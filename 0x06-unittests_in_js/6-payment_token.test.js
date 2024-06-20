const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it("return a data object data: successful response from API", function() {
    getPaymentTokenFromAPI(true)
    .then((res) => {
      console.log(res)
      expect(res.data).to.be.equal('Sucessful response from the API');
      done();
    })
    .catch((err) => done(err));
  });
});
