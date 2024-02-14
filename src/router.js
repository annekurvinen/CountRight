import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";

// import LandingpageTeacher from "./view/LandingpageTeacher";
import SettingsTeacher from "./views/SettingsTeacher.vue";
import TestpageTeacher from "./views/TestpageTeacher.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    // {
    //   component: LandingpageTeacher,
    //   path: "/LandingpageTeacher",
    // },
    {
      component: SettingsTeacher,
      path: "/settings",
    },
    {
      component: TestpageTeacher,
      path: "/test",
    },
  ],
});
