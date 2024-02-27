// import { defineStore } from 'pinia'

// export const useStudentsStore = defineStore('students', {
//   actions: {
//     createStudents(students) {
//       this.students.push(students)
//     }
//   },
//   state: () => {
//     const studentsFromLocalStorage = localStorage.getItem('students')

//     if (studentsFromLocalStorage) {
//       return JSON.parse(studentsFromLocalStorage)
//     } else {
//       return {
//         students: []
//       }
//     }
//   }
// })
import { defineStore } from 'pinia'
export const useStudentsStore = defineStore('students', {
  action: {
    createStudent(student) {
      this.students.push(student)
    }
  },
  state: () => ({
    students: [{ password: 'secret', email: 'test@test.com', result: '' }]
  })
})

export const useTestStore = defineStore('Test', {
  state: () => ({
    finalPoint: 0
  }),
  actions: {
    setPoints(value) {
      console.log(value)
      this.finalPoint = value
    }
  }
})
