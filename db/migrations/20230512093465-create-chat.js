/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Chats', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				isUUID: 4
			},
			name: {
				type: Sequelize.TEXT
			},
			lastMessage: {
				type: Sequelize.TEXT
			},
			isNewMessage: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			}
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Chats')
	}
}
