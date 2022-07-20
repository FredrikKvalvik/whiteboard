export const isUndefinedOrNull = (value: any): boolean => {
  return value === undefined || value === null;
}

export const handleOptionsHelper: (arg0: CanvasRenderingContext2D, arg1: Options) => void = (
	ctx,
	options
) => {
	if (options.color) {
		ctx.strokeStyle = options.color;
	}
	if (options.lineCap) {
		ctx.lineCap = options.lineCap;
	}
	if (options.size) {
		ctx.lineWidth = options.size;
	}
};

export const getLatestImageData = (history: DrawHistory) => {
  if(history.length > 0) {
  return history[history.length - 1];
  }
  return null;
}