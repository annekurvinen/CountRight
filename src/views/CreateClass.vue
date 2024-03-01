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

        <b-button type="submit" variant="primary" @click="addStudent"
          >Lägg till elev</b-button
        >
      </b-form-group>
    </b-form>

    <p>vi har skapat ett konto{{ studentsStore.students }}</p>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  import { useStudentsStore } from '../store'

  const studentsStore = useStudentsStore()

  const password = ref(''),
    eMail = ref(''),
    className = ref(''),
    year = ref(''),
    studentName = ref('')

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
