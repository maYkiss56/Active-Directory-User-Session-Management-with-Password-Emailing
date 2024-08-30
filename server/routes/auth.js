import express from 'express';
import bcrypt from 'bcryptjs';
import { authenticateUser } from '../config/ad';
import { savePasswordToDB, verifyPassword } from '../config/db';
import { sendPasswordEmail } from '../config/mailer';

const router = express.Router();

//Регистрация пользователей
router.post('/register', async (req, res) => {
	const { username, email } = req.body;
	const rawPassword = crypto.randomBytes(4).toString('hex');
	const hashedPassword = bcrypt.hashSync(rawPassword, 10);

	try {
		await savePasswordToDB(username, hashedPassword);
		await sendPasswordEmail(email, rawPassword);
		res.status(200).json({ message: 'Пользователь успешно прошел регистрацию, и пароль был отправлен'});
	} catch (error) {
		res.status(500).json({ error: 'Регистрация прошла с ошибкой.'});
	}
});


//Авторизация пользователя
router.post('/login', async(req, res) => {
	const{ username, password } = req.body;
	const isValidPassword = await verifyPassword(username, password);

	if (isValidPassword) {
		const isAuthenticated = await authenticateUser(username, password);
		if (isAuthenticated) {
			res.status(200).json( {message: 'Пользователь авторизован.' });
		} else {
			res.status(401).json({ message: 'Авторизация обратилась в ошибку.' });
		}
	} else {
		res.status(401).json({ error: 'Невверные учетные данные' });
	}
});

export default router;