<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <Navigation />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* App-level styles */
</style>
