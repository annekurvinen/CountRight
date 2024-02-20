import { defineStore } from 'pinia';

export const useTestStore = defineStore('Test', {
  state: () => ({
    points: 0,
  }),
  actions: {
    incrementPoints() {
      console.log(this.points);
      this.points += 1;
    },
    setPoints(value) {
      console.log('nästa poäng');
      this.points = value;
    },
  },
});
