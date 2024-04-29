const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class ChatPerUser extends Model {
		static associate({ User, Chat }) {
			this.belongsTo(User, { foreignKey: 'userId' })
			this.belongsTo(Chat, { foreignKey: 'chatId' })
		}
	}
	ChatPerUser.init(
		{
			chatId: DataTypes.STRING,
			userId: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'ChatPerUser'
		}
	)
	return ChatPerUser
}
