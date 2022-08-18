import { createContext } from 'react';

const TasksContext = createContext({
	currentCount: 0,
	tasksList: [],
	doneTasks: [],
	addTask() {},
	markTaskAsDone() {},
	undoMarkTaskAsDone() {},
	removeTask() {},
});

export default TasksContext;
