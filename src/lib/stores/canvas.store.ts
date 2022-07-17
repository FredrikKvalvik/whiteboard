import { writable } from 'svelte/store';

export const canvas = writable(null as HTMLCanvasElement);

export const ctx = writable(null as CanvasRenderingContext2D);
