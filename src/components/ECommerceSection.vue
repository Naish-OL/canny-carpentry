<template>
  <section class="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-amber-900 mb-2 text-center">
        Handcrafted Products
      </h2>
      <p class="text-center text-amber-700 mb-12">
        Browse our collection of custom carpentry pieces
      </p>

      <!-- Category Filter -->
      <div class="mb-8 flex flex-wrap gap-3 justify-center">
        <button
          v-for="cat in ['All', 'Tables', 'Shelving', 'Cabinets', 'Doors']"
          :key="cat"
          @click="selectedCategory = cat === 'All' ? '' : cat"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition-all duration-300',
            (!selectedCategory && cat === 'All') || selectedCategory === cat
              ? 'bg-amber-700 text-white shadow-lg'
              : 'bg-white text-amber-700 border-2 border-amber-700 hover:bg-amber-100'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <p class="text-amber-700 text-lg">Loading products...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600 text-lg">{{ error }}</p>
        <button
          @click="fetchProducts"
          class="mt-4 px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800"
        >
          Retry
        </button>
      </div>

      <!-- Products Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <p class="text-amber-700 text-lg">No products found in this category</p>
      </div>

      <!-- Shopping Cart Drawer -->
      <Sidebar v-model:visible="showCart" position="right" style-class="bg-white">
        <template #header>
          <h3 class="text-2xl font-bold text-amber-900">Shopping Cart</h3>
        </template>

        <div v-if="cart.length === 0" class="p-6 text-center">
          <p class="text-amber-700">Your cart is empty</p>
        </div>

        <div v-else class="p-6">
          <div class="space-y-4 mb-6">
            <div
              v-for="item in cart"
              :key="item.id"
              class="flex items-center justify-between bg-amber-50 p-4 rounded-lg"
            >
              <div class="flex-1">
                <p class="font-semibold text-amber-900">{{ item.name }}</p>
                <p class="text-sm text-amber-700">${{ item.price }}</p>
              </div>
              <div class="flex items-center gap-2">
                <button
                  @click="updateCartQuantity(item.id, item.quantity - 1)"
                  class="px-2 py-1 bg-amber-200 text-amber-900 rounded hover:bg-amber-300"
                >
                  -
                </button>
                <span class="px-3 text-amber-900 font-semibold">
                  {{ item.quantity }}
                </span>
                <button
                  @click="updateCartQuantity(item.id, item.quantity + 1)"
                  class="px-2 py-1 bg-amber-200 text-amber-900 rounded hover:bg-amber-300"
                >
                  +
                </button>
              </div>
              <button
                @click="removeFromCart(item.id)"
                class="ml-2 px-3 py-1 bg-red-200 text-red-700 rounded hover:bg-red-300"
              >
                ✕
              </button>
            </div>
          </div>

          <div class="border-t-2 border-amber-200 pt-4 mb-6">
            <div class="flex justify-between mb-4">
              <span class="font-semibold text-amber-900">Subtotal:</span>
              <span class="font-bold text-amber-900">${{ cartTotal }}</span>
            </div>
          </div>

          <Button
            label="Proceed to Checkout"
            class="w-full"
            style="background-color: #8b6f47; color: white"
            @click="proceedToCheckout"
          />
        </div>
      </Sidebar>

      <!-- Cart Toggle Button -->
      <button
        @click="showCart = true"
        class="fixed bottom-8 right-8 bg-amber-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-amber-800 transition-all flex items-center gap-2"
      >
        🛒 Cart ({{ cartItemCount }})
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import ProductCard from './ProductCard.vue'
import { apiClient, type Product } from '@/services/api'

const products = ref<Product[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const selectedCategory = ref('')
const showCart = ref(false)
const cart = ref<Array<Product & { quantity: number }>>([])

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value
  return products.value.filter(p =>
    p.name.toLowerCase().includes(selectedCategory.value.toLowerCase())
  )
})

const cartTotal = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
)

const cartItemCount = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
)

const fetchProducts = async () => {
  loading.value = true
  error.value = null
  try {
    products.value = await apiClient.getProducts({ inStock: true })
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load products'
    console.error('Error fetching products:', err)
  } finally {
    loading.value = false
  }
}

const addToCart = (product: Product) => {
  const existingItem = cart.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
}

const updateCartQuantity = (id: string, quantity: number) => {
  if (quantity <= 0) {
    removeFromCart(id)
  } else {
    const item = cart.value.find(item => item.id === id)
    if (item) item.quantity = quantity
  }
}

const removeFromCart = (id: string) => {
  cart.value = cart.value.filter(item => item.id !== id)
}

const proceedToCheckout = () => {
  alert(`Proceeding to checkout with ${cartItemCount.value} items totaling $${cartTotal.value}`)
  // TODO: Integrate with payment provider
}

onMounted(() => {
  fetchProducts()
})
</script>