<script setup>
import Navigation from './components/Navigation.vue'
import LandingPage from './components/LandingPage.vue'
import ECommerceSection from './components/ECommerceSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navigation />
  <div id="landing">
    <LandingPage />
  </div>
  <ECommerceSection />
  <ContactSection />
  <Footer />
</template>

<style scoped>
/* App-level styles */
</style>
