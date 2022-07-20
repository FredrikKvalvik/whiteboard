<script lang="ts">
	import { onMount } from 'svelte';

	import { options } from '$lib/stores/whiteboardOptions.store';
	import { history } from '$lib/stores/whiteboardHistory.store';
	import { params } from '$lib/stores/whiteboardParams.store';
	import { canvas as canvasStore, ctx } from '$lib/stores/canvas.store';

	import CursorCanvas from '$lib/components/CursorCanvas.svelte';

	import { getLatestImageData } from '$lib/scripts/helpers';
	import { draw } from '$lib/scripts/draw.service';

	let painting = false;

	// set new context for canvas after dom is loaded
	onMount(() => {
		$ctx = $canvasStore.getContext('2d') as CanvasRenderingContext2D;
		handleResize();
	});

	const handleStart = (e: MouseEvent) => {
		const latestImageData = getLatestImageData($history);

		params.setStartParams(latestImageData, e);
		painting = true;
		draw($ctx, $options, $params as Params, e);
	};

	const handleDraw = (e: MouseEvent) => {
		if (!painting) {
			return;
		}
		draw($ctx, $options, $params as Params, e);
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

<div
	class="absolute top-0 left-0 z-0"
	on:mousemove={handleDraw}
	on:mouseleave={handleEnd}
	on:mousedown={handleStart}
	on:mouseup={handleEnd}
>
	<canvas class="z-0" bind:this={$canvasStore} />
	<CursorCanvas />
</div>

<svelte:window on:resize={handleResize} />
