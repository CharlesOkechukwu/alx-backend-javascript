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

describe('available payments', () => {
  it('return payment methods', (done) => {
    request('http://localhost:7865/available_payments', (err, resp, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });
});

describe('login', () => {
  it('response', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: "Betty" },
    }, (err, resp, body) => {
      expect(body).to.equal('Welcome Betty');
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });
});
