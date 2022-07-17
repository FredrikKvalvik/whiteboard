<script lang="ts">
	import { state } from '$lib/stores/whiteboardState.store';
	import { history } from '$lib/stores/whiteboardHistory.store';

	import { ActionIcon, NativeSelect, Container } from '@svelteuidev/core';
	import Icon from './Icon.svelte';

  let size = $state.size
  let shape = $state.lineCap
  let color = $state.color

  const changeShape = (e: any) => {
    state.setLineCap(e.target.value)
  }
  const changeSize = (e: any) => {
    state.setSize(e.target.value)
  }
  const changeColor = (e: any) => {
    state.setColor(e.target.value)
  }
</script>

<Container class="absolute flex items-center gap-4 my-2">
	<NativeSelect value={shape} on:change={changeShape} label="Stroke shape" data={['round', 'square']} />
  <NativeSelect value={size} on:change={changeSize} label="Stroke width" data={["2", "4", "6", "10", "14", "20"]} />
  <NativeSelect value={color} on:change={changeColor} label="Color" data={['red', 'green', 'blue', 'yellow', 'black']} />

	<ActionIcon radius="xl" size="xl" on:click><Icon icon="undo" /></ActionIcon>
</Container>
