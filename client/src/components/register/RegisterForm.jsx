import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import form from '../login/form.module.css';

const RegisterForm = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault(); // Остановить стандартное поведение формы
		try {
			const response = await axios.post('http://localhost:5000/api/auth/register', {
				fullName,
				email
			});

			if (response.status === 200) {
				toast.success('Пароль выслан на почту');
				navigate('/login');
			}
		} catch (error) {
			toast.error(error.response?.data?.message || 'Ошибка регистрации');
		}
	};

	return (
		<>
			<div className={form.blob}></div>
			<div className={form.wrapper}>
				<form onSubmit={handleRegister}>
					<h2 className={form.title}>Регистрация</h2>
					<div className={form.inputBox}>
						<span className={form.icon}><ion-icon name="person"></ion-icon></span>
						<input
							type="text"
							required
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
						<label>ФИО</label>
					</div>
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
					<button type="submit" className={form.authButton}>Зарегистрироваться</button>
					<div className={form.registerLink}>
						<p>Есть аккаунт? <Link to="/login">Авторизоваться</Link></p>
					</div>
				</form>
			</div>
		</>
	);
};

export { RegisterForm };
