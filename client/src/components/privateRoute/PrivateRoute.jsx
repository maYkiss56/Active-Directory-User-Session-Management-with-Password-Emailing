import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const isAuthenticated = Boolean(sessionStorage.getItem('user')); // Проверка авторизации
	return isAuthenticated ? children : <Navigate to="/login" />;
};

export { PrivateRoute };