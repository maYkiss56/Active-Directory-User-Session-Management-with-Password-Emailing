import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
	auth: {
		user: process.env.SMTP_USER, // Ваш SMTP логин
		pass: process.env.SMTP_PASS, // Ваш SMTP пароль
	},
});

export const sendPasswordEmail = async (to, password) => {
	const mailOptions = {
		from: process.env.SMTP_FROM, // Адрес отправителя
		to, // Адрес получателя
		subject: 'Ваш новый пароль', // Тема письма
		text: `Здравствуйте! Ваш новый пароль для доступа: ${password}`, // Текст письма
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log(`Пароль успешно отправлен на ${to}`);
	} catch (error) {
		console.error(`Ошибка отправки письма на ${to}:`, error);
	}
};
