const { getChats } = require('../controllers/chatController')

async function queryChats(obj, args, context) {
	let { request, response } = context
	request.body = args['request']
	return await getChats(request, response)
}

const resolvers = {
	Query: {
		queryChats: queryChats
	}
}

module.exports = {
	resolvers
}
