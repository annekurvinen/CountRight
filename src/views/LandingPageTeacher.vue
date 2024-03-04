<template>
  <nav-bar />
  <h1>Lärare</h1>

  <view-class />
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import ViewClass from '../components/ViewClasses.vue'
  export default {
    components: {
      NavBar,
      ViewClass
    }
  }
</script>

<style scoped>
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  /* * {
    padding: 0 10vw 0 10vw;
  } */
</style>
