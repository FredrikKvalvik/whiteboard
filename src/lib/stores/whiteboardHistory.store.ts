import { writable } from 'svelte/store';

type History = ImageData[];

export const history = (() => {
	const { subscribe, set, update } = writable([] as History);

	return {
		subscribe,
		add: (ctx: CanvasRenderingContext2D) =>
			update((history: History) => {
				const newEntry = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

				return [...history, newEntry];
			}),
		undo: (ctx: CanvasRenderingContext2D) =>
			update((history: History) => {
        // remove the last entry
				history.pop();

        // restore to the last entry if possible, otherwise clear the canvas
				if (history.length > 0) {
					const newCurrent = history[history.length - 1];
					ctx.putImageData(newCurrent, 0, 0);
				} else {
					ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				}

				return history;
			})
	};
})();
