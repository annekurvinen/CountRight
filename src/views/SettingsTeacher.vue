<!-- <template>
  <nav-bar />
  <h1>inne i settings</h1>
  <main />
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};

</script> -->
<template>
  <article id="resultContainer">
    <h1>Resultat</h1>
    <p>Du fick {{ finalPoint }} av 12 poäng</p>
    <section class="nextActionForTestPage">
      <h2>Godkänt</h2>

      <BButton @click="showModal = !showModal" variant="primary">
        Logga ut
      </BButton>
      <BModal @ok="onOk" v-model="showModal" title="Logga ut">
        Är du säker att du vill logga ut?
      </BModal>
      <!-- <b-button variant="primary">Logga ut</b-button> -->
    </section>
    <section class="nextActionForTestPage">
      <h2>Icke godkänt</h2>
      <RouterLink to="/testStudent">
        <b-button variant="primary">Gör om test</b-button>
      </RouterLink>
    </section>
  </article>
</template>

<!-- bytt till composition api -->
<script setup>
  import { ref, onMounted } from 'vue'
  import { useTestStore } from '../store'
  import { useRouter } from 'vue-router'
  //använder information från pinia
  const showModal = ref(false)
  const store = useTestStore()
  const finalPoint = ref(0)
  const router = useRouter()

  const onOk = () => {
    router.push('/loginpageStudent')
  }
  //onmounted för att DOM ska hinna laddats klar innan man sätter värdet på final points som hämtas från store.js så att det görs i rätt ordning
  onMounted(() => {
    finalPoint.value = store.finalPoint
    return {
      //vi retunerar den uppdaterade finalPoint som vi fått från store.js
      finalPoint
    }
  })
</script>

<style>
  #resultContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  }

  .nextActionForTestPage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
