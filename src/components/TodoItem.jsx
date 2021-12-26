import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atomsAndSelectors';

const TodoItem = ({ id, text, checked }) => {
	const [todoList, setTodoList] = useRecoilState(todoListState);

	const changeItem = (id, todoList, changedItem) => {
		return todoList.map((todo) => {
			if (todo.id !== id) {
				return todo;
			}
			return changedItem;
		});
		/* 	
        const index = todoList.findIndex((item) => item.id === id);
        return [
            ...todoList.slice(0, index),
            changedItem,
            ...todoList.slice(index + 1, todoList.length),
        ];
        */
	};

	const onChangeTodoItem = (event) => {
		const textValue = event.target.value;
		const changedItem = {
			id,
			text: textValue,
			checked,
		};

		setTodoList(changeItem(id, todoList, changedItem));
	};

	const onToggleCompleted = () => {
		const changedItem = {
			id,
			text,
			checked: !checked,
		};

		setTodoList(changeItem(id, todoList, changedItem));
	};

	const onClickDelete = () => {
		const deleteItem = (id, todoList) => {
			const index = todoList.findIndex((item) => item.id === id);
			return [
				...todoList.slice(0, index),
				...todoList.slice(index + 1, todoList.length),
			];
		};
		setTodoList(deleteItem(id, todoList));
	};

	return (
		<div>
			<input value={text} onChange={onChangeTodoItem} />
			<input type='checkbox' checked={checked} onChange={onToggleCompleted} />
			<button onClick={onClickDelete}>x</button>
		</div>
	);
};

TodoItem.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
};

export default TodoItem;
