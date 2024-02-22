<template>
  <div class="login-container">
    <div class="form-container">
      <label for="password">Nuvarande lösernord</label>
      <b-form-input
        type="password"
        v-model="currentPassword"
        class="input-field"
        :state="checkPassword() ? true : false"
        placeholder="Nuvarande lösenord (Minst 8 tecken)"
      />

      <label for="password">Skriv din nya</label>
      <b-form-input
        type="password"
        v-model="newPassword"
        class="input-field"
        :state="checkPassword() ? true : false"
        placeholder="Nytt lösenord (Minst 8 tecken)"
      />

      <label for="password">Skriv om nya lösernordet</label>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  },
  methods: {
    onClick() {
      alert('Grattis du har ändrat ditt lösenord!');
    },
    checkPassword() {
  return this.currentPassword.length >= 8 && 
         this.newPassword.length >= 8 && 
         this.confirmPassword.length >= 8;
},
  },
};
</script> 
