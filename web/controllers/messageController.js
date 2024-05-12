const messageService = require('../services/messageService')

function onConnection(socket) {
	let numUsers = 0

	let addedUser = false

	socket.on('send message', async data => {
		await messageService.addMessage(data)
		socket.broadcast.emit('get message', {
			nickname: data.nickname,
			userId: data.userId,
			message: data.message
		})
	})

	// // when the client emits 'add user', this listens and executes
	// socket.on('add user', username => {
	// 	if (addedUser) return

	// 	// we store the username in the socket session for this client
	// 	socket.username = username
	// 	++numUsers
	// 	addedUser = true
	// 	socket.emit('login', {
	// 		numUsers: numUsers
	// 	})
	// 	// echo globally (all clients) that a person has connected
	// 	socket.broadcast.emit('user joined', {
	// 		username: socket.username,
	// 		numUsers: numUsers
	// 	})
	// })

	// // when the client emits 'typing', we broadcast it to others
	// socket.on('typing', () => {
	// 	socket.broadcast.emit('typing', {
	// 		username: socket.username
	// 	})
	// })

	// // when the client emits 'stop typing', we broadcast it to others
	// socket.on('stop typing', () => {
	// 	socket.broadcast.emit('stop typing', {
	// 		username: socket.username
	// 	})
	// })

	// // when the user disconnects.. perform this
	// socket.on('disconnect', () => {
	// 	if (addedUser) {
	// 		--numUsers

	// 		// echo globally that this client has left
	// 		socket.broadcast.emit('user left', {
	// 			username: socket.username,
	// 			numUsers: numUsers
	// 		})
	// 	}
	// })
}

module.exports = {
	onConnection
}
