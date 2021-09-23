const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const api = require('./api');

const httpPort = process.env.HTTP_PORT || 5000;
const dbUri = process.env.MONGODB_CONNECTION || "mongodb+srv://alexeimdev:reason10@cluster0.dopsm.mongodb.net/messaging-app?retryWrites=true&w=majority";

// global fetch
if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

app.use(cors());
app.use('/api', api);


// connecting to mongodb
try {
	console.log('[server]', 'trying to connect to mongodb...');
	mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
	console.log('[server]', 'connected to mongodb');
} catch (error) {
	console.error('[server]', 'failed to connect to mongodb!');
	throw error;
}

io.on('connection', (socket) => {
	console.log('[server]', 'socket.io connection is made');

	//user sending message
	socket.on("chat", ({ text, author }) => {
		console.log('[server.io.connectio.chat]', 'text', text, 'author', author);

		//gets the room user and the message sent
		//const p_user = get_Current_User(socket.id);

		// io.to(p_user.room).emit("message", {
		// 	userId: p_user.id,
		// 	username: p_user.username,
		// 	text: text,
		// });
	});
});

server.listen(httpPort, () => {
	console.log('[server]', 'listening on port', httpPort);
});