<script setup>
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section class="bg-cki-sage text-cki-dark py-16 md:py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">Premium Surfaces</h1>
      <p class="text-lg md:text-xl opacity-90 mb-8">
        Expert installation of wood, tile, and solid acrylic surfaces built to last.
      </p>
    </div>
  </section>

  <section class="py-16 md:py-20 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-bold text-cki-dark mb-4">Surface Solutions</h2>
          <ul class="space-y-3 text-cki-dark opacity-80">
            <li>✓ Premium wood flooring and wall paneling</li>
            <li>✓ Ceramic, porcelain, and natural stone tile</li>
            <li>✓ Solid acrylic countertops and shower surrounds</li>
            <li>✓ Seamless installation and finishing</li>
          </ul>
        </div>
        <div class="bg-cki-beige rounded-lg p-8 shadow-sm">
          <h3 class="text-xl font-bold text-cki-dark mb-3">Durability Meets Beauty</h3>
          <p class="text-cki-dark opacity-80">
            We source only the finest materials and combine them with precision installation to create surfaces that stand the test of time.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-cki-beige py-12 px-4">
    <div class="max-w-2xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-cki-dark mb-4">Upgrade Your Surfaces Today</h3>
      <Button
        label="Get In Touch"
        class="font-bold text-lg"
        style="background-color: #333333; color: #F5E9E5; padding: 0.75rem 2rem; border-radius: 2rem; border: none;"
        @click="router.push({ name: 'Contact' })"
      />
    </div>
  </section>
</template>