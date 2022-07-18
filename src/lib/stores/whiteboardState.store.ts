import { writable } from 'svelte/store';

const defaultState: Options = {
	color: 'black',
	size: 4,
  lineCap: 'round'
};

export const options = (() => {
	const { subscribe, update } = writable(defaultState);

	return {
		subscribe,
		setColor: (color: Colors) => update((state) => ({ ...state, color })),

    setSize: (sizeInput: SizeInput) => {
			const size = parseInt(sizeInput) as Size;
			update((state) => ({ ...state, size}))
		},

    setLineCap: (lineCap: LineCap) => update((state) => ({ ...state, lineCap })),
	};
})();
