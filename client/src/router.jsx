import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';

// Ленивый импорт страниц
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));
const UserManagement = React.lazy(() => import('./pages/UserManagement'));
const WelcomePage = React.lazy(() => import('./pages/WelcomePage'));

export const createAppRouter = () => {
	return createBrowserRouter([
		{
			path: "/",
				element: <Suspense fallback={<div>Loading...</div>}><WelcomePage /></Suspense>,
		},
		{
			path: "/register",
			element: <Suspense fallback={<div>Loading...</div>}><RegisterPage /></Suspense>,
		},
		{
			path: "/login",
			element: <Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>,
		},
		{
			path: "/management/*",
			element: (
				<PrivateRoute>
					<Suspense fallback={<div>Loading...</div>}><UserManagement /></Suspense>
				</PrivateRoute>
			),
		}
	]);
};

