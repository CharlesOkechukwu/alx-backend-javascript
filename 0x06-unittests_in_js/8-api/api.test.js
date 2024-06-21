const request = require('request');
const chai = require('chai');
const { expect } = chai;

describe("Index Page", () => {
  it('response and response code', (done) => {
    try {
      request('http://localhost:7865/', (err, resp, body) => {
        expect(resp.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    } catch (err) {
      done(err);
    }
  });
});  
