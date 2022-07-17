import type { State } from '$lib/stores/whiteboardState';

export const draw = (ctx: CanvasRenderingContext2D, state: State, event: MouseEvent) => {

  ctx.lineWidth = state.size;
  ctx.lineCap = state.lineCap;
  ctx.strokeStyle = state.color;

  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
}