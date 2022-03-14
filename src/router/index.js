import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home";
import Login from "@/views/Login/login";
import Layout from "@/views/Layout/index";

Vue.use(VueRouter);

const About = () => import("@/views/about");
const News = () => import("@/views/News");
const Travel = () => import("@/views/Travel/travel");
const Musicw = () => import("@/views/music/m_works");
const Song = () => import("@/views/songs/songs");
const Article = () => import("@/views/Articles");
const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        component: About,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/news",
        component: News,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/travel",
        component: Travel,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/music",
        component: Musicw,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/songs",
        component: Song,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/atricles",
        component: Article,
        meta: {
          isLogin: true,
        },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
