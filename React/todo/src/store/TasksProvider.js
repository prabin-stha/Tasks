import { useEffect, useReducer } from 'react';
import TasksContext from './tasks-context';

const defaultTasksState = {
	tasksList: [
		{ id: 0, task: 'Fix an ability to display all tasks' },
		{
			id: 1,
			task: 'Fix a layout, checkboxes should be listed in a column',
		},
		{
			id: 2,
			task: 'Fix an ability to add a new task',
		},
		{
			id: 3,
			task: 'Fix an ability to toggle a task',
		},
		{
			id: 4,
			task: 'Fix an ability to delete a task',
		},
		{
			id: 5,
			task: 'Fix an ability to delete a task',
		},
		{
			id: 6,
			task: 'Fix an ability to count completed tasks',
		},
	],
	currentCount: 0,
	doneTasks: [],
	addTask() {},
	markTaskAsDone() {},
	undoMarkTaskAsDone() {},
	removeTask() {},
};

const tasksReducer = (state, action) => {
	if (action.type === 'ADD') {
		const newTasksList = state.tasksList
			.slice()
			.concat({ id: state.currentCount, task: action.task });
		console.log(state.currentCount);
		return {
			...state,
			tasksList: newTasksList,
			currentCount: state.currentCount + 1,
		};
	}
	if (action.type === 'MARK') {
		const newTasksList = state.tasksList.filter(el => el.id !== action.id);
		const newDoneTasks = state.doneTasks.concat(
			state.tasksList.filter(el => el.id === action.id)
		);
		return {
			...state,
			tasksList: newTasksList,
			doneTasks: newDoneTasks,
		};
	}
	if (action.type === 'UNDO') {
		console.log('TODO', state.tasksList);
		console.log('DONE', state.doneTasks);
		const newTasksList = state.tasksList.concat(
			state.doneTasks.filter(el => el.id === action.id)[0]
		);
		const newDoneTasks = state.doneTasks.filter(el => el.id !== action.id);
		console.log('TODO', newTasksList);
		console.log('DONE', newDoneTasks);
		return {
			...state,
			tasksList: newTasksList,
			doneTasks: newDoneTasks,
		};
	}
	if (action.type === 'REMOVE') {
		const newTasksList = state.tasksList.filter(el => el.id !== action.id);
		const newDoneTasks = state.doneTasks.filter(el => el.id !== action.id);
		return { ...state, tasksList: newTasksList, doneTasks: newDoneTasks };
	}
	return defaultTasksState;
};

const TasksProvider = props => {
	const [tasksState, dispatchTasksAction] = useReducer(
		tasksReducer,
		defaultTasksState
	);

	useEffect(() => {
		tasksState.currentCount = tasksState.tasksList
			? tasksState.tasksList.length
			: 0;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const addTaskHandler = task => {
		dispatchTasksAction({ type: 'ADD', task });
	};

	const markTaskAsDoneHandler = id => {
		dispatchTasksAction({ type: 'MARK', id });
	};

	const undoMarkTaskAsDoneHandler = id => {
		dispatchTasksAction({ type: 'UNDO', id });
	};

	const removeTaskHandler = id => {
		dispatchTasksAction({ type: 'REMOVE', id });
	};

	const tasksContext = {
		currentCount: tasksState.currentCount,
		tasksList: tasksState.tasksList,
		doneTasks: tasksState.doneTasks,
		addTask: addTaskHandler,
		markTaskAsDone: markTaskAsDoneHandler,
		undoMarkTaskAsDone: undoMarkTaskAsDoneHandler,
		removeTask: removeTaskHandler,
	};

	return (
		<TasksContext.Provider value={tasksContext}>
			{props.children}
		</TasksContext.Provider>
	);
};

export default TasksProvider;
