import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.mjs';

const app = express();

// Настройка CORS
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true,
}));

// Обработка JSON
app.use(express.json());

// Подключение маршрутов
app.use('/api/auth', authRoutes);

// Запуск сервера
app.listen(5000, () => {
	console.log('Сервер запущен на порту 5000...');
});



