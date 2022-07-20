import { handleOptionsHelper, isUndefinedOrNull } from '$lib/scripts/helpers';

const cursorCircle: DrawFn = (ctx, x, y) => {
	// cursor width is set to be 1px wider than the line width
	const width = ctx.lineWidth / 2 + 1;

	ctx.lineWidth = 1;

	// this clears only parts of the screen to be more efficient
	ctx.clearRect(x - 250, y - 250, width + 500, width + 500);
	ctx.rect(x, y, width, width);
	ctx.beginPath();
	ctx.arc(x, y, width, 0, 2 * Math.PI);
	ctx.stroke();
};

const cursorSquare: DrawFn = (ctx, x, y) => {
	const width = ctx.lineWidth + 2;
	ctx.lineWidth = 1;

	ctx.clearRect(x - 250, y - 250, 500, 500);
	ctx.beginPath();
	ctx.rect(x - width / 2, y - width / 2, width, width);
	ctx.stroke();
};

export const drawCursor = (ctx: CanvasRenderingContext2D, options: Options, event: MouseEvent) => {
	const { clientX: x, clientY: y } = event;
	handleOptionsHelper(ctx, options);

	// overwrite stroke style from helper function to make sure that the cursor is always black
	ctx.strokeStyle = 'black';

  // 
	switch (options.lineCap) {
		case 'round':
			cursorCircle(ctx, x, y);
			break;
		case 'square':
			cursorSquare(ctx, x, y);
			break;
	}
};
