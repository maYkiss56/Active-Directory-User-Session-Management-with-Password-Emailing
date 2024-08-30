import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const UserForm = ({ selectedUser, onUserSaved }) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		if (selectedUser) {
			setUsername(selectedUser.username);
			setEmail(selectedUser.email);
		} else {
			setUsername('');
			setEmail('');
		}
	}, [selectedUser]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			if (selectedUser) {
				// Запрос на обновление пользователя
				await axios.put(`/api/users/${selectedUser.id}`, { username, email });
			} else {
				// Запрос на создание нового пользователя
				await axios.post('/api/users', { username, email });
			}
			onUserSaved();
		} catch (error) {
			console.error('Ошибка в сохранении пользователя:', error);
		}
	};
	
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Username:</label>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>Email:</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<button type="submit">{selectedUser ? 'Update User' : 'Create User'}</button>
		</form>
	);
}

UserForm.propTypes = {
	selectedUser: PropTypes.func,
	onUserSaved: PropTypes.func,
};


export { UserForm };