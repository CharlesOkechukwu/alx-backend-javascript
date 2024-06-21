const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, resp) => {
  resp.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, resp) => {
  const { id } = req.params;
  resp.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, resp) => {
  resp.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, resp) => {
  const userName = req.body.userName;
  resp.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
