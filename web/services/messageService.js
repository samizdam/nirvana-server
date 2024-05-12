const { Message } = require('../../db/models')
const { v4: uuidv4 } = require('uuid')

async function addMessage(data) {
	try {
		await Message.create({
			id: uuidv4(),
			userId: data?.userId,
			message: data?.message,
			chatId: data?.chatId
		})
	} catch (e) {
		console.error(e)
		throw e
	}
}

module.exports = {
	addMessage
}
