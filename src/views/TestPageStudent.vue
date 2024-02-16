<template>
  <div id="question">
    <h1>Välkommen till dagens prov</h1>
    <div>
      <section v-for="(question, index) in combinedQuestions" :key="index">{{ question.fråga }}</section>
    </div>
  </div>
</template>

<script>
import questionData from "../JSON/questions.json"

export default {
  data() {
    return {
      combinedQuestions: questionData.algebra
    }
  }
}
</script>

<style>
#question {
display: flex;
flex-direction: column;
align-items: center;

}
</style>