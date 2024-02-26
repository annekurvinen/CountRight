<template>
  <nav-bar />
  <!-- <div>
    <h1>Skapa prov</h1>
    <main />
    <select v-model="selectedCategory">
      <option disabled selected hidden>Välj kategori</option>
      <option value="0">Algebra</option>
      <option value="1">Statistik</option>
      Lägg till fler kategorier efter behov
    </select>
  </div>-->
  <div>
  <b-dropdown id="dropdown-1" text="Välj Kategori" class="m-md-2">
    <b-dropdown-item @click="selectedCategory ">Algebra</b-dropdown-item>
    <b-dropdown-item @click="selectedCategory ">Statistik</b-dropdown-item>
  </b-dropdown>
</div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
</style>
