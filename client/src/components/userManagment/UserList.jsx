import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const UserList = ({ onSelectUser, onDeleteUser }) => {
	const [users, setUsers] = useState([]);

	useEffect( () => {
		//запрос на сервер для получения списка пользователей
		const fetchUsers = async () => {
			try {
				const response = await axios.get('/api/users');
				// Проверка на случай, если сервер вернет что-то, кроме массива
				if (Array.isArray(response.data)) {
					setUsers(response.data);
				} else {
					console.error('Unexpected response format:', response.data);
					setUsers([]);
				}
			} catch (error) {
				console.error('Ошибка получения пользователей:', error);
				setUsers([]);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div>
			<h2>Список пользователей</h2>
			<ul>
				{users.map( (user) => (
					<li key={user.id}>
						{user.username} ({user.email})
						<button onClick={() => onSelectUser(user)}>Изменить</button>
						<button onClick={() => onDeleteUser(user.id)}>Удалить</button>
					</li>
				))}
			</ul>
		</div>
	);
}

UserList.propTypes = {
	onSelectUser: PropTypes.func,
	onDeleteUser: PropTypes.func,
}

export { UserList };