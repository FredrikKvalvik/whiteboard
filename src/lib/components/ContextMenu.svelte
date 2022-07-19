<script lang="ts">
	import { slide } from 'svelte/transition';

	import { options } from '$lib/stores/whiteboardOptions.store';
	import { history } from '$lib/stores/whiteboardHistory.store';
	import { ctx } from '$lib/stores/canvas.store';

	import { ActionIcon, NativeSelect } from '@svelteuidev/core';

	import Icon from './Icon.svelte';

	let isOpen = false;

	const changeShape = (e: any) => {
		options.setLineCap(e.target.value);
	};
	const changeSize = (e: any) => {
		options.setSize(e.target.value);
	};
	const changeColor = (e: any) => {
		options.setColor(e.target.value);
	};

	const undo = () => {
		history.undo($ctx);
	};
	const open = () => {
		isOpen = !isOpen;
	};
</script>

<div class="absolute bg-orange-100 flex flex-col items-center py-2 px-2 shadow-md">
	<div class="self-start flex gap-4">
		<ActionIcon radius="xl" size="xl" on:click={open}>
			<Icon icon={isOpen ? 'close' : 'menu'} />
		</ActionIcon>
		<ActionIcon disabled={$history.length === 0} radius="xl" size="xl" on:click={undo}>
			<Icon icon="undo" />
		</ActionIcon>
	</div>

	<div class="overflow-hidden" class:open={isOpen} class:closed={!isOpen}>
		<NativeSelect
			value={$options.lineCap}
			label="Stroke shape"
			on:change={changeShape}
			data={['round', 'square']}
		/>
		<NativeSelect
			value={$options.size}
			label="Stroke width"
			on:change={changeSize}
			data={['2', '4', '6', '10', '14', '20']}
		/>
		<NativeSelect
			value={$options.color}
			label="Color"
			on:change={changeColor}
			data={['red', 'green', 'blue', 'yellow', 'black']}
		/>
	</div>
</div>

<style>
	.open {
		@apply h-full;
	}

	.closed {
		@apply h-0;
	}
</style>
