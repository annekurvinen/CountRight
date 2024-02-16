<template>
  <div id="question">
    <h1>Välkommen till dagens prov</h1>
    <div>
      <!---vi använder (question, index) för att vi ska kunna ha reda på vilket index vi senare vill visa, vi använder v-show för att visa en fråga i taget basserat på indexet.--->
      <section
        v-for="(question, index) in algebraQuestions"
        :key="index"
        v-show="currentIndex === index"
      >
        <h2>Fråga nummer {{ question.questionNumber }}</h2>
        <p>{{ question.question }}</p>
        <input type="text" v-model="text" />
        {{ this.points }}
      </section>
      <!---knappen för nästa fråga går ej att trycka på tills du fyllt i din placeholder v-show gör att knappen visas om man inte är på sista frågan.--->
      <button
        :disabled="!text"
        @click="nextQuestion"
        v-show="!(this.currentIndex === this.algebraQuestions.length - 1)"
      >
        Nästa fråga
      </button>
      <!----v-show gör att denna knappen visas när man är på sista fårgan. currentIndex kollar hela tiden vilken fråga man är på -->
      <button v-show="this.currentIndex === this.algebraQuestions.length - 1">
        Lämna in
      </button>
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
      //håller reda på vilket index (vilken av frågorna) vi befinner oss på
      currentIndex: 0,
      //räknar poängen
      points: 0,
    };
  },
  methods: {
    //metod för att kolla om man skrivit i placeholder eller inte
    isDisable() {
      return this.text.length > 0;
    },
    //vi sätter
    nextQuestion() {
      //if-sats som kollar om texten man skrivit in matchar med svaret på den frågan man är på, denna behöver vara först innan nästa if-sats byter till nästa fråga
      if (
        parseInt(this.text) === this.algebraQuestions[this.currentIndex].answer
      ) {
        this.points++;
      }
      //kollar vilket index man är på och om man inte är på sista frågan så ökar den indexet (byter till nästa fråga) med +1
      if (this.currentIndex < this.algebraQuestions.length - 1) {
        this.currentIndex++;
        this.text = '';
      }
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
