import { writable } from 'svelte/store';

type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'black';
type SizeInput = "2" | "4" | "6" | "10" | "14" | "20";
type Size = 2 | 4 | 6 | 10 | 14 | 20;
type lineCap = 'round' | 'square'

export interface State {
	color: Colors;
	size: Size;
  lineCap: lineCap;
}

const defaultState: State = {
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
    setLineCap: (lineCap: lineCap) => update((state) => ({ ...state, lineCap })),
	};
})();
