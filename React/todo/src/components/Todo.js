import AddTask from './AddTask';
import DoneTasks from './DoneTasks';
import ViewTasks from './ViewTasks';

import styles from './Todo.module.css';

const Todo = () => {
	return (
		<div className={styles.container}>
			<ViewTasks />
			<DoneTasks />
			<AddTask />
		</div>
	);
};

export default Todo;
