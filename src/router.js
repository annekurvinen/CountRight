import { createRouter, createWebHashHistory } from "vue-router";

import StartingPage from "./views/StartingPage.vue";
//för lärare
// import LandingpageTeacher from "./views/LandingpageTeacher";
// import ResultpageTeacher from "./views/ResultpageTeacher.vue"
import SettingsTeacher from "./views/SettingsTeacher.vue";
import TestpageTeacher from "./views/TestpageTeacher.vue";

//för elever
import LoginpageStudent from "./views/LoginpageStudent.vue";
import LandingpageStudent from "./views/LandingpageStudent.vue";
// import TestpageStudent from "./views/TestpageStudent.vue"
// import RestultpageStudent from "./views/RestultpageStudent.vue"
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LoginpageStudent,
      path: "/",
    },
    // {
    //   component: LandingpageTeacher,
    //   path: "/landingpageTeacher",
    // },
    {
      component: SettingsTeacher,
      path: "/settings",
    },
    {
      component: TestpageTeacher,
      path: "/testT",
    },
    // {
    //   component: ResultpageTeacher,
    //   path: "/resultTeacher",
    // },
    // {
    //   component: LoginpageStudent,
    //   path: "/loginpageStudent",
    // },
    {
      component: LandingpageStudent,
      path: "/landingpageStudent",
    },
    // {
    //   component: TestpageStudent,
    //   path: "/testStudent",
    // },
    // {
    //   component: RestultpageStudent,
    //   path: "/resultStudent",
    // },
  ],
});
