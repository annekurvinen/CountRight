<template>
  <login-form></login-form>
  <nav-bar></nav-bar>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    LoginForm,
    NavBar,
  },
};
</script>
