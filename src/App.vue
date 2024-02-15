<template>
  <header-logo></header-logo>
  <LoginForm></LoginForm>
  <main>
    <RouterView />
  </main>
</template>

<script>
import HeaderLogo from "./components/HeaderLogo.vue";
import LoginForm from "./components/LoginForm.vue";
export default {
  components: {
    HeaderLogo,
    LoginForm
  },
};
</script>

