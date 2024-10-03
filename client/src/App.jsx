import { RouterProvider } from 'react-router-dom';
import { createAppRouter } from './router'; // Импортируем функцию создания маршрутизатора

const App = () => {
	const router = createAppRouter(); // Создаём маршрутизатор

	return (
		<RouterProvider router={router} /> // RouterProvider для новой версии
	);
}

export { App };