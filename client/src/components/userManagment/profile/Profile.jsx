import { useState } from 'react';
import profileStyles from './profile.module.css';
import avatar from '../../../assets/images/Avatar.svg';
const Profile = () => {
		const [email, setEmail] = useState('user@example.com'); // default email
		const [username, setUsername] = useState('username123'); // default username
		const [password, setPassword] = useState('********'); // masked password
		const [sessions, setSessions] = useState([
				{ id: 1, device: 'Chrome on Windows', time: '2024-09-23 10:00' },
				{ id: 2, device: 'Firefox on macOS', time: '2024-09-22 08:45' }
		]); // session history example

		const handleLogout = () => {
				// Logic for logging out
				console.log('Logged out');
		};

		const handleUpdateProfile = () => {
				// Logic for updating email, username, or password
				console.log('Profile updated');
		};

		return (
				<div className={profileStyles.profileContainer}>
						<div className={profileStyles.profileHeader}>
								<div className={profileStyles.logo}>
										{/* Logo section: this can be updated */}
										<img src={avatar} alt="Profile Logo" />
								</div>
								<div>
										<button className={profileStyles.logout} onClick={handleLogout}>Выйти</button>
								</div>
						</div>

						<div className={profileStyles.profileContent}>
								<h2>Profile</h2>
								<div className={profileStyles.profileForm}>
											<div className={profileStyles.formGroup}>
													<label htmlFor="email">Email</label>
													<input 
															type="email" 
															id="email" 
															value={email} 
															onChange={(e) => setEmail(e.target.value)} 
													/>
											</div>

											<div className={profileStyles.formGroup}>
													<label htmlFor="username">Username</label>
													<input 
															type="text" 
															id="username" 
															value={username} 
															onChange={(e) => setUsername(e.target.value)} 
													/>
											</div>

											<div className={profileStyles.formGroup}>
													<label htmlFor="password">Password</label>
													<input 
															type="password" 
															id="password" 
															value={password} 
															onChange={(e) => setPassword(e.target.value)} 
													/>
											</div>

											<button onClick={handleUpdateProfile} className={profileStyles.updateBtn}>
													Обновить данные
											</button>
								</div>

								<div className={profileStyles.sessionHistory}>
										<h2>Активные сессии</h2>
										<ul>
												{sessions.map((session) => (
														<li key={session.id}>
																<span>{session.device}</span>
																<span>{session.time}</span>
														</li>
												))}
										</ul>
								</div>
						</div>
				</div>
		);
};

export { Profile };
