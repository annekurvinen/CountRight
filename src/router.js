import { createRouter, createWebHashHistory } from "vue-router";

// import StartingPage from "./views/StartingPage.vue";
//för lärare
// import LandingpageTeacher from "./views/LandingPageTeacher";
// import ResultpageTeacher from "./views/ResultPageTeacher.vue"
import SettingsTeacher from "./views/SettingsTeacher.vue";
import TestPageTeacher from "./views/TestPageTeacher.vue";

//för elever
import LoginPageStudent from "./views/LoginPageStudent.vue";
import LandingPageStudent from "./views/LandingPageStudent.vue";
// import TestPageStudent from "./views/TestPageStudent.vue"
// import RestultPageStudent from "./views/RestultPageStudent.vue"
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LoginPageStudent,
      path: "/",
    },
    // {
    //   component: LandingPageTeacher,
    //   path: "/landingpageTeacher",
    // },
    {
      component: SettingsTeacher,
      path: "/settings",
    },
    {
      component: TestPageTeacher,
      path: "/testT",
    },
    // {
    //   component: ResultPageTeacher,
    //   path: "/resultTeacher",
    // },
    // {
    //   component: LoginPageStudent,
    //   path: "/loginpageStudent",
    // },
    {
      component: LandingPageStudent,
      path: "/landingpageStudent",
    },
    // {
    //   component: TestPageStudent,
    //   path: "/testStudent",
    // },
    // {
    //   component: RestultPageStudent,
    //   path: "/resultStudent",
    // },
  ],
});
