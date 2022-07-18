/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

export declare global {
	type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'black';
	type SizeInput = '2' | '4' | '6' | '10' | '14' | '20';
	type Size = 2 | 4 | 6 | 10 | 14 | 20;
	type LineCap = 'round' | 'square';

	interface Options {
		color: Colors;
		size: Size;
		lineCap: lineCap;
	}

	type DrawHistory = ImageData[];

	type DrawEvent = (ctx: CanvasRenderingContext2D, options: Options, event: MouseEvent) => void;
}
