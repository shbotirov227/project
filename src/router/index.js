import Vue from "vue";
import VueRouter from "vue-router";
// import Movies from "../pages/Movies.vue";
import Slider from "../pages/Slider.vue";
Vue.use(VueRouter);

const routes = [
    // {
    //     name: "movie",
    //     path: "/",
    //     component: Movies,
    // },
    {
        name: "slider",
        path: "/",
        component: Slider,
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
