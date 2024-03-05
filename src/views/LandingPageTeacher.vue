<template>
  <nav-bar />
  <div class="classes" role="tablist">
    <!-- för varje klass -->
    <b-card no-body v-for="(classItem, index) in classes" :key="index">
      <!-- klassnamn -->
      <b-card-header
        header-tag="header"
        role="tab"
        class="class-header"
        v-b-toggle="'accordion-' + classItem.className"
      >
        <h6 id="class-name">{{ classItem.className }}</h6>
        <!-- <b-button variant="primary">{{ classItem.className }}</b-button> -->
        <!-- Klassens genomsnitt (funkar ej) -->
        <p style="margin-bottom: 0">Klassens genomsnitt:</p>
      </b-card-header>
      <b-collapse
        :id="'accordion-' + classItem.className"
        accordion="my-accordion"
        role="tabpanel"
      >
        <!-- inuti varje accordion -->
        <b-card-body>
          <!-- lista med alla elever -->
          <b-list-group>
            <!-- varje elev -->
            <b-list-group-item
              v-for="(student, studentIndex) in classItem.studentNames"
              :key="studentIndex"
              ><p
                v-b-toggle="'accordion-' + student.name"
                style="display: inline"
              >
                <b>{{ student.name }}</b>
                Genomsnitt:
                {{ calculateAverageStudent(student.testResults) }}/12
              </p>
              <b-collapse :id="'accordion-' + student.name">
                <b-table
                  striped
                  hover
                  :items="student.testResults"
                  :fields="studentField"
                />
              </b-collapse>
            </b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>

  <div class="class-table">
    <b-table>s</b-table>
  </div>

  <div id="student-results">
    <b-card
      v-for="(student, index) in studentsStore.students"
      :key="index"
      class="student-card"
    >
      <h3>{{ student.studentName }}</h3>
      <div class="student-info">
        <p class="student-details"><b>Klass:</b> {{ student.className }}</p>
        <p class="student-details">
          <b>Senaste resultat:</b> {{ student.result }}
        </p>
      </div>
    </b-card>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'

  import classData from '../JSON/classes.json'

  import { mapStores } from 'pinia'
  import { useStudentsStore } from '../store'

  export default {
    computed: {
      ...mapStores(useStudentsStore)
    },
    NavBar,
    data() {
      return {
        classes: classData.classes,
        studentField: [
          {
            key: 'date',
            label: 'Datum',
            sortable: true
          },
          {
            key: 'category',
            label: 'Kategori',
            sortable: true
          },
          {
            key: 'result',
            label: 'Resultat'
          }
        ],
        classField: [
          {
            key: 'studentName',
            label: 'Namn'
          },
          {
            key: 'result',
            label: 'Resultat'
          }
        ]
      }
    },
    methods: {
      calculateAverageStudent(score) {
        let average = 0
        let length = score.length

        for (let i = 0; i < length; i++) {
          average += score[i].result
        }

        if (length > 0) {
          average /= length
        }

        return average
      },
      findStudent() {}
    }
  }
</script>

<style>
  .student-details {
    margin-bottom: 0;
  }
  .classes {
    width: 80vw;
    margin: auto;
  }

  .class-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #class-name {
    margin-bottom: 0;
    padding: 0.4rem;
    background-color: var(--orange);
    border-radius: 0.3rem;
  }

  .student-card {
    width: 60vw;
    min-width: 19rem;

    background-color: #f4e2d1;
  }

  .student-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  #student-results {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin: auto;
    width: 80vw;
    min-width: 19rem;
  }

  @media screen and (min-width: 800px) {
    .student-info {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    .student-card {
      width: 60vw;
      display: flex;
      flex-direction: row;
    }
  }
</style>
