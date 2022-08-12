import Navigation from './Navigation';

import logo from '../img/logo.png';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img
						className={styles.img}
						src={logo}
						alt='logo'
						height='30px'
					/>
				</div>
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
