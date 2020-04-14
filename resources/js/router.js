import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";

import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import Pembangkit from "./pages/Pembangkit.vue";
import Penyaluran from "./pages/Penyaluran.vue";
import Report from "./pages/Report.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: { requiresAuth: true, title: "Dashboard" },
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/pembangkit",
            name: "pembangkit",
            component: Pembangkit,
            meta: { requiresAuth: true, title: "Pembangkit" },
        },
        {
            path: "/penyaluran",
            name: "penyaluran",
            component: Penyaluran,
            meta: { requiresAuth: true, title: "Penyaluran" },
        },
        {
            path: "/report",
            name: "report",
            component: Report,
            meta: { requiresAuth: true, title: "Report" },
        },
    ],
});

router.beforeEach((to, from, next) => {
    store.commit("CLEAR_ERRORS");
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth;
        if (!auth) {
            next({ name: "login" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
