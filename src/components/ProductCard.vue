<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

defineProps({
  id: Number,
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  inStock: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['add-to-cart'])

const handleAddToCart = () => {
  emit('add-to-cart', {
    id: this.$props.id,
    name: this.$props.name,
    price: this.$props.price,
    quantity: 1
  })
}
</script>

<template>
  <Card class="rounded-lg shadow-sm hover:shadow-lg transition-all">
    <!-- Product Image -->
    <template #header>
      <div class="relative overflow-hidden h-48 bg-gray-100 flex items-center justify-center">
        <img
          :src="image"
          :alt="name"
          class="w-full h-full object-cover"
        />
        <Tag
          v-if="!inStock"
          severity="danger"
          value="Out of Stock"
          class="absolute top-4 right-4"
        />
      </div>
    </template>

    <!-- Product Info -->
    <template #content>
      <div class="space-y-3">
        <Tag value="category" :value="category" severity="info" />

        <h3 class="text-lg font-bold line-clamp-2">
          {{ name }}
        </h3>

        <p class="text-gray-600 text-sm line-clamp-2">
          {{ description }}
        </p>

        <div class="flex justify-between items-center pt-2">
          <h4 class="text-2xl font-bold text-blue-600">
            ${{ price.toFixed(2) }}
          </h4>
        </div>
      </div>
    </template>

    <template #footer>
      <Button
        label="Add to Cart"
        class="w-full bg-blue-600 hover:bg-blue-700"
        :disabled="!inStock"
        @click="handleAddToCart"
      />
    </template>
  </Card>
</template>
