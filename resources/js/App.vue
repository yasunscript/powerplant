<template>
    <div>
        <app-header v-if="isAuth" />
        <app-sidebar v-if="isAuth" />
        <router-view></router-view>
        <app-footer v-if="isAuth" />
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import AppHeader from "./components/Header.vue";
import AppSidebar from "./components/Sidebar.vue";
import AppFooter from "./components/Footer.vue";
export default {
    computed: {
        ...mapState(["token"]),
        ...mapGetters(["isAuth"]),
    },
    components: {
        AppHeader,
        AppSidebar,
        AppFooter,
    },
};
</script>
