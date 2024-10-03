import express from 'express';
import { connectdDB, sql } from '../config/db.mjs';
import { sendPasswordEmail } from '../config/mailer.mjs';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Функция генерации случайного пароля
const generatePassword = () => crypto.randomBytes(4).toString('hex');

// Функция кодирования пароля
const encodePassword = (password) => bcrypt.hashSync(password, 10);

// Функция сохранения пароля в базу данных
const savePasswordToDB = async (fullName, email, passwordHash) => {
	const pool = await connectdDB();
	try {
		await pool.request()
			.input('FullName', sql.NVarChar, fullName)
			.input('Email', sql.NVarChar, email)
			.input('PasswordHash', sql.NVarChar, passwordHash)
			.query('INSERT INTO Users (FullName, Email, PasswordHash) VALUES (@FullName, @Email, @PasswordHash)');
		console.log('Пароль успешно сохранен в базу данных.');
	} catch (err) {
		console.error('Ошибка сохранения пароля в базу данных:', err);
	}
};

// Функция для аутентификации пользователя
const authenticateUser = async (email, password) => {
	const pool = await connectdDB();
	try {
		const result = await pool.request()
			.input('Email', sql.NVarChar, email)
			.query('SELECT PasswordHash FROM Users WHERE Email = @Email');

		if (result.recordset.length > 0) {
			const { PasswordHash } = result.recordset[0];
			// Сравниваем введенный пароль с хешем в базе данных
			return bcrypt.compare(password, PasswordHash);
		} else {
			console.error('Пользователь не найден');
			return false;
		}
	} catch (err) {
		console.error('Ошибка аутентификации:', err);
		return false;
	}
};

// Регистрация пользователя
router.post('/register', async (req, res) => {
	const { fullName, email } = req.body;
	const rawPassword = generatePassword(); // Генерация пароля
	const encodedPassword = encodePassword(rawPassword); // Кодирование пароля

	console.log('Сгенерированный пароль:', rawPassword);
	console.log('Закодированный пароль:', encodedPassword);

	try {
		// Сохранение пароля в базу данных
		await savePasswordToDB(fullName, email, encodedPassword);

		// Отправка пароля пользователю на почту
		await sendPasswordEmail(email, rawPassword); // Передаем rawPassword

		console.log('Пользователь зарегистрирован, пароль отправлен на почту');
		res.status(200).send('Пользователь зарегистрирован, пароль отправлен на почту');
	} catch (error) {
		console.error('Ошибка при регистрации:', error);
		res.status(500).send('Ошибка при регистрации');
	}
});

// Авторизация пользователя
router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	try {
		const isAuthenticated = await authenticateUser(email, password);
		if (isAuthenticated) {
			console.log('Пользователь успешно авторизован');
			res.status(200).send('Успешный вход');
		} else {
			console.log('Неверные учетные данные');
			res.status(401).send('Неверные учетные данные');
		}
	} catch (error) {
		console.error('Ошибка при авторизации:', error);
		res.status(500).send('Ошибка при авторизации');
	}
});

export default router;





