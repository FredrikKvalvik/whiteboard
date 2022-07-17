<script lang="ts">
	import { onMount } from 'svelte';
	import { state } from '$lib/stores/whiteboardState';
	import { draw } from '$lib/scripts/draw.service';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let painting: boolean = false;

	onMount(() => {
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    handleResize()
	});

	const handleStartPosition = (e: MouseEvent) => {
		painting = true;
		draw(ctx, $state, e);
		console.log('startPosition');
	};
	const handleDraw = (e: MouseEvent) => {
		if (!painting) {
			return;
		}
		draw(ctx, $state, e);
	};
	const handleEndPosition = (e: MouseEvent) => {
		painting = false;
		ctx.beginPath();
	};
  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

</script>

<canvas
	on:mousedown={handleStartPosition}
	on:mouseup={handleEndPosition}
	on:mousemove={handleDraw}
	bind:this={canvas}
	class=""
/>

<svelte:window on:resize={handleResize} />
