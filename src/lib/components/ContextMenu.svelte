<script lang="ts">
	import { options } from '$lib/stores/whiteboardState.store';
	import { history } from '$lib/stores/whiteboardHistory.store';
	import { ctx } from '$lib/stores/canvas.store';

	import { ActionIcon, NativeSelect, Container } from '@svelteuidev/core';
	import Icon from './Icon.svelte';

	let size = $options.size;
	let shape = $options.lineCap;
	let color = $options.color;

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
</script>

<Container class="absolute bg-orange-100 flex items-center gap-4 py-2">
	<NativeSelect
		value={shape}
		on:change={changeShape}
		label="Stroke shape"
		data={['round', 'square']}
	/>
	<NativeSelect
		value={size.toString()}
		on:change={changeSize}
		label="Stroke width"
		data={['2', '4', '6', '10', '14', '20']}
	/>
	<NativeSelect
		value={color}
		on:change={changeColor}
		label="Color"
		data={['red', 'green', 'blue', 'yellow', 'black']}
	/>

	<ActionIcon radius="xl" size="xl" on:click={undo}><Icon icon="undo" /></ActionIcon>
</Container>
