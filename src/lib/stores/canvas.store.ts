import { writable } from 'svelte/store';

export const canvas = (() => {
  const { subscribe, set } = writable(null as HTMLCanvasElement);

  return {
    subscribe,
    set,
  };
})();
export const ctx = (() => {
  const { subscribe, set } = writable(null as CanvasRenderingContext2D);

  return {
    subscribe,
    set,
  };
})();