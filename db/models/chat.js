const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Chat extends Model {
		static associate(models) {}
	}
	Chat.init(
		{
			name: DataTypes.TEXT,
			lastMessage: DataTypes.TEXT,
			isNewMessage: DataTypes.BOOLEAN
		},
		{
			sequelize,
			modelName: 'Chat'
		}
	)
	return Chat
}
