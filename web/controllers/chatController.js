const chatService = require('../services/chatService')

async function getChats(request, response) {
	let result = {
		success: false,
		chats: null,
		errors: null
	}
	try {
		let chats = chatService.getChats()
		if (chats == null) {
			result.errors = {
				code: '200',
				message: 'No result'
			}
			result.success = true
		} else {
			result.chats = chats
			result.success = true
		}
	} catch (error) {
		result.success = true
		result.errors = {
			code: '500',
			message: error.message
		}
	}
	return result
}

module.exports = {
	getChats
}
