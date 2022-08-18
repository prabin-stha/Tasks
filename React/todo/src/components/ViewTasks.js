import { useContext } from 'react';

import TasksContext from '../store/tasks-context';
import Task from './Task';
import styles from './ViewTasks.module.css';

const ViewTasks = () => {
	const tasksCtx = useContext(TasksContext);

	return (
		<div className='tasks-container'>
			<h1 className='h1 text-center'>
				THINGS TO DO: {tasksCtx.tasksList.length}
			</h1>
			<div className={styles['view-tasks']}>
				{tasksCtx.tasksList.map(el => (
					<Task key={el.id} task={el} checked={false} />
				))}
			</div>
		</div>
	);
};

export default ViewTasks;
