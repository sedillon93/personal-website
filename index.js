'use strict';

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/frontend/src/build`));

app.get('*', (request, response) => {
  console.log('hello');
  console.log(`${__dirname}/frontend/src/build/index.html`)
  response.sendFile(`${__dirname}/frontend/src/build/index.html`);
})

app.listen(process.env.PORT);
