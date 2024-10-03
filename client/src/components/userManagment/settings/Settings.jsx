import settingsStyles from './settings.module.css'; // Assuming you'll create a CSS module for styling

const Settings = () => {

		const handleLogoChange = () => {
				// Logic for updating logo
				console.log('Logo change clicked');
		};

		const handleEmailChange = () => {
				// Logic for updating email
				console.log('Email change clicked');
		};

		const handlePasswordChange = () => {
				// Logic for updating password
				console.log('Password change clicked');
		};

		const handleLogout = () => {
				// Logic for logging out
				console.log('Logout clicked');
		};

		const sessionHistory = [
				{ id: 1, date: '2024-10-01', duration: '1 час 30 мин', location: 'Москва' },
				{ id: 2, date: '2024-09-30', duration: '1 час 15 мин', location: 'Москва' },
				{ id: 3, date: '2024-09-29', duration: '1 час', location: 'Москва' },
				// More session history...
		];

		return (
				<div className={settingsStyles.settingsContainer}>
						<h2>Настройки профиля</h2>

						{/* Section for updating logo */}
						<div className={settingsStyles.section}>
								<h3>Изменение логотипа</h3>
								<button onClick={handleLogoChange} className={settingsStyles.button}>Загрузить новый логотип</button>
						</div>

						{/* Section for changing email */}
						<div className={settingsStyles.section}>
								<h3>Изменение эл. почты</h3>
								<button onClick={handleEmailChange} className={settingsStyles.button}>Изменить эл. почту</button>
						</div>

						{/* Section for changing password */}
						<div className={settingsStyles.section}>
								<h3>Изменение пароля</h3>
								<button onClick={handlePasswordChange} className={settingsStyles.button}>Изменить пароль</button>
						</div>

						{/* Section for logging out */}
						<div className={settingsStyles.section}>
								<h3>Выход из аккаунта</h3>
								<button onClick={handleLogout} className={settingsStyles.logoutButton}>Выйти из аккаунта</button>
						</div>

						{/* Section for session history */}
						<div className={settingsStyles.section}>
								<h3>История сеансов</h3>
								<table className={settingsStyles.table}>
										<thead>
												<tr>
														<th>Дата</th>
														<th>Длительность</th>
														<th>Местоположение</th>
												</tr>
										</thead>
										<tbody>
												{sessionHistory.map(session => (
														<tr key={session.id}>
																<td>{session.date}</td>
																<td>{session.duration}</td>
																<td>{session.location}</td>
														</tr>
												))}
										</tbody>
								</table>
						</div>
				</div>
		);
};

export { Settings };
