<template>
  <header-logo></header-logo>
  <main>
    <RouterView />
  </main>
  <h1>hej</h1>
</template>

<script>
import HeaderLogo from "./components/HeaderLogo.vue";

export default {
  components: {
    HeaderLogo,
  },
};
</script>
