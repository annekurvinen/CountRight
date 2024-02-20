import { defineStore } from 'pinia';

export const useTestStore = defineStore('Test', {
  state: () => ({
    points: 0,
  }),
  actions: {
    incrementPoints() {
      this.points += 1;
    },
    setPoints(value) {
      this.points = value;
    },
  },
});

// export const useCounterStore = defineStore('counter' /*counterStore*/, {
//   //actions är lite som methods-sektionen i vue-options api
//   actions: {
//     increment(byNumber) {
//       //Exempel på spreading (...)
//       // let a = [1, 2, 3]
//       // let b = [4, 5]
//       // let c = [...a, ...b]  //[1, 2, 3, 4, 5]
//       // let c = [a, b]  //[[1, 2], [3, 4, 5]]
//       // console.log(c)

//       this.number += byNumber;
//       this.number2 += byNumber;
//     },
//     // incrementBy2() { //onödig för vi åstadkommer samma sak med increment ovan
//     //   this.number += 2
//     // }
//   },
//   //state är lite som data-sektionen i vue-options api
//   state: () => ({ number: 0, number2: 1 }),
// });
