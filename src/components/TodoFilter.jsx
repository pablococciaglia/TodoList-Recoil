import React from 'react';
import { useRecoilState } from 'recoil';
import { todoFilterState } from '../atomsAndSelectors';

const TodoFilter = () => {
	const [filterState, setFilterState] = useRecoilState(todoFilterState);

	const onSelectFilter = (event) => {
		setFilterState(event.target.value);
	};
	return (
		<div>
			<span>Filtro: </span>
			<select onChange={onSelectFilter} value={filterState}>
				<option value='all'>All</option>
				<option value='done'>Done</option>
				<option value='pending'>Pending</option>
			</select>
		</div>
	);
};

export default TodoFilter;
