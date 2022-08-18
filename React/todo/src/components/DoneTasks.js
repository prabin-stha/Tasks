import { useContext } from 'react';

import TasksContext from '../store/tasks-context';
import styles from './DoneTasks.module.css';
import Task from './Task';

const DoneTasks = () => {
	const tasksCtx = useContext(TasksContext);

	return (
		<div className='tasks-container'>
			<h1 className='h1 text-center'>
				DONE: {tasksCtx.doneTasks.length}
			</h1>
			<div className={styles['done-tasks']}>
				{tasksCtx.doneTasks.map(el => (
					<Task key={el.id} task={el} checked={true} />
				))}
			</div>
		</div>
	);
};

export default DoneTasks;
