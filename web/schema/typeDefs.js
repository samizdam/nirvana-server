const typeDefs = `

type ChatResponse {
  id: String
  name: String
  lastMessage: String
}

type QueryChatsResponse{
  success: Boolean
  errors: ErrorInfo
  chats: [ChatResponse]
}

type ErrorInfo{
  code:String
  message:String
}

type Query {
  queryChats: QueryChatsResponse
}

`

module.exports = {
	typeDefs
}
