<template>
  <div class="login-container">
    <section class="form-container">
      <label for="school">School:</label>
      <b-form-input
        type="text"
        v-model="school"
        class="input-field"
        :state="checkSchool() ? true : false"
        placeholder="Skola (Minst 3 tecken)"
      />
      <label for="email">Email:</label>
      <b-form-input
        type="text"
        v-model="eMail"
        class="input-field"
        :state="checkEmail() ? true : false"
        placeholder="Email (e.g., example@example.com)"
      />
      <label for="password">Password:</label>
      <b-form-input
        type="password"
        v-model="password"
        class="input-field"
        :state="checkPassword() ? true : false"
        placeholder="Lösenord (Minst 8 tecken)"
      />
      <section>
        <b-form-group label="" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="teacher"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="teacher"
            >Lärare</b-form-radio
          >
          <b-form-radio
            v-model="student"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="student"
            >Elev</b-form-radio
          >
        </b-form-group>
      </section>
      <b-button
        class="submit-button"
        variant="primary"
        @click="onClick"
        :disabled="!disable"
        >Logga in</b-button
      >
    </section>
  </div>
</template>
<script>
  import { mapStores } from 'pinia'
  import { useStudentsStore } from '../store'
  export default {
    computed: {
      ...mapStores(useStudentsStore),
      disable() {
        return (
          (this.teacher === 'teacher' || this.student === 'student') &&
          this.school.length >= 3 &&
          this.eMail.includes('@') &&
          this.eMail.length >= 3 &&
          this.password.length >= 8
        )
      }
    },

    data() {
      return {
        school: '',
        eMail: '',
        password: '',
        teacher: '',
        student: '',
        studentFound: false,
        studentStore: useStudentsStore(),
        studentName: ''
      }
    },

    methods: {
      checkSchool() {
        return this.school.length >= 3
      },
      checkEmail() {
        return this.eMail.includes('@') && this.eMail.length >= 3
      },
      checkPassword() {
        return this.password.length >= 8
      },

      onClick() {
        if (this.student === 'student') {
          for (let i = 0; i < this.studentStore.students.length; i++) {
            console.log(
              'checking email: ',
              this.studentStore.students[i].eMail === this.eMail
            )
            console.log(
              'checking password: ',
              this.studentStore.students[i].password === this.password
            )
            console.log(this.studentStore.students[i])
            if (
              this.studentStore.students[i].eMail === this.eMail &&
              this.studentStore.students[i].password === this.password
            ) {
              this.studentFound = true
            }
          }
          if (this.studentFound) {
            this.$router.push('/landingpageStudent')
          } else {
            console.log('fel avändare/lösen')
          }
        }
        if (this.teacher === 'teacher') {
          this.$router.push('/landingpageTeacher')
        }
      }
    }
  }
</script>
<style scoped>
  .login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    width: 90vw;
    /* Adjust depending on desired width */
    padding: 20px;
    /* Adjust depending on desired distance from edges */
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .input-field {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
  }

  .checkbox-container {
    margin-bottom: 10px;
  }

  .checkbox-container label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
  }

  .submit-button {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
