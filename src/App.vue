<script setup>
import FooterNav from './components/FooterNav.vue'
import NavBar from './components/NavBar.vue'
import HomePage from './views/HomePage.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <HomePage />
  </main>
  <footer>
    <FooterNav />
  </footer>
</template>

<style scoped></style>
