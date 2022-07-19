const handleOptionsHelper: (arg0: CanvasRenderingContext2D, arg1: Options) => void = (
	ctx,
	options
) => {
	if (options.color) {
		ctx.fillStyle = options.color;
	}
	if (options.lineCap) {
		ctx.lineCap = options.lineCap;
	}
	if (options.size) {
		ctx.lineWidth = options.size;
	}
};

const drawModePen: DrawFn = (ctx, x, y) => {
	ctx.lineTo(x, y);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x, y);
};

const drawModeLine: DrawFn = (ctx, x, y, params) => {
	if (params === null || params === undefined) {
		throw new Error('Params must be defined');
	}
	const {
		event: { clientX: startX },
		event: { clientY: startY }
	} = params;

	if (params.currentImage === null) {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	} else {
		ctx.putImageData(params.currentImage, 0, 0);
	}
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(x, y);
	ctx.stroke();
};

export const draw: DrawEvent = (ctx, options, params, event) => {
	const { clientX: x, clientY: y } = event;

	handleOptionsHelper(ctx, options);

	switch (options.drawMode) {
		case 'pen':
			drawModePen(ctx, x, y);
			break;
		case 'line':
			drawModeLine(ctx, x, y, params);
			break;
	}
};
