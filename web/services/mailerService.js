const nodemailer = require('nodemailer')
require('dotenv').config()

async function sendEmail(user, mail) {
	try {
		const mailOptions = mail
		mailOptions.to = user.email
		mailOptions.from = process.env.MAIL

		const transporter = nodemailer.createTransport({
			host: 'smtp.yandex.ru',
			port: 465,
			secure: true,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS
			}
		})

		await transporter.sendMail(mailOptions)
	} catch (e) {
		console.error('Ошибка:', e)
		throw e
	}
}

module.exports = {
	sendEmail
}
