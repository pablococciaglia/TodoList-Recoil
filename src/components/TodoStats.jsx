import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoStatsSelector } from '../atomsAndSelectors';

const TodoStats = () => {
	const { total, done, pending, completedPorcentage } =
		useRecoilValue(todoStatsSelector);
	return (
		<>
			<span>Tasks: {total} </span>
			<span>Done: {done} </span>
			<span>Pending: {pending} </span>
			<span>Progress: %{completedPorcentage * 100}</span>
		</>
	);
};

export default TodoStats;
