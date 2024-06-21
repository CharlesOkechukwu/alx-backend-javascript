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

describe('cart page', () => {
  it('response and resonse code', (done) => {
    request('http://localhost:7865/cart/7', (err, resp, body) => {
      expect(body).to.equal('Payment methods for cart 7');
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });
  it('response for invalid number', (done) => {
    request('http://localhost:7865/cart/non', (err, resp) => {
      expect(resp.statusCode).to.equal(404);
      done();
    });
  });
});
