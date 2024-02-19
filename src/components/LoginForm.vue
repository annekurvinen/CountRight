<template>
  <div class="login-container">
    <div class="form-container">
      <b-form-input
        type="text"
        v-model="skola"
        class="input-field"
        :state="Skola() ? true : false"
        placeholder="Skriv din skola (Minst tre tecken)"
      />
      <b-form-input
        type="text"
        v-model="mail"
        class="input-field"
        :state="Email() ? true : false"
        placeholder="Skriv din email (e.g., example@example.com)"
      />
      <b-form-input
        type="password"
        v-model="lös"
        class="input-field"
        :state="Lös() ? true : false"
        placeholder="Skriv din lösnord (Minst 8 tecken)"
      />
      <div class="teacherStudent">
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
      </div>
      <button class="submit-button" @click="onClick" :disabled="!disable">Logga in</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skola: '',
      mail: '',
      lös: '',
      teacher: '',
      student: "",
    };
  },
  computed: {
    disable() {
      return (this.teacher === 'teacher' || this.student === 'student') && 
             this.skola.length >= 3 && 
             this.mail.includes('@') && 
             this.mail.length >= 3 && 
             this.lös.length >= 8;
    }
  },
  methods: {
    Skola() {
      return this.skola.length >= 3;
    },
    Email() {
      return this.mail.includes('@') && this.mail.length >= 3;
    },
    Lös() {
      return this.lös.length >= 8;
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
  width: 90vw; /* Anpassa beroende på önskad bredd */
  padding: 20px; /* Justera beroende på önskat avstånd från sidokanter */
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
  background-color: #007bff;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
