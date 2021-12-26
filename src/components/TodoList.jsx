import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoFilterSelector } from '../atomsAndSelectors';
import TodoItem from './TodoItem';

const TodoList = (props) => {
	//const todos = useRecoilValue(todoListState);
	const todos = useRecoilValue(todoFilterSelector);
	return (
		<div>
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	);
};

export default TodoList;
