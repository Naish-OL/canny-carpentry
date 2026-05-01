<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import DataView from 'primevue/dataview'
import Dropdown from 'primevue/dropdown'
import { ref } from 'vue'

const sortBy = ref(null)
const selectedCategory = ref(null)

const categories = [
  { label: 'All Categories', value: null },
  { label: 'Wood', value: 'wood' },
  { label: 'Tile', value: 'tile' },
  { label: 'Solid Acrylic', value: 'acrylic' }
]

const sortOptions = [
  { label: 'Name (A-Z)', value: 'name' },
  { label: 'Price (Low-High)', value: 'price' }
]

// Sample products - replace with API call
const products = ref([
  {
    id: 1,
    name: 'Oak Kitchen Countertop',
    category: 'wood',
    price: '£1,200',
    image: 'https://via.placeholder.com/300x200?text=Oak+Countertop',
    description: 'Premium oak wood countertop with natural finish'
  },
  {
    id: 2,
    name: 'Ceramic Backsplash Tile',
    category: 'tile',
    price: '£450',
    image: 'https://via.placeholder.com/300x200?text=Ceramic+Tile',
    description: 'Beautiful ceramic tiles perfect for kitchen backsplash'
  },
  {
    id: 3,
    name: 'Acrylic Bathroom Surround',
    category: 'acrylic',
    price: '£2,500',
    image: 'https://via.placeholder.com/300x200?text=Acrylic+Surround',
    description: 'Seamless solid acrylic shower surround'
  },
  {
    id: 4,
    name: 'Walnut Feature Wall',
    category: 'wood',
    price: '£1,800',
    image: 'https://via.placeholder.com/300x200?text=Walnut+Wall',
    description: 'Stunning walnut wood feature wall panels'
  },
  {
    id: 5,
    name: 'Porcelain Floor Tiles',
    category: 'tile',
    price: '£680',
    image: 'https://via.placeholder.com/300x200?text=Porcelain+Tiles',
    description: 'High-quality porcelain flooring tiles'
  },
  {
    id: 6,
    name: 'Acrylic Kitchen Island',
    category: 'acrylic',
    price: '£3,200',
    image: 'https://via.placeholder.com/300x200?text=Acrylic+Island',
    description: 'Custom designed acrylic kitchen island with integrated seating'
  }
])

const filteredProducts = ref(products.value)

const filterProducts = () => {
  let filtered = products.value

  if (selectedCategory.value) {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }

  if (sortBy.value === 'name') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'price') {
    filtered = [...filtered].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[£,]/g, ''))
      const priceB = parseInt(b.price.replace(/[£,]/g, ''))
      return priceA - priceB
    })
  }

  filteredProducts.value = filtered
}

const handleCategoryChange = () => {
  filterProducts()
}

const handleSortChange = () => {
  filterProducts()
}
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-cki-sage text-cki-dark py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Shop Our Products</h1>
        <p class="text-lg opacity-90">
          Explore our selection of wood, tile, and solid acrylic surfaces
        </p>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="bg-cki-beige py-8 px-4 border-b border-cki-gray">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center">
        <div class="w-full md:w-1/2">
          <label class="block text-sm font-semibold text-cki-dark mb-2">Category</label>
          <Dropdown
            v-model="selectedCategory"
            :options="categories"
            optionLabel="label"
            optionValue="value"
            class="w-full"
            @change="handleCategoryChange"
          />
        </div>

        <div class="w-full md:w-1/2">
          <label class="block text-sm font-semibold text-cki-dark mb-2">Sort By</label>
          <Dropdown
            v-model="sortBy"
            :options="sortOptions"
            optionLabel="label"
            optionValue="value"
            class="w-full"
            @change="handleSortChange"
          />
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            v-for="product in filteredProducts"
            :key="product.id"
            class="shadow-lg border-0 hover:shadow-xl transition-shadow"
            :style="{ backgroundColor: '#F5E9E5' }"
          >
            <template #header>
              <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
            </template>

            <h3 class="text-xl font-bold text-cki-dark mb-2">{{ product.name }}</h3>
            <p class="text-cki-dark opacity-80 mb-4 text-sm">{{ product.description }}</p>
            
            <div class="flex justify-between items-center mb-4">
              <span class="text-2xl font-bold text-cki-sage">{{ product.price }}</span>
              <span class="px-3 py-1 rounded-full text-sm font-semibold" :style="{ backgroundColor: '#99B8A3', color: '#333333' }">
                {{ product.category }}
              </span>
            </div>

            <Button 
              label="Request Quote"
              class="w-full"
              style="background-color: #99B8A3; color: #333333;"
            />
          </Card>
        </div>

        <div v-if="filteredProducts.length === 0" class="text-center py-12">
          <p class="text-cki-dark text-lg">No products found. Please adjust your filters.</p>
        </div>
      </div>
    </section>
  </div>
</template>
