const express = require('express');
const router = require('./routes');

const app = express();

app.use('/', router);

app.listen(8090, () => console.log('Example app listening on port 8080!'))