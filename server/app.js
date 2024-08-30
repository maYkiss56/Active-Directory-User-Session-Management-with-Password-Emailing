import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true,
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, () => {
	console.log('Сервер запущен на порту 5000...')
})