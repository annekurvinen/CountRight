<template>
  <div id="question">
    <h1>Välkommen till dagens prov</h1>
    <div>
      <!-- <section v-for="(question, index) in combinedQuestions" :key="index">{{ question.fråga }}</section> -->
      <question></question>
    </div>
  </div>
</template>

<script>
// for (let n=1; n < 13; n++) {
//   question
// question number = n
// if (n<13) {
//   next question
// } else if (n=13) {
//   test result
// }
// }

import questionData from '../JSON/questions.json';

export default {
  data() {
    return {
      combinedQuestions: questionData.algebra,
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
