<script lang="ts">
	import { history } from '$lib/stores/whiteboardHistory.store';
	import { options } from '$lib/stores/whiteboardOptions.store';
	import { params } from '$lib/stores/whiteboardParams.store';
</script>

<div class="w-48 absolute top-0 right-0 p-4">
  {#if $options !== null || $options !== undefined}
    <div class="font-medium">Options:</div>
    <ul>
      <li>color: {$options.color}</li>
      <li>size: {$options.size}</li>
      <li>lineCap: {$options.lineCap}</li>
      <li>drawMode: {$options.drawMode}</li>
    </ul>
  {/if}
  {#if $params !== null && $params !== undefined}
  <div class="font-medium">Anchor coordinates:</div>
    <ul>
      <li>x: {$params.startPoint.x}</li>
      <li>y: {$params.startPoint.y}</li>
    </ul>
  {/if}
</div>