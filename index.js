'use strict';

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*', (request, response) => {
  response.sendFile(`dist/index.html`, {root: '.'});
})

app.listen(process.env.PORT);
