<script lang="ts">
	import { onMount } from 'svelte';
	import { options } from '$lib/stores/whiteboardOptions.store';
	import { history } from '$lib/stores/whiteboardHistory.store';
	import { canvas as canvasStore, ctx } from '$lib/stores/canvas.store';
	import { draw } from '$lib/scripts/draw.service';

	let painting: boolean = false;

	// set new context for canvas after dom is loaded
	onMount(() => {
		$ctx = $canvasStore.getContext('2d') as CanvasRenderingContext2D;
		handleResize();
	});

	const handleStart = (e: MouseEvent) => {
		painting = true;
		draw($ctx, $options, e);
	};

	const handleDraw = (e: MouseEvent) => {
		if (!painting) {
			return;
		}
		draw($ctx, $options, e);
	};

	const handleEnd = (e: MouseEvent) => {
		if (!painting) {
			return;
		}
		painting = false;
		$ctx.beginPath();

		history.add($ctx);
	};

	const handleResize = () => {
		$canvasStore.width = window.innerWidth;
		$canvasStore.height = window.innerHeight;
	};
</script>

<canvas
	on:mousemove={handleDraw}
	on:mouseleave={handleEnd}
	on:mousedown={handleStart}
	on:mouseup={handleEnd}
	bind:this={$canvasStore}
/>

<svelte:window on:resize={handleResize} />
