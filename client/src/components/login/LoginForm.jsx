import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import form from './Form.module.css';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
				const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

				if (response.status === 200) {
						// Успешная авторизация
						toast.success('Авторизация прошла успешно!');

						// Сохранение информации о пользователе в sessionStorage
						sessionStorage.setItem('user', JSON.stringify(response.data.user)); // или любой объект, возвращаемый сервером

						navigate('/management'); // Редирект на страницу управления после успешного входа
				}
		} catch (error) {
				// Обработка ошибок
				toast.error('Ошибка авторизации. Проверьте свои данные.');
				console.error('Ошибка авторизации:', error.response ? error.response.data : error.message);
		}
};

	return (
		<>
			<div className={form.blob}></div>
			<div className={form.wrapper}>
				<form onSubmit={handleSubmit}>
					<h2 className={form.title}>Авторизация</h2>
					<div className={form.inputBox}>
						<span className={form.icon}><ion-icon name="mail"></ion-icon></span>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Почта</label>
					</div>
					<div className={form.inputBox}>
						<span className={form.icon}><ion-icon name="lock"></ion-icon></span>
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label>Пароль</label>
					</div>
					<div className={form.remeberForgot}>
						<label>
							<input type="checkbox" /> Запомнить меня
						</label>
						<a href="#">Забыли пароль?</a>
					</div>
					<button type="submit" className={form.authButton}>Войти</button>
					<div className={form.registerLink}>
						<p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
					</div>
				</form>
			</div>
		</>
	);
};

export { LoginForm };
