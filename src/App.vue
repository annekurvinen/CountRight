<template>
  <header-logo></header-logo>
  <main>
    <RouterView />
  </main>
</template>

<script>
<<<<<<< HEAD
import HeaderLogo from "./components/HeaderLogo.vue";

export default {
  components: {
    HeaderLogo,
  },
};
</script>

<style scoped></style>
=======
import HeaderLogo from './components/HeaderLogo.vue';
import LoginForm from './components/LoginForm.vue';
export default {
  components: {
    HeaderLogo,
    LoginForm,
  },
};
</script>
>>>>>>> 1259d65bf500c46eba7d4d13b5ff4357696427ab
