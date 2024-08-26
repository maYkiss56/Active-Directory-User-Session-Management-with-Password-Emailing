import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { connectToDB } from '../config/db.js';
import { authenticateUser } from '../config/ad.js';
import { sendPasswordEmail } from '../config/mailer.js'; // Импортируем функцию отправки почты

// Хранилище сессий в памяти
const sessions = new Map();

// Функция генерации случайного пароля
const generatePassword = () => crypto.randomBytes(4).toString('hex');

// Функция кодирования пароля
const encodePassword = password => bcrypt.hashSync(password, 10);

// Функция сохранения пароля в базу данных
const savePasswordToDB = async (username, passwordHash) => {
	const pool = await connectToDB();
	try {
		await pool.request()
			.input('Username', sql.NVarChar, username)
			.input('PasswordHash', sql.NVarChar, passwordHash)
			.query('INSERT INTO UserPasswords (Username, PasswordHash) VALUES (@Username, @PasswordHash)');
		console.log('Пароль успешно сохранен в базу данных.');
	} catch (err) {
		console.error('Ошибка сохранения пароля в базу данных:', err);
	}
};

// Функция проверки пароля пользователя при входе
const verifyPassword = async (username, enteredPassword) => {
	const pool = await connectToDB();
	try {
		const result = await pool.request()
			.input('Username', sql.NVarChar, username)
			.query('SELECT PasswordHash FROM UserPasswords WHERE Username = @Username');

		if (result.recordset.length > 0) {
			const storedHash = result.recordset[0].PasswordHash;
			return bcrypt.compareSync(enteredPassword, storedHash);
		}
		return false;
	} catch (err) {
		console.error('Ошибка проверки пароля:', err);
		return false;
	}
};

// Функция создания сессии
const createSession = (username) => {
	const sessionId = crypto.randomUUID(); // Генерация уникального идентификатора сессии
	const sessionData = {
		username,
		createdAt: new Date(),
	};
	
	sessions.set(sessionId, sessionData); // Сохранение сессии в памяти
	return sessionId;
};

// Функция получения данных сессии
const getSession = (sessionId) => {
	return sessions.get(sessionId);
};

// Функция закрытия сессии
const closeSession = (sessionId) => {
	return sessions.delete(sessionId);
};

// Основной скрипт работы с сессией
const main = async () => {
	const username = 'user@example.com'; // Логин пользователя
	const email = 'user@example.com'; // Почта пользователя
	const rawPassword = generatePassword(); // Генерация пароля
	const encodedPassword = encodePassword(rawPassword); // Кодирование пароля

	console.log('Сгенерированный пароль:', rawPassword);
	console.log('Закодированный пароль:', encodedPassword);

	try {
		// Сохранение пароля в базу данных
		await savePasswordToDB(username, encodedPassword);

		// Отправка пароля пользователю на почту
		await sendPasswordEmail(email, rawPassword);

		// Аутентификация пользователя
		const isAuthenticated = await authenticateUser(username, rawPassword);
		if (isAuthenticated) {
			// Создание сессии
			const sessionId = createSession(username);
			console.log(`Пользователь успешно аутентифицирован, сессия создана: ${sessionId}`);

			// Пример работы с сессией
			const sessionData = getSession(sessionId);
			console.log(`Данные сессии:`, sessionData);

			// Закрытие сессии
			const isSessionClosed = closeSession(sessionId);
			if (isSessionClosed) {
				console.log('Сессия закрыта.');
			} else {
				console.log('Ошибка при закрытии сессии.');
			}
		}
	} catch (error) {
		console.error('Ошибка:', error);
	}
};

main();
