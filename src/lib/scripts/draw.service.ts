export const draw: DrawEvent = (ctx, options, event) => {
	ctx.lineWidth = options.size;
	ctx.lineCap = options.lineCap;
	ctx.strokeStyle = options.color;

	ctx.lineTo(event.clientX, event.clientY);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(event.clientX, event.clientY);
};
