import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/appi/users', userRoutes);

app.listen(5000, () => {
	console.log('Сервер запущен на порту 5000...')
})