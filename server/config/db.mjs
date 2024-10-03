import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	server: process.env.DB_SERVER,
	database: process.env.DB_DATABASE,
	options: {
		encrypt: true, // Если вы используете Azure или другой сервис, поддерживающий шифрование
		trustServerCertificate: true, // Зависит от вашего окружения (локальное, продакшн)
	},
};

// Функция для подключения к базе данных
export const connectdDB = async () => {
	try {
		const pool = await sql.connect(config); // Соединение с базой данных
		console.log('Успешное подключение к базе данных!');
		return pool; // Возвращаем пул соединений для выполнения запросов
	} catch (err) {
		console.error('Ошибка подключения к базе данных:', err);
		throw err; // Пробрасываем ошибку, чтобы её можно было обработать
	}
};

// Экспортируем объект sql для выполнения запросов в других модулях
export { sql };



