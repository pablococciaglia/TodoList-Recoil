import { atom, selector } from 'recoil';
import axios from 'axios';

export const todoListState = atom({
	key: 'todoListState',
	default: [],
});

export const todoFilterState = atom({
	key: 'todoFilterState',
	default: 'all',
});

export const todoFilterSelector = selector({
	key: 'todoFilterSelector',
	get: ({ get }) => {
		const list = get(todoListState);
		const filter = get(todoFilterState);

		switch (filter) {
			case 'all':
				return list;

			case 'done':
				return list.filter((items) => items.checked);

			case 'pending':
				return list.filter((items) => !items.checked);

			default:
				return list;
		}
	},
});

export const todoStatsSelector = selector({
	key: 'todoStatsSelector',
	get: ({ get }) => {
		const list = get(todoListState);
		const total = list.length;
		const done = list.filter((items) => items.checked).length;
		const pending = list.filter((items) => !items.checked).length;

		const data = {
			total,
			done,
			pending,
			completedPorcentage: total === 0 ? 0 : done / total,
		};
		return data;
	},
});

export const userDataSelector = selector({
	key: 'userDataSelector',
	get: async () => {
		const userData = await axios.get('http://localhost:3001/user/1');
		return userData.data;
	},
});
