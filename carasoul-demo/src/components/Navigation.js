import SearchIcon from '@mui/icons-material/Search';

import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>Movies</li>
				<li>TV Show</li>
				<li>People</li>
				<li>More</li>
			</ul>
			<ul>
				<li>Log In</li>
				<li>Join Us</li>
				<li>
					<div className={styles['search-icon']}>
						<SearchIcon />
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
