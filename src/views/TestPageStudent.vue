<template>
  <div id="question">
    <h1>Välkommen till dagens prov</h1>
    <div>
      <section v-for="question in algebraQuestions" :key="index">
        <h2>Fråga nummer {{ question.questionNumber }}</h2>
        <p>{{ question.question }}</p>
        <input type="text" />
        <button :disabled="!text">Nästa fråga</button>
      </section>

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
};
</script>

<style>
#question {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
