import { defineStore } from 'pinia'

export const useStudentsStore = defineStore('students', {
  actions: {
    createStudent(student) {
      this.students.push(student)
    },

    setPoints(value) {
      console.log(value)
      this.students.result = value
    }
  },
  persist: true, // localStorage

  state: () => ({ students: [] })
})

// export const useTestStore = defineStore('Test', {
//   state: () => ({
//     finalPoint: 0
//   }),
//   actions: {
//   }
// })
