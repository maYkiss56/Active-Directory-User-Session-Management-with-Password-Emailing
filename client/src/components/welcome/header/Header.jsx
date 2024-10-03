import { Link } from 'react-router-dom';
import header from './header.module.css';
import logo from '../../../assets/images/logoWhite.svg';
const Header = () => {
	return (
		<header className={header.header}>
				<div className={header.headerTitle}>
					<img className={header.headerLogo} src={logo} alt="logo" />
					<p className={header.headerName}>AD Connect</p>
				</div>
				<div className={header.headerButtons}>
					<Link to='/login' className={`${header.btn} ${header.login}`}>Войти</Link>
				</div>
		</header>
	);
}

export { Header };