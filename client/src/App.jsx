import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserManagement } from './pages/UserManagement';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/register' element={<RegisterPage />}/>
				<Route path='/login' element={<LoginPage />}/>
				<Route path='/management' element={<UserManagement />}/>
			</Routes>
		</Router>
	);
}

export { App };