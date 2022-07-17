import { writable } from 'svelte/store';

type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'black';
type Size = 2 | 4 | 6 | 10 | 14 | 20;
type lineCap = 'round' | 'square'

export interface State {
	color: Colors;
	size: Size;
  lineCap: lineCap;
}

const defaultState: State = {
	color: 'red',
	size: 2,
  lineCap: 'round'
};

export const state = (() => {
	const { subscribe, update } = writable(defaultState);

	return {
		subscribe,
		setColor: (color: Colors) => update((state) => ({ ...state, color })),
    setSize: (size: Size) => update((state) => ({ ...state, size })),
    setLineCap: (lineCap: lineCap) => update((state) => ({ ...state, lineCap })),
	};
})();
