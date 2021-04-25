<template>
    <div>
        <!-- 基座中可以放自己的路由， 也可以引用其他字应用 -->
        <button @click="storeParamsChange">add</button>
        <el-menu :router="true" mode="horizontal">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/one">One</el-menu-item>
            <el-menu-item index="/two">Two</el-menu-item>
        </el-menu>
        <router-view></router-view>
        <div id="vueOne"></div>
        <div id="vueTwo"></div>
    </div>
</template>

<script>

export default {
    name: 'App',

    components: {},

    watch: {
        // $route: function (newVal) {
        //     const {path} = newVal;
        //     console.log(path);
        // }
    },

    created() {
        // console.log(this.$store);
    },

    methods: {
        storeParamsChange() {
            this.$store.dispatch('add')
        }
    }
}
</script>

<style>

</style>
