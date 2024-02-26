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
        <b-button type="submit" variant="primary" @click="addStudent"
          >Lägg till elev</b-button
        >
      </b-form-group>

      <!-- <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>

    <ul>
      Klass
      {{
        student.nameOfClass
      }}
      <li :key="index" v-for="(student, index) in studentList">
        {{ student.studentName }}
      </li>
    </ul>

    <!-- <b-card class="mt-3" header="Student Data">
      <pre class="m-0">{{ student }}</pre>
    </b-card> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        student: {
          studentName: '',
          nameOfClass: '',
          year: ''
        },
        studentList: []
      }
    },
    methods: {
      addStudent() {
        const newStudent = Object.assign({}, this.student)
        this.studentList.push(newStudent)
        localStorage.setItem('studentList', JSON.stringify(this.studentList))
      }
    }
  }
</script>

<style>
  #creat-new-class-container {
    margin: auto;
    max-width: 80vw;
  }
</style>
