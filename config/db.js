import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	server: process.env.DB_SERVER,
	database: process.env.DB_DATABASE,
	options: {
		encrypt: process.env.DB_ENCRYPT === 'true',
	},
};

export const connectToDB = async () => {
	try {
		const pool = await sql.connect(config);
		console.log('Подключение к базе данных успешно установлено.');
		return pool;
	} catch (err) {
		console.error('Ошибка подключения к базе данных:', err);
		throw err;
	}
};
