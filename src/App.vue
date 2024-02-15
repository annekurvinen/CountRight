<template>
  <header-logo></header-logo>
  <main>
    <RouterView />
  </main>
</template>

<script>
import HeaderLogo from "./components/HeaderLogo.vue";
export default {
  components: {
    HeaderLogo,
  },
};
</script>
