import styles from './Items.module.css';

const Items = props => {
	return (
		<div className={styles['image-container']}>
			<img src={props.img} alt={`${props.id}`} />
		</div>
	);
};

export default Items;
