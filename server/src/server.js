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


// get messages from DB
const messages = [
	{
		date: "Yesterday",
		messagesArr: [
			{ time: "07:03", message: "Hi!", author: "alexei@example.com" },
			{ time: "07:05", message: "How you doing?", author: "liat@example.com" },
			{ time: "07:06", message: "I'm fine thanks. How are you?", author: "alexei@example.com" },
			{ time: "07:10", message: "Execllent", author: "liat@example.com" },
		]
	},
];

io.on('connection', (socket) => {

	console.log('[server.ws.connection]', 'socket.io connection is made');

	socket.on("chat", ({ chatId }) => {
		console.log('[server.ws.chat]', 'chatId', chatId);
		socket.emit("chatHistory", messages);
	});

	socket.on("message", ({ chatId, author, messageId, message }) => {
		console.log('[server.ws.message]', 'chatId', chatId, 'author', author, 'messageId', messageId, 'message', message);

		const now = new Date();
		const currentHour = ("0" + now.getHours()).slice(-2);
		const currentMinutes = ("0" + now.getMinutes()).slice(-2);

		let todayMessages = messages?.find(x => x.date === "Today");

		if (todayMessages) {
			messages.find(x => x.date === "Today").messagesArr.push({
				time: `${currentHour}:${currentMinutes}`,
				author: author,
				message: message,
			});
		}
		else {
			messages.push({
				date: "Today",
				messagesArr: [{
					time: `${currentHour}:${currentMinutes}`,
					author: author,
					message: message,
				}]
			});
		}

		socket.broadcast.emit("message", {
			author: author,
			message: message,
		});
		socket.emit("message", {
			author: author,
			message: message,
		});

	});

	// //user sending message
	// socket.on("sendMessage", ({ author, message }) => {

	// 	console.log('sendMessage', author, message);

	// 	//gets the room user and the message sent
	// 	//const p_user = get_Current_User(socket.id);

	// 	// io.to(p_user.room).emit("message", {
	// 	// 	userId: p_user.id,
	// 	// 	username: p_user.username,
	// 	// 	text: text,
	// 	// });

	// 	io.emit("newMessage", {
	// 		author: author,
	// 		message: message,
	// 	});
	// });
});

server.listen(httpPort, () => {
	console.log('[server]', 'listening on port', httpPort);
});