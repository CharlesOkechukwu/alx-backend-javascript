const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, resp) => {
  resp.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, resp) => {
  const { id } = req.params;
  resp.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
