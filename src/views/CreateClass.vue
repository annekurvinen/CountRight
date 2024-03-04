<template>
  <h1>Skapa ny klass</h1>
  <div id="new-class-container">
    <b-form>
      <b-form-group
        id="name-of-class-group"
        label="Klassens namn:"
        label-for="name-of-class"
      >
        <b-form-input
          id="name-of-class"
          placeholder="Klassens namn"
          v-model="className"
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
          v-model="year"
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
          v-model="studentName"
          @keyup.enter="addStudent"
        />

        <label for="email">Email:</label>
        <b-form-input
          type="text"
          v-model="eMail"
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

        <b-button
          type="submit"
          variant="primary"
          @click="addStudent"
          id="add-student-btn"
          >Lägg till elev</b-button
        >
      </b-form-group>
    </b-form>
  </div>
  <div
    v-for="(student, index) in studentsStore.students"
    :key="index"
    class="student"
  >
    <h3>Elev {{ index + 1 }}</h3>
    <p><strong>Klass:</strong> {{ student.className }}</p>
    <p><strong>Namn:</strong> {{ student.studentName }}</p>
    <p><strong>Email:</strong> {{ student.eMail }}</p>
    <p><strong>Lösernord:</strong> {{ student.password }}</p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  import { useStudentsStore } from '../store'
  //för att använda pinia-store som heter useStudentsStore.
  const studentsStore = useStudentsStore()

  //variabler för att kunna spara ner information om studenterna
  const password = ref(''),
    eMail = ref(''),
    className = ref(''),
    year = ref(''),
    studentName = ref('')

  //lägger till värden som sedan sparas i pinia och sätts till localstorage som användarre för studenter
  function addStudent() {
    studentsStore.createStudent({
      className: className.value,
      year: year.value,
      studentName: studentName.value,
      eMail: eMail.value,
      password: password.value
    })
  }
</script>

<style scoped>
  .student {
    max-width: 80vw;
    margin: 20px auto auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5ad6b;
  }

  #new-class-container {
    max-width: 80vw;
    margin: auto;
  }
  #add-student-btn {
    margin-top: 1rem;
  }
</style>
