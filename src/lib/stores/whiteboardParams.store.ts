import { writable } from 'svelte/store';

export const params = (() => {
	const { subscribe, update, set } = writable(null as Params | null);

	return {
		subscribe,
		reset: () => set(null),
		setStartParams: (currentImage: ImageData | null, event: MouseEvent) => {
			const startParams: Params = {
				startPoint: { x: event.clientX, y: event.clientY },
				currentImage,
				event
			}
			set(startParams);
		},
	};
})();
