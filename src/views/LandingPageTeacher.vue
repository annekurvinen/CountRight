<template>
  <nav-bar />
  <h1>Lärare</h1>
  <create-class />
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import CreateClass from './CreateClass.vue'
  export default {
    components: {
      NavBar,
      CreateClass
    }
  }
</script>

<style scoped>
  h1 {
    display: flex;
    justify-content: center;
  }
</style>
