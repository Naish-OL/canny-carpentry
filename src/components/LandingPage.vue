<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- Hero Section -->
  <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Canny Carpentry
      </h1>
      <p class="text-lg md:text-xl mb-8 opacity-95">
        Crafting quality wooden pieces and furniture with precision and care
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <Button 
          label="Shop Now" 
          class="bg-white text-blue-600 hover:bg-gray-100"
          @click="scrollToSection('ecommerce')"
        />
        <Button 
          label="Get in Touch" 
          outlined 
          class="border-white text-white hover:bg-white hover:text-blue-600"
          @click="scrollToSection('contact')"
        />
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="py-12 md:py-16 px-4 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
        Why Choose Us
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <Card class="rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <template #title>
            <h3 class="text-xl font-bold text-blue-600">Quality Craftsmanship</h3>
          </template>
          <template #content>
            <p class="text-gray-600">
              Each piece is handcrafted with attention to detail and superior materials.
            </p>
          </template>
        </Card>

        <!-- Feature 2 -->
        <Card class="rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <template #title>
            <h3 class="text-xl font-bold text-blue-600">Custom Designs</h3>
          </template>
          <template #content>
            <p class="text-gray-600">
              We create custom solutions tailored to your specific needs and preferences.
            </p>
          </template>
        </Card>

        <!-- Feature 3 -->
        <Card class="rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <template #title>
            <h3 class="text-xl font-bold text-blue-600">Timely Delivery</h3>
          </template>
          <template #content>
            <p class="text-gray-600">
              We guarantee on-time delivery without compromising on quality.
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-blue-600 text-white py-12 px-4 text-center">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p class="text-lg mb-8">
        Explore our collection or request a custom quote today.
      </p>
      <Button 
        label="Contact Us Now" 
        class="bg-white text-blue-600 hover:bg-gray-100 font-bold"
        @click="scrollToSection('contact')"
      />
    </div>
  </div>
</template>
