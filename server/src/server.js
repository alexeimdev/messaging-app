const express = require('express');
const cors = require('cors');
const api = require('./api');

const httpPort = process.env.HTTP_PORT || 5000;

const app = express();

app.use(cors());
app.use(express.static(publicPath));

app.use('/api', api);

app.listen(httpPort, () => {
	console.info(`listening on port ${httpPort}`);
});