<template>
  <div id="question">
    <h1>Välkommen till dagens prov</h1>

    <!---vi använder (question, index) för att vi ska kunna ha reda på vilket index vi senare vill visa, vi använder v-show för att visa en fråga i taget basserat på indexet.--->
    <section
      v-for="(question, index) in algebraQuestions"
      :key="index"
      v-show="currentIndex === index"
      id="questionSection"
    >
      <h2>Fråga nummer {{ question.questionNumber }}</h2>
      <p>{{ question.question }}</p>
    </section>

    <div id="inputAndBtn">
      Svar:
      <input type="text" v-model="text" id="answerText" />
      <!-- {{ this.points }} -->
      <!---knappen för nästa fråga går ej att trycka på tills du fyllt i din placeholder v-show gör att knappen visas om man inte är på sista frågan.--->
      <!-- :disabled="!text" lägg tillbara under första <b-button>-->
      <b-button
        variant="primary"
        class="StudentTestBtn"
        @click="nextQuestion"
        v-show="!(this.currentIndex === this.algebraQuestions.length - 1)"
      >
        Nästa fråga
      </b-button>
      <!----v-show gör att denna knappen visas när man är på sista fårgan. currentIndex kollar hela tiden vilken fråga man är på -->
      <RouterLink to="/resultStudent">
        <b-button
          variant="primary"
          class="studentLandingButton"
          v-show="this.currentIndex === this.algebraQuestions.length - 1"
          >Lämna in
        </b-button>
      </RouterLink>
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

<style scoped>
* {
  color: #150b04;
}
#inputAndBtn {
  display: flex;
  flex-direction: column;
}

#questionSection {
  width: 15rem;
  height: 15rem;
  /* font-family: 'Lexend', sans-serif; */
}
#question {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
input {
  margin-bottom: 1rem;
}
</style>
