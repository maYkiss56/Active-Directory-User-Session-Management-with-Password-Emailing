import { useState } from 'react';
import { UserList } from '../components/userManagment/UserList';
import { UserForm } from '../components/userManagment/UserForm';
import axios from 'axios';

const UserManagement = () => {
	const [selectedUser, setSelectedUser] = useState(null);

	const handleSelectUser = (user) => {
		setSelectedUser(user);
	};

	const handleDeleteUser = async (userId) => {
		try {
			await axios.delete(`/api/users/${userId}`);
			setSelectedUser(null);
		} catch (error) {
			console.error('Error deleting user:', error);
		}
	};

	const handleUserSaved = () => {
		setSelectedUser(null);
		//обновить список пользователей после успешного сохранения
	};

	return (
		<div>
			<h1>Управление пользователями</h1>
			<UserList onSelectUser={handleSelectUser} onDeleteUser={handleDeleteUser} />
			<UserForm selectedUser={selectedUser} onUserSaved={handleUserSaved} />
		</div>
	);
};


export { UserManagement };