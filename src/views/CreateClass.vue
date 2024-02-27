<template>
  <div id="creat-new-class-container">
    <h1>Skapa ny klass</h1>
    <b-form>
      <b-form-group
        id="name-of-class-group"
        label="Klassens namn:"
        label-for="name-of-class"
      >
        <b-form-input
          id="name-of-class"
          placeholder="Klassens namn"
          v-model="student.nameOfClass"
          required
        />
      </b-form-group>

      <b-form-group
        id="year-of-class-group"
        label="Årskurs:"
        label-for="year-of-class"
      >
        <b-form-input
          id="year-of-class"
          placeholder=""
          type="number"
          v-model="student.year"
          required
        />
      </b-form-group>

      <b-form-group
        id="student-names-group"
        label="Elevernas namn:"
        label-for="name-of-students"
      >
        <b-form-input
          id="name-of-student"
          v-model="student.studentName"
          @keyup.enter="addStudent"
        />

        <label for="email">Email:</label>
        <b-form-input
          type="text"
          v-model="email"
          class="input-field"
          placeholder="Email (e.g., example@example.com)"
        />
        <label for="password">Password:</label>
        <b-form-input
          type="password"
          v-model="password"
          class="input-field"
          placeholder="Lösenord (Minst 8 tecken)"
        />

        <b-button type="submit" variant="primary" @click="addStudent"
          >Lägg till elev</b-button
        >
      </b-form-group>

      <!-- <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>

    <ul>
      Klass
      <!-- {{
        // student.nameOfClass
      }} -->
      <li :key="index" v-for="(newStudent, index) in studentList">
        {{ newStudent.studentName }}
      </li>
    </ul>
    <p>vi har skapat ett konto{{ studentsStore.students }}</p>

    <!-- <b-card class="mt-3" header="Student Data">
      <pre class="m-0">{{ student }}</pre>
    </b-card> -->
  </div>
</template>

<script setup>
  import { useStudentsStore } from '../store'
  import { ref } from 'vue'

  const studentsStore = useStudentsStore()

  const studentName = ref('')
  // const nameOfClass = ref('')
  const year = ref('')
  const email = ref('')
  const password = ref('')

  function addStudent() {
    studentsStore.createStudent({
      password: password.value,
      email: email.value,
      // nameOfClass: nameOfClass.value,
      year: year.value,
      studentName: studentName.value
    })
  }
</script>

<!-- <script>
  import { mapStores } from 'pinia'
  import { useStudentsStore } from '../store'

  export default {
    computed: {
      ...mapStores(useStudentsStore)
    },
    data() {
      return {
        student: {
          studentName: '',
          nameOfClass: '',
          year: '',
          email: '',
          password: ''
        },
        studentList: []
      }
    },
    methods: {
      addStudent() {
        this.$store.useStudentsStore({
          password: this.student.password,
          email: this.student.email,
          studentName: this.student.studentName,
          nameOfClass: this.student.nameOfClass,
          year: this.student.year
        })
      }
    }
  }
  // const newStudent = Object.assign({}, this.student)
  // this.studentList.push(newStudent)
  // localStorage.setItem('studentList', JSON.stringify(this.studentList))
</script> -->

<style>
  #creat-new-class-container {
    margin: auto;
    max-width: 80vw;
  }
</style>
