import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage('');
		setError('');

		try {
			const response = await axios.post('/api/auth/register', { username, email });
			setMessage(response.data.message);
			setUsername('');
			setEmail('');
		} catch (error) {
			setError('Registration failed. Please try again.', error);
		}
	};

	return (
		<>
		<div className="blob"></div>
			<div className="wrapper">
				<form onSubmit={handleSubmit}>
					<h2>Регистрация</h2>
					<div className="input-box">
						<span className="icon"><ion-icon name="person"></ion-icon></span>
						<input type="text" required value={username} onChange={ (e) => setUsername(e.target.value)} />
						<label>ФИО</label>
					</div>
					<div className="input-box">
						<span className="icon"><ion-icon name="mail"></ion-icon></span>
						<input type="email" required value={email} onChange={ (e) => setEmail(e.target.value) } />
						<label>Почта</label>
					</div>
					<button type="submit">Зарегистироваться</button>
					<div className="register-link">
						<p>Если есть аккаунта?<Link to="/login">Авторизоваться</Link></p>
					</div>
					{message && <p style={{ color: 'green' }}>{message}</p>}
					{error && <p style={{ color: 'red' }}>{error}</p>}
				</form>
			</div>
		</>
	);
}

export { RegisterForm };
