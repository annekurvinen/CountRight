<template>
  <div class="login-container">
    <div class="form-container">
      <label for="password">Password:</label>
      <b-form-input
        type="password"
        v-model="currentPassword"
        class="input-field"
        :state="checkPassword() ? true : false"
        placeholder="Nuvarande lösenord (Minst 8 tecken)"
      />

      <label for="password">Password:</label>
      <b-form-input
        type="password"
        v-model="newPassword"
        class="input-field"
        :state="checkPassword() ? true : false"
        placeholder="Nytt lösenord (Minst 8 tecken)"
      />

      <label for="password">Password:</label>
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
  },
};
</script>

<!-- <template>
  <main>
    <div>
      <h1>Ändra lösenord</h1>
      <form @submit.prevent="changePassword">
        <label>
          Nuvarande lösenord:
          <input type="password" v-model="currentPassword" required />
        </label>
        <label>
          Nytt lösenord:
          <input type="password" v-model="newPassword" required />
        </label>
        <label>
          Bekräfta nytt lösenord:
          <input type="password" v-model="confirmPassword" required />
        </label>
        <!-- <button type="submit">Byt lösenord</button> -->
<!-- <RouterLink to="/ChangePasswordView"> -->
<!-- <b-button variant="primary" class="changePasswordButton">Ändra lösenord -->
<!-- </b-button> -->
<!-- </RouterLink> -->
<!-- </form> -->
<!-- </div>
  </main>
</template>

<script>
import ChangePasswordView from '../views/ChangePasswordView.vue';

export default {
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  components: {
    ChangePassword
  }
};
</script>

<style scoped>
.changePasswordButton {
  margin: 4rem;
  font-family: 'Lexend', sans-serif;
  color: var(--mörkbrun);
}

h1,
label {
  font-family: 'Lexend', sans-serif;
  color: var(--mörkbrun);
}

b-button {
  margin: 10rem;
}
</style> -->
