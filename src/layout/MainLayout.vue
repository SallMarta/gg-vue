<script>
import NavigationBar from '../components/header/NavigationBar.vue';
import AppFooter from '../components/footer/AppFooter.vue';

export default {
    name: "MainLayout",
    components: { AppFooter, NavigationBar }
}
</script>

<template>
    <NavigationBar />

    <section class="min-vh-100">
        <div class="container text-center">
            <p class="text-danger">Ini adalah home page</p>
            <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="235" height="235" />
        </div>
    </section>
    
    <AppFooter />
</template>

<style scoped>

</style>