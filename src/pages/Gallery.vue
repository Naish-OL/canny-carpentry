<script setup>
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import { ref } from 'vue'

const selectedFilter = ref(null)

const filters = [
  { label: 'All Projects', value: null },
  { label: 'Kitchens', value: 'kitchens' },
  { label: 'Interiors', value: 'interiors' },
  { label: 'Surfaces', value: 'surfaces' }
]

// Sample gallery items
const galleryItems = ref([
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'kitchens',
    before: 'https://via.placeholder.com/300x200?text=Kitchen+Before',
    after: 'https://via.placeholder.com/300x200?text=Kitchen+After',
    description: 'Complete kitchen renovation with custom cabinetry and wood countertops'
  },
  {
    id: 2,
    title: 'Bathroom Interior Redesign',
    category: 'interiors',
    before: 'https://via.placeholder.com/300x200?text=Bath+Before',
    after: 'https://via.placeholder.com/300x200?text=Bath+After',
    description: 'Contemporary bathroom redesign with tile accents'
  },
  {
    id: 3,
    title: 'Premium Acrylic Countertops',
    category: 'surfaces',
    before: 'https://via.placeholder.com/300x200?text=Counter+Before',
    after: 'https://via.placeholder.com/300x200?text=Counter+After',
    description: 'Seamless solid acrylic countertops for modern kitchen'
  },
  {
    id: 4,
    title: 'Open Plan Living Kitchen',
    category: 'kitchens',
    before: 'https://via.placeholder.com/300x200?text=Open+Before',
    after: 'https://via.placeholder.com/300x200?text=Open+After',
    description: 'Open plan kitchen redesign with integrated dining area'
  },
  {
    id: 5,
    title: 'Wall Tiling Project',
    category: 'surfaces',
    before: 'https://via.placeholder.com/300x200?text=Wall+Before',
    after: 'https://via.placeholder.com/300x200?text=Wall+After',
    description: 'Feature wall with designer ceramic tiles'
  },
  {
    id: 6,
    title: 'Living Room Refresh',
    category: 'interiors',
    before: 'https://via.placeholder.com/300x200?text=Living+Before',
    after: 'https://via.placeholder.com/300x200?text=Living+After',
    description: 'Complete living room interior redesign'
  }
])

const filteredGallery = ref(galleryItems.value)

const handleFilterChange = () => {
  if (selectedFilter.value) {
    filteredGallery.value = galleryItems.value.filter(item => item.category === selectedFilter.value)
  } else {
    filteredGallery.value = galleryItems.value
  }
}
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-cki-sage text-cki-dark py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p class="text-lg opacity-90">
          Explore our collection of completed projects
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="bg-cki-beige py-8 px-4 border-b border-cki-gray">
      <div class="max-w-6xl mx-auto">
        <label class="block text-sm font-semibold text-cki-dark mb-2">Filter by Category</label>
        <Dropdown
          v-model="selectedFilter"
          :options="filters"
          optionLabel="label"
          optionValue="value"
          class="w-full md:w-64"
          @change="handleFilterChange"
        />
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card 
            v-for="item in filteredGallery"
            :key="item.id"
            class="shadow-lg border-0 overflow-hidden"
            :style="{ backgroundColor: '#F5E9E5' }"
          >
            <!-- Before/After Comparison -->
            <div class="flex gap-2 mb-4">
              <div class="flex-1">
                <p class="text-xs font-semibold text-cki-dark mb-2 text-center">BEFORE</p>
                <img :src="item.before" :alt="`${item.title} Before`" class="w-full h-32 object-cover rounded" />
              </div>
              <div class="flex-1">
                <p class="text-xs font-semibold text-cki-dark mb-2 text-center">AFTER</p>
                <img :src="item.after" :alt="`${item.title} After`" class="w-full h-32 object-cover rounded" />
              </div>
            </div>

            <h3 class="text-xl font-bold text-cki-dark mb-2">{{ item.title }}</h3>
            <p class="text-cki-dark opacity-80 text-sm mb-4">{{ item.description }}</p>
            
            <div class="inline-block px-3 py-1 rounded-full text-sm font-semibold" style="background-color: #99B8A3; color: #333333;">
              {{ item.category }}
            </div>
          </Card>
        </div>

        <div v-if="filteredGallery.length === 0" class="text-center py-12">
          <p class="text-cki-dark text-lg">No projects found. Please adjust your filters.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-cki-sage text-cki-dark py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Interested in Your Own Project?</h2>
        <p class="text-lg mb-8">
          Contact us to discuss how we can transform your space
        </p>
        <a 
          href="mailto:solidsurfaces@cki.ie"
          class="inline-block px-8 py-3 rounded-lg font-semibold transition-opacity hover:opacity-80"
          style="background-color: #333333; color: #F5E9E5;"
        >
          Get In Touch
        </a>
      </div>
    </section>
  </div>
</template>
