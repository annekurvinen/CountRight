import { defineStore } from 'pinia'

export const useStudentsStore = defineStore('students', {
  actions: {
    createStudent(student) {
      this.students.push(student)
    },

    setPoints(value) {
      console.log('sparat i set points', value)
      this.lastLoggedInStudent.result = value
      console.log('kolla värdet i pina', this.lastLoggedInStudent.result)
    },

    isInlogged(student) {
      console.log('loggad i piniastore', student)
      this.lastLoggedInStudent = student
    }
  },
  persist: true,

  state: () => ({
    students: [],
    lastLoggedInStudent: [{ result: [] }]
  })
})

// export const useTestStore = defineStore('Test', {
//   state: () => ({
//     finalPoint: 0
//   }),
//   actions: {
//   }
// })
