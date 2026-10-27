<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import Message from 'primevue/message'
import ProgressSpinner from 'primevue/progressspinner'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiClient } from '@/services/api'
import { formatPrice } from '@/utils/format'

const route = useRoute()
const router = useRouter()

const product = ref(null)
const loading = ref(false)
const error = ref(null)
const notFound = ref(false)

const fetchProduct = async (id) => {
  loading.value = true
  error.value = null
  notFound.value = false
  product.value = null
  try {
    product.value = await apiClient.getProductById(id)
  } catch (err) {
    console.error('Error fetching product:', err)
    if (err.message === 'Product not found') {
      notFound.value = true
    } else {
      error.value = 'We couldn\'t load this product right now. Please try again shortly.'
    }
  } finally {
    loading.value = false
  }
}

watch(() => route.params.id, (id) => {
  if (id) fetchProduct(id)
}, { immediate: true })

const requestQuote = () => {
  router.push({ name: 'Contact', query: { product: product.value.name } })
}
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-cki-sage text-cki-dark py-8 px-4">
      <div class="max-w-6xl mx-auto">
        <RouterLink
          :to="{ name: 'Shop' }"
          class="text-cki-dark hover:opacity-70 transition-opacity flex items-center gap-2 w-fit"
        >
          <i class="pi pi-arrow-left"></i>
          Back to Shop
        </RouterLink>
      </div>
    </section>

    <!-- Product Detail -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div v-if="loading" class="flex justify-center py-12">
          <ProgressSpinner aria-label="Loading product" />
        </div>

        <div v-else-if="notFound" class="text-center py-12">
          <h1 class="text-3xl font-bold text-cki-dark mb-4">Product not found</h1>
          <p class="text-cki-dark opacity-80 mb-8">This product may have been removed or the link is incorrect.</p>
          <Button
            label="Browse the Shop"
            style="background-color: #99B8A3; color: #333333;"
            @click="router.push({ name: 'Shop' })"
          />
        </div>

        <div v-else-if="error" class="flex flex-col items-center gap-4 py-12">
          <Message severity="error" :closable="false">{{ error }}</Message>
          <Button
            label="Try Again"
            icon="pi pi-refresh"
            style="background-color: #99B8A3; color: #333333;"
            @click="fetchProduct(route.params.id)"
          />
        </div>

        <div v-else-if="product" class="max-w-3xl">
          <h1 class="text-4xl font-bold text-cki-dark mb-4">{{ product.name }}</h1>

          <div class="mb-6 pb-6 border-b border-cki-gray">
            <span
              class="inline-block px-4 py-2 rounded-full text-sm font-semibold"
              :style="product.stock > 0
                ? { backgroundColor: '#99B8A3', color: '#333333' }
                : { backgroundColor: '#A8A8A8', color: '#1a1a1a' }"
            >
              {{ product.stock > 0 ? `In stock (${product.stock} available)` : 'Out of stock' }}
            </span>
          </div>

          <div class="mb-8">
            <p class="text-3xl font-bold text-cki-dark">{{ formatPrice(product.price) }}</p>
          </div>

          <Card class="mb-8 shadow-lg border-0" style="background-color: #F5E9E5;">
            <template #content>
              <h2 class="text-lg font-bold text-cki-dark mb-4">Specifications</h2>
              <ul class="space-y-2">
                <li class="text-cki-dark flex items-start gap-3">
                  <i class="pi pi-arrows-alt mt-1"></i>
                  Size: {{ product.size_dimensions }}
                </li>
              </ul>
            </template>
          </Card>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <Button
              label="Request Quote"
              class="flex-1"
              style="background-color: #99B8A3; color: #333333;"
              @click="requestQuote"
            />
            <Button
              label="Contact Us"
              class="flex-1 p-button-outlined"
              style="border-color: #333333; color: #333333;"
              @click="router.push({ name: 'Contact' })"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
