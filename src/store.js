import { defineStore } from 'pinia';

export const useTestStore = defineStore('Test', {
  state: () => ({
    finalPoint: 0,
  }),
  actions: {
    setPoints(value) {
      console.log(value);
      this.finalPoint = value;
    },
  },
});
