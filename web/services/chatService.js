const { where } = require('sequelize')
const { Chat, Message } = require('../../db/models')
const chat = require('../../db/models/chat')

async function getChats() {
	try {
		let chats = await Chat.findAll()
		chats = chats.map(({ dataValues }) => dataValues)
		let messages = await Message.findAll()
		messages = messages.map(({ dataValues }) => dataValues)
		messagesDictionary = {}
		for (let i = 0; i < messages.length; i++) {
			if (messagesDictionary[messages[i].chatId]) {
				messagesDictionary[messages[i].chatId].push(messages[i])
			} else {
				messagesDictionary[messages[i].chatId] = [messages[i]]
			}
		}

		chats = chats.map(chat => {
			if (messagesDictionary[chat?.id]) {
				chat.messages = messagesDictionary[chat?.id]
			} else {
				chat.messages = []
			}
			return chat
		})

		return chats
	} catch (e) {
		console.error(e)
		throw e
	}
}

module.exports = {
	getChats
}
