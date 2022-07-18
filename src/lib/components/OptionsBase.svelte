<script lang="ts">
	import { ActionIcon, Button, Popper, Stack } from '@svelteuidev/core';
	import Icon from '$lib/components/Icon.svelte';

	export let values: any[];
	export let icon: string;

	let mounted = false;
	let reference: HTMLButtonElement;

	const flipMounted = () => {
		mounted = !mounted;
	};
</script>

<ActionIcon bind:element={reference} on:click={flipMounted}><Icon {icon} /></ActionIcon>
<Popper {mounted} {reference}>
  <div class="w-32 bg-white shadow-sm p-2">
    <Stack>
      <Button size="xs" radius="sm" variant="subtle"><span class="bg-red-500 h-1 w-full"></span></Button>
    </Stack>
  </div>
</Popper>