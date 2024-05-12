const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Message extends Model {
		static associate(models) {}
	}
	Message.init(
		{
			userId: DataTypes.STRING,
			message: DataTypes.TEXT,
			chatId: DataTypes.STRING
		},
		{
			sequelize,
			modelName: 'Message'
		}
	)
	return Message
}
