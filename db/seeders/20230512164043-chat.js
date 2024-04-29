const { v4: uuidv4 } = require('uuid')

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Chats',

			[
				{
					id: uuidv4(),
					name: 'andrey burov 1',
					lastMessage: 'privet'
				},
				{
					id: uuidv4(),
					name: 'andrey burov 2',
					lastMessage: 'privet2'
				},
				{
					id: uuidv4(),
					name: 'andrey burov 3',
					lastMessage: 'privet3'
				},
				{
					id: uuidv4(),
					name: 'andrey burov 4',
					lastMessage: 'privet4'
				},
				{
					id: uuidv4(),
					name: 'andrey burov 5',
					lastMessage: 'privet5'
				},
				{
					id: uuidv4(),
					name: 'andrey burov 6',
					lastMessage: 'privet6'
				},
				{
					id: uuidv4(),
					name: 'andrey burov 7',
					lastMessage: 'privet7'
				},
				{
					id: uuidv4(),
					name: 'andrey burov 8',
					lastMessage: 'privet8'
				}
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Chats', null, {})
	}
}
