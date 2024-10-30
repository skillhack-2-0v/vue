import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import SkillsPage from "@/views/SkillsPage.vue";
import RoadMap from "@/views/RoadMap.vue";
import ProfilePage from "@/views/ProfilePage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillsPage,
    },
    {
      // [x] чисто придирка, лучше skill-name или skillName уж тогда, опять же нарушение нейминга
      path: "/skills/:name_skill",

      component: RoadMap,
    },
    {
      path: "/profile",
      component: ProfilePage,
    },
  ],
});

export default router;
