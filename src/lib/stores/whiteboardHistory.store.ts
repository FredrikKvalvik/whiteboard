import { writable } from 'svelte/store';
import { ctx as context } from "$lib/stores/canvas.store"

export const history = (() => {
	const { subscribe, update } = writable([] as DrawHistory);

	return {
		subscribe,
		add: (ctx: CanvasRenderingContext2D) =>
			update((history: DrawHistory) => {
				const newEntry = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

				return [...history, newEntry];
			}),
		undo: (ctx: CanvasRenderingContext2D) =>
			update((history: DrawHistory) => {
        // remove the last entry
				history.pop();
        // restore to the last entry if possible, otherwise clear the canvas
				if (history.length > 0) {
					const newCurrent = history[history.length - 1] as ImageData
					ctx.putImageData(newCurrent, 0, 0);
				} else {
					ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				}

				context.set(ctx)
				return history;
			})
	};
})();
