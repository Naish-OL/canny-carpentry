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
  <div class="py-16 md:py-24 px-4" style="background: linear-gradient(135deg, #8b6f47 0%, #c17a4f 100%);">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4" style="color: #faf6f1;">
        Welcome to Canny Carpentry
      </h1>
      <p class="text-lg md:text-xl mb-8" style="color: #e8d7c3;">
        Crafting quality wooden pieces and furniture with precision and care
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <Button 
          label="Shop Now" 
          class="font-bold rounded-xl px-8 py-3"
          style="background-color: #faf6f1; color: #8b6f47;"
          @click="scrollToSection('ecommerce')"
        />
        <Button 
          label="Get in Touch" 
          class="font-bold rounded-xl px-8 py-3"
          style="background-color: transparent; color: #faf6f1; border: 2px solid #faf6f1;"
          @click="scrollToSection('contact')"
        />
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div class="py-12 md:py-16 px-4" style="background-color: #faf6f1;">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12" style="color: #5c4a33;">
        Why Choose Us
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <Card class="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style="background-color: #fff9f5;">
          <template #title>
            <h3 class="text-xl font-bold" style="color: #c17a4f;">Quality Craftsmanship</h3>
          </template>
          <template #content>
            <p style="color: #8b6f47;">
              Each piece is handcrafted with attention to detail and superior materials.
            </p>
          </template>
        </Card>

        <!-- Feature 2 -->
        <Card class="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style="background-color: #fff9f5;">
          <template #title>
            <h3 class="text-xl font-bold" style="color: #c17a4f;">Custom Designs</h3>
          </template>
          <template #content>
            <p style="color: #8b6f47;">
              We create custom solutions tailored to your specific needs and preferences.
            </p>
          </template>
        </Card>

        <!-- Feature 3 -->
        <Card class="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style="background-color: #fff9f5;">
          <template #title>
            <h3 class="text-xl font-bold" style="color: #c17a4f;">Timely Delivery</h3>
          </template>
          <template #content>
            <p style="color: #8b6f47;">
              We guarantee on-time delivery without compromising on quality.
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="py-12 px-4 text-center" style="background-color: #d4a574;">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl font-bold mb-4" style="color: #5c4a33;">Ready to Get Started?</h2>
      <p class="text-lg mb-8" style="color: #5c4a33;">
        Explore our collection or request a custom quote today.
      </p>
      <Button 
        label="Contact Us Now" 
        class="font-bold rounded-xl px-8 py-3"
        style="background-color: #fff9f5; color: #c17a4f;"
        @click="scrollToSection('contact')"
      />
    </div>
  </div>
</template>
