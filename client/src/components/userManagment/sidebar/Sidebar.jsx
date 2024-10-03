import { Link, useLocation } from 'react-router-dom';  // Импортируем useLocation
import sidebar from './sidebar.module.css';

const Sidebar = () => {
	const location = useLocation();  // Получаем текущий путь

	// Функция, которая определяет, активен ли элемент на основе текущего пути
	const isActive = (path) => location.pathname === path;

	return (
		<>
			<div className={sidebar.blob}></div>
			<article className={sidebar.sidebar}>
				<ul>
					<li className={sidebar.sidebarLogo}>
						<Link to="/register">
							<div className={sidebar.sidebarLinkIcon}><ion-icon name="cog"></ion-icon></div>
							<div className={sidebar.sidebarLinkText}>ADHub</div>
						</Link>
					</li>
					<div className={sidebar.sidebarMenu}>
						<li className={isActive('/management') ? sidebar.active : ''}>
							<Link to="/management">
								<div className={sidebar.sidebarLinkIcon}><ion-icon name="home"></ion-icon></div>
								<div className={sidebar.sidebarLinkText}>Домой</div>
							</Link>
						</li>
						<li className={isActive('/management/profile') ? sidebar.active : ''}>
							<Link to="/management/profile">
								<div className={sidebar.sidebarLinkIcon}><ion-icon name="person"></ion-icon></div>
								<div className={sidebar.sidebarLinkText}>Профиль</div>
							</Link>
						</li>
						<li className={isActive('/management/statistics') ? sidebar.active : ''}>
							<Link to="/management/statistics">
								<div className={sidebar.sidebarLinkIcon}><ion-icon name="stats"></ion-icon></div>
								<div className={sidebar.sidebarLinkText}>Статистика</div>
							</Link>
						</li>
						<li className={isActive('/management/folder') ? sidebar.active : ''}>
							<Link to="/management/folder">
								<div className={sidebar.sidebarLinkIcon}><ion-icon name="folder"></ion-icon></div>
								<div className={sidebar.sidebarLinkText}>Папки</div>
							</Link>
						</li>
						<li className={isActive('/management/settings') ? sidebar.active : ''}>
							<Link to="/management/settings">
								<div className={sidebar.sidebarLinkIcon}><ion-icon name="settings"></ion-icon></div>
								<div className={sidebar.sidebarLinkText}>Настройки</div>
							</Link>
						</li>
					</div>
					<div className={sidebar.sidebarBottom}>
						<li>
							<Link to="/">
								<div className={sidebar.sidebarLinkIcon}><ion-icon name="log-out"></ion-icon></div>
								<div className={sidebar.sidebarLinkText}>Выход</div>
							</Link>
						</li>
					</div>
				</ul>
			</article>
		</>
	);
}

export { Sidebar };


