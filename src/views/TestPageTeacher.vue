<template>
  <nav-bar />
  <h1>Skapa prov</h1>
  <div class="exam-container">
    <div class="menu-container">
       <div class="menu">
        <!-- om selectedCategory är tom visas texten "Välj kategori", annars visas det valda värdet i menyn. -->
        <b-dropdown
          id="dropdown-2"
          :text="selectedClass ? selectedClass : 'Välj klass'"
        >
          <b-dropdown-item @click="selectedClass = 'Algebra'"
            >Algebra</b-dropdown-item
          >
          <b-dropdown-item @click="selectedClass = 'Statistik'"
            >Statistik</b-dropdown-item
          >
        </b-dropdown>
      </div>

      <div class="menu">
        <!-- om selectedCategory är tom visas texten "Välj kategori", annars visas det valda värdet i menyn. -->
        <b-dropdown
          id="dropdown-2"
          :text="selectedCategory ? selectedCategory : 'Välj kategori'"
        >
          <b-dropdown-item @click="selectedCategory = 'Algebra'"
            >Algebra</b-dropdown-item
          >
          <b-dropdown-item @click="selectedCategory = 'Statistik'"
            >Statistik</b-dropdown-item
          >
        </b-dropdown>
      </div>
    </div>
    <div class="button-container">
      <b-button variant="primary">Skapa prov</b-button>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        selectedCategory: '',
        selectedClass: ''
      }
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
.exam-container{
  width: 30%;
  margin: 0 auto;
  border: 1px solid #E5852D; /* ram */
  background-color: rgba(235, 195, 136, 0.23); /* bakgrundsfärg */
  padding: 20px; /* marginaler inuti behållaren */
  border-radius: 5px; /* rundade hörn */
}
  .menu-container {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }

  .menu {
    margin-right: 3rem;
    margin-left: 4rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    margin-bottom: 4rem
  }
</style>
