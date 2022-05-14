import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AccountPage from "../views/AccountPage.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import PostPage from "../views/PostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: AccountPage,
    },
    {
      path: "/signIn",
      name: "signIn",
      component: SignIn,
    },
    {
      path: "/signUp",
      name: "signUp",
      component: SignUp,
    },
    {
      path: "/post",
      name: "post",
      component: PostPage,
    },
  ],
});

export default router;
