import { Sidebar } from '../components/userManagment/sidebar/Sidebar';
import { Home } from '../components/userManagment/home/Home';
import { Profile } from '../components/userManagment/profile/Profile';
import { Statistics } from '../components/userManagment/statistics/Statistics';
import { Folder } from '../components/userManagment/folder/Folder';
import { Settings } from '../components/userManagment/settings/Settings';
import { Routes, Route } from 'react-router-dom';

const UserManagement = () => {
	return (
		<div style={{ display: 'flex' }}>
			{/* Sidebar всегда виден */}
			<Sidebar />

			{/* Контент меняется в зависимости от маршрута */}
			<div style={{ flex: 1, padding: '20px' }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="profile" element={<Profile />} />
					<Route path="statistics" element={<Statistics />} />
					<Route path="folder" element={<Folder />} />
					<Route path="settings" element={<Settings />} />
				</Routes>
			</div>
		</div>
	);
}

export default UserManagement;



