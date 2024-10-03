import nodemailer from 'nodemailer';

// Функция для отправки пароля по электронной почте
const sendPasswordEmail = async (email, rawPassword) => {
	const subject = 'Ваш новый пароль';
	const text = `Ваш пароль: ${rawPassword}`; // Используйте сгенерированный пароль в тексте
						
	const transporter = nodemailer.createTransport({
		host: 'smtp.mail.ru',
		port: 587,
		secure: false, // true для 465, false для остальных портов
		auth: {
		user: 'adconnect_ofiicial@mail.ru', // Ваш общий email
		pass: 'AiREUu42C7MgRnxJApeB' // Пароль от вашего общего почтового ящика
	}
});

const mailOptions = {
	from: '"AD connect" <adconnect_ofiicial@mail.ru>', // Адрес отправителя должен совпадать с указанным в auth
	to: email,
	subject: subject,
	text: text,
};
						
	try {
		await transporter.sendMail(mailOptions);
		console.log('Сообщение отправлено:', email);
	} catch (error) {
		console.error('Ошибка при отправке письма:', error);
	}
};
						
// Экспорт функции
export { sendPasswordEmail };