import ItemCreator from './components/ItemCreator';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { RecoilRoot } from 'recoil';
import TodoStats from './components/TodoStats';
import UserData from './components/UserData';
import { Suspense } from 'react';

function App() {
	return (
		<RecoilRoot>
			<Suspense fallback={<h1>loading...</h1>}>
				<UserData />
			</Suspense>
			<TodoFilter />
			<ItemCreator />
			<TodoList />
			<TodoStats />
		</RecoilRoot>
	);
}

export default App;
