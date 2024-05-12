const { v4: uuidv4 } = require('uuid')

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Chats',

			[
				{
					id: uuidv4(),
					name: 'andrey burov 1',
					lastMessage: 'privet',
					isNewMessage: true
				},
				{
					id: uuidv4(),
					name: 'andrey burov 2',
					lastMessage: 'privet2',
					isNewMessage: true
				},
				{
					id: uuidv4(),
					name: 'andrey burov 3',
					lastMessage: 'privet3',
					isNewMessage: false
				},
				{
					id: uuidv4(),
					name: 'andrey burov 4',
					lastMessage: 'privet4',
					isNewMessage: false
				},
				{
					id: uuidv4(),
					name: 'andrey burov 5',
					lastMessage: 'privet5',
					isNewMessage: false
				},
				{
					id: uuidv4(),
					name: 'andrey burov 6',
					lastMessage: 'privet6',
					isNewMessage: false
				},
				{
					id: uuidv4(),
					name: 'andrey burov 7',
					lastMessage: 'privet7',
					isNewMessage: false
				},
				{
					id: uuidv4(),
					name: 'andrey burov 8',
					lastMessage: 'privet8',
					isNewMessage: true
				}
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Chats', null, {})
	}
}
