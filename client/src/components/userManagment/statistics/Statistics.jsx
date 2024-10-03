import { useState } from 'react';
import statisticsStyles from './statistics.module.css'; // Assuming you'll create a CSS module for styling

const Statistics = () => {
		// данные наброски
		const [users, setUsers] = useState([
				{ id: 1, name: 'Алекс Смит', email: 'alex.smith@company.com', lastLogin: '3 часа назад', sessionDuration: '1 час 30 мин' },
				{ id: 2, name: 'Грейс Джонсон', email: 'grace.johnson@company.com', lastLogin: '3 часа назад', sessionDuration: '1 час 30 мин' },
				{ id: 3, name: 'Пол Браун', email: 'paul.brown@company.com', lastLogin: '3 часа назад', sessionDuration: '1 час 30 мин' },
				{ id: 4, name: 'Эмма Уильямс', email: 'emma.williams@company.com', lastLogin: '3 часа назад', sessionDuration: '1 час 30 мин' },
				{ id: 5, name: 'Оливер Дэвис', email: 'oliver.davis@company.com', lastLogin: '3 часа назад', sessionDuration: '1 час 30 мин' }
		]);

		const handleAddUser = () => {
				// логика добаввления пользователя
				console.log('Add user clicked');
		};

		const handleActionClick = (userId) => {
				// Logic for user-specific actions (e.g., edit, delete)
				console.log(`Action clicked for user ${userId}`);
		};

		return (
				<div className={statisticsStyles.statisticsContainer}>
						<div className={statisticsStyles.header}>
								<h2>Пользователи</h2>
								<button onClick={handleAddUser} className={statisticsStyles.addButton}>Добавить пользователя</button>
						</div>

						<div className={statisticsStyles.searchBar}>
								<input type="text" placeholder="Поиск" className={statisticsStyles.searchInput} />
						</div>

						<table className={statisticsStyles.table}>
								<thead>
										<tr>
												<th>Имя</th>
												<th>Эл. почта</th>
												<th>Последний вход</th>
												<th>Длительность сеанса</th>
												<th>Действия</th>
										</tr>
								</thead>
								<tbody>
										{users.map((user) => (
												<tr key={user.id}>
														<td>{user.name}</td>
														<td>{user.email}</td>
														<td>{user.lastLogin}</td>
														<td>{user.sessionDuration}</td>
														<td>
																<button onClick={() => handleActionClick(user.id)} className={statisticsStyles.actionButton}>
																		Редактировать
																</button>
														</td>
												</tr>
										))}
								</tbody>
						</table>
				</div>
		);
};

export { Statistics };
