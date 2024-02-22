<template>
  <div class="login-container">
    <div class="form-container">
      <label for="school">School:</label>
      <b-form-input
      type="text" v-model="school" class="input-field" :state="checkSchool() ? true : false"
        placeholder="Skola (Minst 3 tecken)" />
      <label for="email">Email:</label>
      <b-form-input
      type="text" v-model="email" class="input-field" :state="checkEmail() ? true : false"
        placeholder="Email (e.g., example@example.com)" />
      <label for="password">Password:</label>
      <b-form-input
      type="password" v-model="password" class="input-field" :state="checkPassword() ? true : false"
        placeholder="Lösnord (Minst 8 tecken)" />
      <div class="teacherStudent">
        <b-form-group label="" v-slot="{ ariaDescribedby }">
          <b-form-radio
          v-model="teacher" :aria-describedby="ariaDescribedby" name="some-radios"
            value="teacher">Lärare</b-form-radio>
          <b-form-radio
          v-model="student" :aria-describedby="ariaDescribedby" name="some-radios"
            value="student">Elev</b-form-radio>
        </b-form-group>
      </div>
      <b-button class="submit-button" variant="primary" @click="onClick" :disabled="disable">Logga in</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      school: '',
      email: '',
      password: '',
      teacher: '',
      student: "",
    };
  },
  computed: {
    disable() {
      return (this.teacher === 'teacher' || this.student === 'student') &&
        this.school.length >= 3 &&
        this.email.includes('@') &&
        this.email.length >= 3 &&
        this.password.length >= 8;
    }
  },
  methods: {
    checkSchool() {
      return this.school.length >= 3;
    },
    checkEmail() {
      return this.email.includes('@') && this.email.length >= 3;
    },
    checkPassword() {
      return this.password.length >= 8;
    },

    onClick() {
      if (this.teacher === 'teacher') {
        this.$router.push('/landingpageTeacher');
      } else if (this.student === 'student') {
        this.$router.push('/landingpageStudent');
      }

    }

  },


};
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
