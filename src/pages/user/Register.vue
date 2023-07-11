<script>
import AppFooter from '../../components/footer/AppFooter.vue';
import NavigationBar from '../../components/header/NavigationBar.vue';

export default {
    name: "Register",
    components: { AppFooter, NavigationBar }
}
</script>

<template>
    <NavigationBar />
    
    <section class="min-vh-100">
        <h1 class="text-center mt-4">Daftar</h1>
        <div class="container d-flex justify-content-center align-items-center">
            <form class="border p-5">
                <div class="mb-3">
                    <label for="inputNamaRegister" class="form-label">Nama Lengkap</label>
                    <input type="email" placeholder="John Doe" class="form-control" id="inputNamaRegister">
                </div>
                <div class="mb-3">
                    <label for="inputEmailRegister" class="form-label">Email</label>
                    <input type="email" placeholder="example@email.com" class="form-control" id="inputEmailRegister">
                </div>
                <div class="mb-3">
                    <label for="inputPassowordRegister" class="form-label">Password</label>
                    <input type="password" placeholder="Masukkan Password" class="form-control" id="inputPassowordRegister">
                </div>
                <div class="mb-3">
                    <label class="form-check-label" for="">Sudah punya akun?</label> <a class="text-primary text-decoration-none" href="/login">Masuk sekarang!</a>
                </div>
                <button type="submit" class="btn btn-primary w-100">Daftar</button>
            </form>
        </div>
    </section>
    
    <AppFooter />
</template>

<style>
</style>