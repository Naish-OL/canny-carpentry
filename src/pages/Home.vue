<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()

const services = [
  {
    title: 'Custom Kitchens',
    description: 'Bespoke kitchen design and installation tailored to your lifestyle',
    icon: 'pi pi-hammer'
  },
  {
    title: 'Interior Design',
    description: 'Professional interior styling and planning for your space',
    icon: 'pi pi-palette'
  },
  {
    title: 'Premium Surfaces',
    description: 'Wood, tile, and solid acrylic surfaces for lasting beauty',
    icon: 'pi pi-image'
  }
]
</script>

<template>
  <!-- Hero Section -->
  <section class="bg-cki-sage text-cki-dark py-16 md:py-24 px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">Canny Kitchens & Interiors</h1>
      <p class="text-lg md:text-xl mb-8 opacity-90">
        Custom kitchens, interior design, and premium surfaces for your home
      </p>
      <Button 
        label="Explore Our Work"
        class="font-bold text-lg"
        style="background-color: #333333; color: #F5E9E5; padding: 0.75rem 2rem; border-radius: 2rem; border: none;"
        @click="router.push({ name: 'Gallery' })"
      />
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-16 md:py-24 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-cki-dark mb-16">Our Services</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card 
          v-for="service in services" 
          :key="service.title"
          class="shadow-lg border-0"
          :style="{ backgroundColor: '#F5E9E5' }"
        >
          <template #header>
            <div class="text-5xl text-cki-sage p-8 text-center">
              <i :class="service.icon"></i>
            </div>
          </template>
          
          <h3 class="text-2xl font-bold text-cki-dark mb-4">{{ service.title }}</h3>
          <p class="text-cki-dark opacity-80">{{ service.description }}</p>
        </Card>
      </div>
    </div>
  </section>

  <!-- Materials Section -->
  <section class="py-16 md:py-24 px-4 bg-cki-beige">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-cki-dark mb-16">
        Materials We Specialize In
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg p-8 shadow-md border-l-4" style="border-color: #99B8A3;">
          <h3 class="text-2xl font-bold text-cki-dark mb-4">Wood</h3>
          <p class="text-cki-dark opacity-80">
            Quality wood surfaces and finishes for a warm, classic aesthetic
          </p>
        </div>
        
        <div class="bg-white rounded-lg p-8 shadow-md border-l-4" style="border-color: #A8A8A8;">
          <h3 class="text-2xl font-bold text-cki-dark mb-4">Tile</h3>
          <p class="text-cki-dark opacity-80">
            Ceramic and specialty tile options for durability and style
          </p>
        </div>
        
        <div class="bg-white rounded-lg p-8 shadow-md border-l-4" style="border-color: #99B8A3;">
          <h3 class="text-2xl font-bold text-cki-dark mb-4">Solid Acrylic</h3>
          <p class="text-cki-dark opacity-80">
            Premium countertops and shower surrounds with seamless elegance
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-cki-sage text-cki-dark py-16 md:py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
      <p class="text-lg mb-8 opacity-90">
        Contact us today to discuss your custom kitchen or interior design project
      </p>
      <Button 
        label="Get In Touch"
        class="font-bold text-lg"
        style="background-color: #333333; color: #F5E9E5; padding: 0.75rem 2rem; border-radius: 2rem; border: none;"
        @click="router.push({ name: 'Contact' })"
      />
    </div>
  </section>
</template>
