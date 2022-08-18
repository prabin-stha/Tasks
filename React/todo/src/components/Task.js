import { useContext } from 'react';

import TasksContext from '../store/tasks-context';
import styles from './Task.module.css';

const Task = props => {
	const tasksCtx = useContext(TasksContext);
	const taskId = props.task.id;

	const onChangeHandler = e => {
		if (e.target.checked) {
			tasksCtx.markTaskAsDone(taskId);
		} else if (!e.target.checked) {
			tasksCtx.undoMarkTaskAsDone(taskId);
		}
	};

	const onClickHandler = e => {
		tasksCtx.removeTask(taskId);
	};

	return (
		<div className={styles.task}>
			<div className={styles['input-task']}>
				<input
					type='checkbox'
					id={'check-' + taskId}
					checked={props.checked}
					data-prabin='value'
					onChange={onChangeHandler}
				/>
				<label htmlFor={'check-' + taskId}>{props.task.task}</label>
			</div>
			<button
				className={styles['remove-button']}
				onClick={onClickHandler}
			>
				x
			</button>
		</div>
	);
};

export default Task;
