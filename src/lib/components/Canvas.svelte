<script lang="ts">
	import { onMount } from 'svelte';
	import { options } from '$lib/stores/whiteboardState.store';
	import { history } from '$lib/stores/whiteboardHistory.store';
	import { canvas, ctx } from '$lib/stores/canvas.store';
	import { draw } from '$lib/scripts/draw.service';

	let painting: boolean = false;

	// set new context for canvas after dom is loaded
	onMount(() => {
		$ctx = $canvas.getContext('2d') as CanvasRenderingContext2D;
		handleResize();
	});

	const handleStartPosition = (e: MouseEvent) => {
		painting = true;
		draw($ctx, $options, e);
	};

	const handleDraw = (e: MouseEvent) => {
		if (!painting) {
			return;
		}
		draw($ctx, $options, e);
	};

	const handleEndPosition = (e: MouseEvent) => {
		painting = false;
		$ctx.beginPath();

		history.add($ctx);
	};

	const handleResize = () => {
		$canvas.width = window.innerWidth;
		$canvas.height = window.innerHeight;
	};

	const undo = () => {
		history.undo($ctx);
	};
</script>

<canvas
	on:mousedown={handleStartPosition}
	on:mouseup={handleEndPosition}
	on:mousemove={handleDraw}
	bind:this={$canvas}
	class="" />

<svelte:window on:resize={handleResize} />
