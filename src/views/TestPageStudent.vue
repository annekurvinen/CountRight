<template>
  <div>
    <h1>Välkommen till dagens prov</h1>
    <ul>
      <li v-for="(question, index) in combinedQuestions" :key="index">{{ question.fråga }}</li>
    </ul>
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