<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Message from 'primevue/message'
import ProgressSpinner from 'primevue/progressspinner'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { apiClient } from '@/services/api'
import { formatPrice } from '@/utils/format'

const router = useRouter()

const products = ref([])
const loading = ref(false)
const error = ref(null)

const search = ref('')
const inStockOnly = ref(false)
const sortBy = ref(null)

const sortOptions = [
  { label: 'Newest', value: null },
  { label: 'Name (A-Z)', value: 'name' },
  { label: 'Price (Low-High)', value: 'price-asc' },
  { label: 'Price (High-Low)', value: 'price-desc' }
]

const fetchProducts = async () => {
  loading.value = true
  error.value = null
  try {
    products.value = await apiClient.getProducts()
  } catch (err) {
    console.error('Error fetching products:', err)
    error.value = 'We couldn\'t load our products right now. Please try again shortly.'
  } finally {
    loading.value = false
  }
}

const filteredProducts = computed(() => {
  const term = search.value.trim().toLowerCase()
  let filtered = products.value

  if (term) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.size_dimensions.toLowerCase().includes(term)
    )
  }

  if (inStockOnly.value) {
    filtered = filtered.filter(p => p.stock > 0)
  }

  if (sortBy.value === 'name') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'price-asc') {
    filtered = [...filtered].sort((a, b) => Number(a.price) - Number(b.price))
  } else if (sortBy.value === 'price-desc') {
    filtered = [...filtered].sort((a, b) => Number(b.price) - Number(a.price))
  }

  return filtered
})

const requestQuote = (product) => {
  router.push({ name: 'Contact', query: { product: product.name } })
}

onMounted(fetchProducts)
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-cki-sage text-cki-dark py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Shop Our Products</h1>
        <p class="text-lg opacity-90">
          Explore our selection of premium surfaces
        </p>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="bg-cki-beige py-8 px-4 border-b border-cki-gray">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:items-end">
        <div class="w-full md:w-1/2">
          <label for="product-search" class="block text-sm font-semibold text-cki-dark mb-2">Search</label>
          <InputText
            id="product-search"
            v-model="search"
            placeholder="Search by name or size"
            class="w-full"
          />
        </div>

        <div class="w-full md:w-1/3">
          <label class="block text-sm font-semibold text-cki-dark mb-2">Sort By</label>
          <Dropdown
            v-model="sortBy"
            :options="sortOptions"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>

        <div class="flex items-center gap-2 md:pb-2">
          <Checkbox v-model="inStockOnly" inputId="in-stock-only" binary />
          <label for="in-stock-only" class="text-sm font-semibold text-cki-dark">In stock only</label>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div v-if="loading" class="flex justify-center py-12">
          <ProgressSpinner aria-label="Loading products" />
        </div>

        <div v-else-if="error" class="flex flex-col items-center gap-4 py-12">
          <Message severity="error" :closable="false">{{ error }}</Message>
          <Button
            label="Try Again"
            icon="pi pi-refresh"
            style="background-color: #99B8A3; color: #333333;"
            @click="fetchProducts"
          />
        </div>

        <template v-else>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              v-for="product in filteredProducts"
              :key="product.id"
              class="shadow-lg border-0 hover:shadow-xl transition-shadow"
              :style="{ backgroundColor: '#F5E9E5' }"
            >
              <template #content>
                <RouterLink
                  :to="{ name: 'ProductDetail', params: { id: product.id } }"
                  class="block hover:opacity-80 transition-opacity"
                >
                  <h3 class="text-xl font-bold text-cki-dark mb-2">{{ product.name }}</h3>
                </RouterLink>
                <p class="text-cki-dark opacity-80 mb-4 text-sm">{{ product.size_dimensions }}</p>

                <div class="flex justify-between items-center mb-4">
                  <span class="text-2xl font-bold text-cki-dark">{{ formatPrice(product.price) }}</span>
                  <span
                    class="px-3 py-1 rounded-full text-sm font-semibold"
                    :style="product.stock > 0
                      ? { backgroundColor: '#99B8A3', color: '#333333' }
                      : { backgroundColor: '#A8A8A8', color: '#1a1a1a' }"
                  >
                    {{ product.stock > 0 ? 'In stock' : 'Out of stock' }}
                  </span>
                </div>

                <div class="flex gap-3">
                  <Button
                    label="Details"
                    class="flex-1 p-button-outlined"
                    style="border-color: #333333; color: #333333;"
                    @click="router.push({ name: 'ProductDetail', params: { id: product.id } })"
                  />
                  <Button
                    label="Request Quote"
                    class="flex-1"
                    style="background-color: #99B8A3; color: #333333;"
                    @click="requestQuote(product)"
                  />
                </div>
              </template>
            </Card>
          </div>

          <div v-if="filteredProducts.length === 0" class="text-center py-12">
            <p class="text-cki-dark text-lg">
              {{ products.length === 0 ? 'No products are available right now.' : 'No products found. Please adjust your filters.' }}
            </p>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
