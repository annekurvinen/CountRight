import { createRouter, createWebHashHistory } from 'vue-router';

// import StartingPage from "./views/StartingPage.vue";
//för lärare
// import LandingpageTeacher from "./views/LandingPageTeacher";
// import ResultpageTeacher from "./views/ResultPageTeacher.vue"
import SettingsTeacher from './views/SettingsTeacher.vue';
import TestPageTeacher from './views/TestPageTeacher.vue';

//för elever
import LoginPageStudent from './views/LoginPageStudent.vue';
import LandingPageStudent from './views/LandingPageStudent.vue';
import TestPageStudent from './views/TestPageStudent.vue';
import LandingPageTeacher from './views/LandingPageTeacher.vue';
import ResultPageStudent from './views/ResultPageStudent.vue';
import ChangePasswordView from './views/ChangePasswordView.vue';
import Logout from './components/Logout.vue'
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LoginPageStudent,
      path: '/',
    },
    {
      component: LandingPageTeacher,
      path: '/landingpageTeacher',
    },
    {
      component: SettingsTeacher,
      path: '/settings',
    },
    {
      component: TestPageTeacher,
      path: '/testT',
    },
    // {
    //   component: ResultPageTeacher,
    //   path: "/resultTeacher",
    // },
    {
      component: LoginPageStudent,
      path: '/loginpageStudent',
    },

    {
      component: Logout,
      path: '/logout',
    },
    {
      component: LandingPageStudent,
      path: '/landingpageStudent',
    },
    {
      component: TestPageStudent,
      path: '/testStudent',
    },
    {
      component: ResultPageStudent,
      path: '/resultStudent',
    },
    {
      component: ChangePasswordView,
      path: '/changePasswordView',
    },
  ],
});
