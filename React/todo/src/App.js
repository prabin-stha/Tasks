import Todo from './components/Todo';
import TasksProvider from './store/TasksProvider';

function App() {
	return (
		<TasksProvider>
			<Todo />
		</TasksProvider>
	);
}

export default App;
