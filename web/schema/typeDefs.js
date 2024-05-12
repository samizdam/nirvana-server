const typeDefs = `

type ChatResponse {
  id: String
  name: String
  lastMessage: String
  isNewMessage: Boolean
  messages: [Message]
}

type Message {
  id: String
  message: String
  userId: String
  chatId: String
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
