<template>
  <nav-bar />
  <h1 id="h1-text">Skapa prov</h1>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="exam-container">
          <div class="menu-container">
            <div class="row">
              <div class="col-md-6" id="chooseClass">
                <div class="menu">
                  <!-- om selectedClass är tom visas texten "Välj klass", annars visas den valda klassen i menyn. -->
                  <b-dropdown
                    id="dropdown-1"
                    :text="selectedClass ? selectedClass : 'Välj klass'"
                    class="dropdown-menu-right"
                  >
                    <b-dropdown-item @click="selectedClass = '4b'"
                      >4b</b-dropdown-item
                    >
                    <b-dropdown-item @click="selectedClass = '5h'"
                      >5h</b-dropdown-item
                    >
                  </b-dropdown>
                </div>
              </div>

              <div class="col-md-6">
                <div class="menu">
                  <!-- om selectedCategory är tom visas texten "Välj kategori", annars visas det valda värdet i menyn. -->
                  <b-dropdown
                    id="dropdown-2"
                    :text="
                      selectedCategory ? selectedCategory : 'Välj kategori'
                    "
                    class="dropdown-menu-left"
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
            </div>
          </div>
          <!-- :disabled="!allFieldsFilled" -->
          <div class="button-container">
            <b-button
              variant="primary"
              @click="showModal = true"
              :disabled="!allFieldsFilled"
              >Skapa prov</b-button
            >
          </div>
          <b-modal v-model="showModal">
            <p>Vill du spara detta prov?</p>
            <template #modal-footer="{ cancel, ok }">
              <b-button @click="cancel">Avbryt</b-button>
              <b-button @click="ok" variant="primaty">Ja</b-button>
            </template>
          </b-modal>
        </div>
      </div>
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
        selectedClass: '',
        text: '',
        showModal: false
      }
    },
    computed: {
      allFieldsFilled() {
        return this.selectedCategory !== '' && this.selectedClass !== ''
      }
    }
  }
</script>

<style>
  #h1-text {
    text-align: center;
    margin-bottom: 1rem;
  }
  .exam-container {
    border: 1px solid #e5852d;
    background-color: rgba(235, 195, 136, 0.23);
    padding: 15px;
    border-radius: 5px;
    width: 30vw;
    min-width: 25rem;
    margin: auto;
  }
  .menu-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  #chooseClass {
    padding-bottom: 1rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
</style>
