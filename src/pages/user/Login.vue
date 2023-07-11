<script>
import AppFooter from '../../components/footer/AppFooter.vue';
import NavigationBar from '../../components/header/NavigationBar.vue';
export default {
    name: "Login",
    components: { AppFooter, NavigationBar }
}
</script>

<template>
    <NavigationBar />

    <section class="min-vh-100">    
        <h1 class="text-center mt-4">Masuk</h1>
        <div class="container d-flex justify-content-center align-items-center">
            <form class="border p-5">
                <div class="mb-3">
                    <label for="inputEmailLogin" class="form-label">Email</label>
                    <input type="email" placeholder="example@email.com" class="form-control" id="inputEmailLogin">
                </div>
                <div class="mb-3">
                    <label for="inputPassowordLogin" class="form-label">Password</label>
                    <input type="password" placeholder="Masukkan Password" class="form-control" id="inputPassowordLogin">
                </div>
                <div class="mb-3">
                    <label class="form-check-label" for="">Belum punya akun?</label> <a class="text-primary text-decoration-none" href="/register">Daftar sekarang!</a>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
        </div>
    </section>

    <AppFooter />
</template>