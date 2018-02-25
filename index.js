'use strict';

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*', (request, response) => {
  response.sendFile(`/personal-website/dist/index.html`);
})

app.listen(process.env.PORT);
