import { useContext, useState } from 'react';

import TasksContext from '../store/tasks-context';
import styles from './AddTask.module.css';

const AddTask = () => {
	const [task, setTask] = useState('');
	const tasksCtx = useContext(TasksContext);

	const onChangeHandler = e => {
		setTask(e.target.value);
	};

	const onClickHandler = () => {
		if (!task) return;
		tasksCtx.addTask(task);
		setTask('');
	};

	return (
		<div className={styles['add-new-container']}>
			<input
				className={styles['add-new-input']}
				placeholder='Enter new task'
				type='text'
				value={task}
				onChange={onChangeHandler}
			/>
			<button
				className={styles['add-new-button']}
				onClick={onClickHandler}
			>
				ADD TASK
			</button>
		</div>
	);
};

export default AddTask;
