<template>
  <div id="question">
    <h1>Välkommen till dagens prov</h1>
    <div>
      <section v-for="question in algebraQuestions" :key="index">
        <h2>Fråga nummer {{ question.questionNumber }}</h2>
        <p>{{ question.question }}</p>
        <input type="text" v-model="text" />
      </section>
      <button :disabled="!text">Nästa fråga</button>
      <button>Lämna in</button>
    </div>
  </div>
</template>

<script>
import questionData from '../JSON/questions.json';

export default {
  data() {
    return {
      algebraQuestions: questionData.algebra,
      text: '',
    };
  },
  methods: {
    isDisable() {
      return text.lenght > 0;
    },
  },
};
</script>

<style>
#question {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
