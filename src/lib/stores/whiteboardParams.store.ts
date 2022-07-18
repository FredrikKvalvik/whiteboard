import { writable } from "svelte/store";

export const params = (() => {
  const {subscribe, update, set} = writable({})

  return {
    subscribe,
    reset: () => set({}),
    setStartPoint: (x: number, y: number) => update((state) => ({...state, startPoint: {x, y}})),
    setCurrentImage: (image: ImageData) => update((state) => ({...state, currentImage: image}))
  }
})()