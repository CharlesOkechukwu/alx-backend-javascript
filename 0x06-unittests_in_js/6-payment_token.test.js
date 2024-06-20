const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it("return a data object data: successful response from API", function() {
    getPaymentTokenFromAPI(true)
    .then((res) => {
      expect(res).to.deep.equal({data: 'Successful response from the API'});
      done();
    });
  });
});
