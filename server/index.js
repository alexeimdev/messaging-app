const express = require('express');
const api = require('./api');

const HTTP_PORT = 5000;

const app = express();

app.use('/api', api);

app.listen(HTTP_PORT, () => {
	console.info(`listening on port ${HTTP_PORT}`);
});