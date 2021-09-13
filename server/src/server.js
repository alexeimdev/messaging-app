const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const api = require('./api');

const httpPort = process.env.HTTP_PORT || 5000;
const dbUri = process.env.MONGODB_CONNECTION || "mongodb+srv://alexeimdev:reason10@cluster0.dopsm.mongodb.net/messaging-app?retryWrites=true&w=majority";

try {
	console.log('[server]', 'trying to connect to mongodb...');
	mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
	console.log('[server]', 'connected to mongodb');
} catch (error) {
	console.error('[server]', 'failed to connect to mongodb!');
	throw error;
}

const app = express();
app.use(cors());
app.use('/api', api);
app.listen(httpPort, () => {
	console.log('[server]', 'listening on port', httpPort);
});