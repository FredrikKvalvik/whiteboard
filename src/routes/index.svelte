<script lang="ts">
import { onMount } from "svelte";
import Canvas from "$lib/components/Canvas.svelte";
import ContextMenu from "$lib/components/ContextMenu.svelte";
import Debug from "$lib/components/Debug.local.svelte";
import CursorCanvas from "$lib/components/CursorCanvas.svelte";

</script>
<div>
  <ContextMenu />
  <Debug />
  <Canvas />
</div>