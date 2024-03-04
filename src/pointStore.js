import { createPinia } from 'pinia'

const pinia = createPinia();
export const pointStore = pinia;

pinia.defineStore({
    id: 'pointStore',
    state: () => ({
        points: 0,
    }),
    actions: {
        setPoints(points) {
            this.points = points
        }
    }
})

// export const useCounterStore = defineStore('counter', {
//   actions: {
//     increment() {
//       this.value++
//     }
//   },
//   state: () => ({ value: 0 })
// })
