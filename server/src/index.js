const express = require('express');
const cors = require('cors');
const path = require('path');
const api = require('./api');

const app = express();

const publicPath = path.join(__dirname, '/../../client/public');
const buildPath = path.join(__dirname, '/../../client/build');

app.use(cors());
app.use(express.static(publicPath));

app.use('/api', api);
app.use('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

const httpPort = process.env.HTTP_PORT || 5000;
app.listen(httpPort, () => {
	console.info(`listening on port ${httpPort}`);
});