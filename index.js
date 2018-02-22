'use strict';

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/frontend/src/build`));

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/frontend/src/build/index.html`);
})

app.listen(process.env.PORT);