<script>
import { useCounterStore } from '../store';
import { mapStores } from 'pinia';

export default {
  data() {
    return {
      // value: 0
    };
  },
  methods: {
    // increment(amount) {
    //   this.value++
    // }
  },
  computed: {
    ...mapStores(useCounterStore),
  },
};
</script>

<template>
  <div>
    <h1>Resultat</h1>
    <h2>Godkänt</h2>
    <h2>Icke godkänt</h2>
    <p>Du fick {{ testStore.points }} av 12 poäng</p>
  </div>
</template>
