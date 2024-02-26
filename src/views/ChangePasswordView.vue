<template>
  <div class="password-container">
    <form class="form-container">
      <label for="currentPassword">Nuvarande lösernord</label>
      <b-form-input
        type="password"
        v-model="currentPassword"
        class="input-field"
        :state="checkPassword() ? true : false"
        placeholder="Nuvarande lösenord (Minst 8 tecken)"
      />

      <label for="newPassword">Skriv din nya</label>
      <b-form-input
        type="password"
        v-model="newPassword"
        class="input-field"
        :state="checkPassword() ? true : false"
        placeholder="Nytt lösenord (Minst 8 tecken)"
      />

      <label for="newPassword">Skriv om nya lösernordet</label>
      <b-form-input
        type="password"
        v-model="confirmPassword"
        class="input-field"
        :state="checkPassword() ? true : false"
        placeholder="Bekräfta nytt lösenord (Minst 8 tecken)"
      />

      <b-button
        class="submit-button"
        variant="primary"
        @click="onClick"
        :disabled="disable"
        >Ändra lösenord</b-button
      >

      <b-button class="submit-button" variant="primary" @click="back"
        >Tillbaka</b-button
      >
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    },
    methods: {
      onClick() {
        alert('Grattis du har ändrat ditt lösenord!')
      },
      checkPassword() {
        return (
          this.currentPassword.length >= 8 &&
          this.newPassword.length >= 8 &&
          this.confirmPassword.length >= 8
        )
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .password-container {
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
    font-family: 'Lexend', sans-serif;
    color: var(--mörkbrun);
    margin: 1rem;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
