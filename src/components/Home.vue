<template>
    <div>
        This is home page
        <router-link :to="{name:'routes.moo'}">Moo</router-link>
        <router-link :to="{name:'routes.loo'}">Loo</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style scoped>

</style>
