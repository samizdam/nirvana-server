async function getChats(request, response) {
	let result = {
		success: false,
		chats: null,
		errors: null
	}
	try {
		let chats = [
			{ id: 1, name: 'sfss', lastMessage: 'fasf' },
			{ id: 2, name: 'sfssafdsfd', lastMessage: 'faasfdssf' }
		]
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
