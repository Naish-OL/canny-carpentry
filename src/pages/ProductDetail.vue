<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Sample product detail
const product = {
  id: route.params.id,
  name: 'Premium Wood Countertop',
  price: '£1,200',
  category: 'Wood',
  image: 'https://via.placeholder.com/600x400?text=Product+Detail',
  description: 'This is a beautiful premium wood countertop crafted with attention to detail.',
  specs: [
    'Dimensions: 2000mm x 600mm',
    'Material: Premium Oak',
    'Finish: Satin Natural',
    'Thickness: 40mm'
  ],
  features: [
    'Handcrafted quality',
    'Natural wood grain',
    'Durable finish',
    'Custom sizing available'
  ]
}
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-cki-sage text-cki-dark py-8 px-4">
      <div class="max-w-6xl mx-auto">
        <button 
          @click="router.back()"
          class="text-cki-dark hover:opacity-70 transition-opacity mb-4 flex items-center gap-2"
        >
          <i class="pi pi-arrow-left"></i>
          Back to Shop
        </button>
      </div>
    </section>

    <!-- Product Detail -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <!-- Product Image -->
        <div>
          <img :src="product.image" :alt="product.name" class="w-full rounded-lg shadow-lg" />
        </div>

        <!-- Product Info -->
        <div>
          <h1 class="text-4xl font-bold text-cki-dark mb-4">{{ product.name }}</h1>
          
          <div class="mb-6 pb-6 border-b border-cki-gray">
            <span class="inline-block px-4 py-2 rounded-full text-sm font-semibold" style="background-color: #99B8A3; color: #333333;">
              {{ product.category }}
            </span>
          </div>

          <div class="mb-8">
            <p class="text-3xl font-bold text-cki-sage">{{ product.price }}</p>
          </div>

          <Card class="mb-8 shadow-lg border-0" style="background-color: #F5E9E5;">
            <h3 class="text-lg font-bold text-cki-dark mb-4">Description</h3>
            <p class="text-cki-dark leading-relaxed">{{ product.description }}</p>
          </Card>

          <!-- Specifications -->
          <Card class="mb-8 shadow-lg border-0" style="background-color: #F5E9E5;">
            <h3 class="text-lg font-bold text-cki-dark mb-4">Specifications</h3>
            <ul class="space-y-2">
              <li v-for="spec in product.specs" :key="spec" class="text-cki-dark flex items-start gap-3">
                <span class="text-cki-sage font-bold">•</span>
                {{ spec }}
              </li>
            </ul>
          </Card>

          <!-- Features -->
          <Card class="mb-8 shadow-lg border-0" style="background-color: #F5E9E5;">
            <h3 class="text-lg font-bold text-cki-dark mb-4">Features</h3>
            <ul class="space-y-2">
              <li v-for="feature in product.features" :key="feature" class="text-cki-dark flex items-start gap-3">
                <i class="pi pi-check text-cki-sage font-bold"></i>
                {{ feature }}
              </li>
            </ul>
          </Card>

          <!-- Action Buttons -->
          <div class="flex gap-4">
            <Button
              label="Request Quote"
              class="flex-1"
              style="background-color: #99B8A3; color: #333333;"
            />
            <Button
              label="Contact Us"
              class="flex-1 p-button-outlined"
              style="border-color: #99B8A3; color: #99B8A3;"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products Section -->
    <section class="bg-cki-beige py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-cki-dark mb-8">Related Products</h2>
        <p class="text-cki-dark opacity-80">Check out other products in this category</p>
      </div>
    </section>
  </div>
</template>
