<script setup>
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section class="bg-cki-sage text-cki-dark py-16 md:py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">Custom Kitchens</h1>
      <p class="text-lg md:text-xl opacity-90 mb-8">
        Tailored kitchen design and installation that blends craftsmanship with your lifestyle.
      </p>
    </div>
  </section>

  <section class="py-16 md:py-20 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-bold text-cki-dark mb-4">What We Offer</h2>
          <ul class="space-y-3 text-cki-dark opacity-80">
            <li>✓ Bespoke kitchen design and layout planning</li>
            <li>✓ Quality wood, laminate, and acrylic finishes</li>
            <li>✓ Custom cabinetry and storage solutions</li>
            <li>✓ Professional installation and project management</li>
          </ul>
        </div>
        <div class="bg-cki-beige rounded-lg p-8 shadow-sm">
          <h3 class="text-xl font-bold text-cki-dark mb-3">From Classic to Modern</h3>
          <p class="text-cki-dark opacity-80">
            Whether you prefer warm classic wood tones or sleek contemporary acrylics, we bring your dream kitchen to life with over 15 years of expertise.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-cki-beige py-12 px-4">
    <div class="max-w-2xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-cki-dark mb-4">Ready to Start Your Kitchen Project?</h3>
      <Button
        label="Get In Touch"
        class="font-bold text-lg"
        style="background-color: #333333; color: #F5E9E5; padding: 0.75rem 2rem; border-radius: 2rem; border: none;"
        @click="router.push({ name: 'Contact' })"
      />
    </div>
  </section>
</template>