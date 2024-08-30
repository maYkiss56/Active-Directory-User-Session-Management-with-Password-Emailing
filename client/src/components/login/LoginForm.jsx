import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './loginForm.css';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/auth/login', {email, password});
			setMessage(response.data.message);
		} catch (error) {
			setMessage('Авторизация прошла с ошибкой. Проверьте свои данные.', error)
		}
	};

	return (
		<>
		<div className="blob"></div>
			<div className="wrapper">
				<form onSubmit={handleSubmit}>
					<h2>Авторизация</h2>
					<div className="input-box">
						<span className="icon"><ion-icon name="mail"></ion-icon></span>
						<input type="email" required value={email} onChange={ (e) => setEmail(e.target.value)} />
						<label>Почта</label>
					</div>
					<div className="input-box">
						<span className="icon"><ion-icon name="lock"></ion-icon></span>
						<input type="password" required value={password} onChange={ (e) => setPassword(e.target.value) } />
						<label>Пароль</label>
					</div>
					<div className="remeber-forgot">
						<label>
							<input type="checkbox" />Запомнить меня
						</label>
						<a href="#">Забыли пароль?</a>
					</div>
					<button type="submit">Login</button>
					<div className="register-link">
						<p>Если нет аккаунта?<Link to="/register">Зарегистироваться</Link></p>
					</div>
					{message && <p>{message}</p>}
				</form>
			</div>
		</>
	);
};

export { LoginForm };