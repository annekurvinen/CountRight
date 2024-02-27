<template>
  <nav-bar />
  <h1>Lärare</h1>

  <RouterLink to="/createClass"><b-button>Skapa klass</b-button> </RouterLink>

  <!-- <create-class /> -->
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
  }
  * {
    padding: 0 10vw 0 10vw;
  }
</style>
