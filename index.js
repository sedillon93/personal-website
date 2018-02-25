'use strict';

const express = require('express');
const testing = express();

testing.use(express.static(`${__dirname}/dist`));

testing.get('*', (request, response) => {
  response.sendFile(`index.html`, {root: './dist'});
})

testing.listen(process.env.PORT);
