<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { options } from '$lib/stores/whiteboardOptions.store';

  import { drawCursor } from '$lib/scripts/cursor.service';

	let cursorCanvas: HTMLCanvasElement;
	let cursorCtx: CanvasRenderingContext2D;

	onMount(() => {
		if (browser) {
			cursorCtx = cursorCanvas.getContext('2d') as CanvasRenderingContext2D;

			handleResize();
		}
	});

	const handleResize = () => {
		cursorCanvas.width = window.innerWidth;
		cursorCanvas.height = window.innerHeight;
	};

  const handleCursor = (e: MouseEvent) => {
    drawCursor(cursorCtx, $options, e);
  }

  const handleLeave = () => {
    cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
  }
</script>

<canvas class="absolute top-0 left-0 z-10 cursor-none" on:mousemove={handleCursor} on:mouseleave={handleLeave} bind:this={cursorCanvas} />

<svelte:window on:resize={handleResize} />
