<script setup>
import { ref, computed } from 'vue'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Sidebar from 'primevue/sidebar'
import Divider from 'primevue/divider'
import ProductCard from './ProductCard.vue'

// Mock product data
const products = ref([
  {
    id: 1,
    name: 'Wooden Dining Table',
    description: 'Beautiful oak dining table with natural finish',
    price: 899.99,
    category: 'Furniture',
    image: 'https://via.placeholder.com/300x200?text=Dining+Table',
    inStock: true
  },
  {
    id: 2,
    name: 'Handcrafted Chair',
    description: 'Comfortable wooden chair with cushioned seat',
    price: 349.99,
    category: 'Furniture',
    image: 'https://via.placeholder.com/300x200?text=Chair',
    inStock: true
  },
  {
    id: 3,
    name: 'Coffee Table',
    description: 'Modern coffee table with storage compartment',
    price: 549.99,
    category: 'Furniture',
    image: 'https://via.placeholder.com/300x200?text=Coffee+Table',
    inStock: true
  },
  {
    id: 4,
    name: 'Wall Shelves',
    description: 'Set of 3 floating wooden shelves',
    price: 199.99,
    category: 'Decor',
    image: 'https://via.placeholder.com/300x200?text=Shelves',
    inStock: true
  },
  {
    id: 5,
    name: 'Bed Frame',
    description: 'Solid wood bed frame (Queen size)',
    price: 1299.99,
    category: 'Furniture',
    image: 'https://via.placeholder.com/300x200?text=Bed+Frame',
    inStock: false
  },
  {
    id: 6,
    name: 'Desk',
    description: 'Spacious wooden desk for home office',
    price: 699.99,
    category: 'Furniture',
    image: 'https://via.placeholder.com/300x200?text=Desk',
    inStock: true
  }
])

const selectedCategory = ref('All')
const cartItems = ref([])
const cartVisible = ref(false)

const categories = computed(() => {
  const cats = ['All', ...new Set(products.value.map(p => p.category))]
  return cats.map(c => ({ label: c, value: c }))
})

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return products.value
  }
  return products.value.filter(p => p.category === selectedCategory.value)
})

const cartTotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const cartCount = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
})

const handleAddToCart = (product) => {
  const existingItem = cartItems.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += product.quantity
  } else {
    cartItems.value.push(product)
  }
}

const removeFromCart = (productId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== productId)
}

const updateQuantity = (productId, newQuantity) => {
  const item = cartItems.value.find(item => item.id === productId)
  if (item) {
    item.quantity = Math.max(1, newQuantity)
  }
}
</script>

<template>
  <div id="ecommerce" class="py-12 md:py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800">
          Our Products
        </h2>
        <Button
          icon="pi pi-shopping-cart"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold"
          :label="`Cart (${cartCount})`"
          @click="cartVisible = true"
        />
      </div>

      <!-- Category Filter -->
      <div class="mb-8">
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <p class="font-bold text-gray-700">Filter by:</p>
          <Dropdown
            v-model="selectedCategory"
            :options="categories"
            option-label="label"
            option-value="value"
            class="w-full sm:w-48"
          />
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          v-bind="product"
          @add-to-cart="handleAddToCart"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <h3 class="text-lg text-gray-600">
          No products found in this category
        </h3>
      </div>
    </div>

    <!-- Shopping Cart Sidebar -->
    <Sidebar v-model:visible="cartVisible" position="right" style="width: 100%; max-width: 500px;">
      <div class="p-6 h-full flex flex-col">
        <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>
        
        <div class="flex-1 overflow-y-auto space-y-4">
          <!-- Cart Items -->
          <div v-if="cartItems.length > 0" class="space-y-4">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="border border-gray-200 rounded-lg p-4"
            >
              <div class="flex justify-between mb-2">
                <h4 class="font-bold text-lg">
                  {{ item.name }}
                </h4>
                <Button
                  icon="pi pi-times"
                  class="p-button-rounded p-button-text p-button-danger"
                  @click="removeFromCart(item.id)"
                />
              </div>
              <p class="text-gray-600 mb-2">
                ${{ item.price.toFixed(2) }}
              </p>
              <div class="flex items-center gap-2">
                <Button
                  icon="pi pi-minus"
                  class="p-button-sm p-button-text"
                  @click="updateQuantity(item.id, item.quantity - 1)"
                />
                <p class="min-w-8 text-center">{{ item.quantity }}</p>
                <Button
                  icon="pi pi-plus"
                  class="p-button-sm p-button-text"
                  @click="updateQuantity(item.id, item.quantity + 1)"
                />
                <p class="ml-auto font-bold">
                  ${{ (item.price * item.quantity).toFixed(2) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Empty Cart Message -->
          <div v-else class="text-center py-8">
            <p class="text-gray-600">Your cart is empty</p>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="mt-6 space-y-4">
          <Divider />
          <div class="flex justify-between text-lg font-bold">
            <p>Total:</p>
            <p class="text-blue-600">${{ cartTotal.toFixed(2) }}</p>
          </div>

          <!-- Checkout Button -->
          <Button
            v-if="cartItems.length > 0"
            label="Proceed to Checkout"
            class="w-full bg-blue-600 hover:bg-blue-700 font-bold"
          />
        </div>
      </div>
    </Sidebar>
  </div>
</template>
