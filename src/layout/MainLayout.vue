<script>
import NavigationBar from '../components/header/NavigationBar.vue';
import AppFooter from '../components/footer/AppFooter.vue';
import Headlines from '../components/products/headline/Headlines.vue';
// import CategoryProduct from '../components/products/CategoryProduct.vue';

export default {
    name: "MainLayout",
    components: { AppFooter, NavigationBar, Headlines, }
}
</script>

<template>
    
    <NavigationBar />
    
    <Headlines />

    <img alt="Vue logo" class="logo" src="https://i1.sndcdn.com/avatars-000010282502-iygcnd-t500x500.jpg" width="235" height="235" />

    <!-- <CategoryProduct /> -->
    
    <AppFooter />
    
</template>

<style scoped>

</style>