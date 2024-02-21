<template>
  <article id="resultContainer">
    <h1>Resultat</h1>
    <p>Du fick {{ finalPoint }} av 12 poäng</p>
    <section v-show="finalPoint >= 10" class="nextActionForTestPage">
      <h2>Godkänt</h2>
      <RouterLink to="/loginpageStudent">
        <b-button variant="primary">Logga ut</b-button>
      </RouterLink>
    </section>
    <section v-show="finalPoint <= 9" class="nextActionForTestPage">
      <h2>Icke godkänt</h2>
      <RouterLink to="/testStudent">
        <b-button variant="primary">Gör om test</b-button>
      </RouterLink>
    </section>
  </article>
</template>

<!-- bytt till composition api -->
<script setup>
import { ref, onMounted } from 'vue';
import { useTestStore } from '../store';

//använder information från pinia
const store = useTestStore();
const finalPoint = ref(0);

//onmounted för att DOM ska hinna laddats klar innan man sätter värdet på final points som hämtas från store.js så att det görs i rätt ordning
onMounted(() => {
  finalPoint.value = store.finalPoint;
  return {
    //vi retunerar den uppdaterade finalPoint som vi fått från store.js
    finalPoint,
  };
});
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
