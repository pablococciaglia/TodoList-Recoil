import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atomsAndSelectors';

let id = 0;
const ItemCreator = (props) => {
	const [text, setText] = useState('');
	const setNewTodo = useSetRecoilState(todoListState);

	const addItem = () => {
		if (text !== '') {
			setNewTodo((oldTodoList) => [
				...oldTodoList,
				{ id: id++, text, checked: false },
			]);
			setText('');
		}
	};

	const onChangeText = (event) => {
		setText(event.target.value);
	};
	return (
		<div>
			<input value={text} onChange={onChangeText} />
			<button onClick={addItem}>Add Item</button>
		</div>
	);
};

export default ItemCreator;
