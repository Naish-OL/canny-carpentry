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
  <Card class="rounded-2xl shadow-lg hover:shadow-2xl transition-all" style="background-color: #fff9f5; border: 2px solid #e8d7c3;">
    <!-- Product Image -->
    <template #header>
      <div class="relative overflow-hidden h-48 flex items-center justify-center rounded-t-2xl" style="background-color: #faf6f1;">
        <img
          :src="image"
          :alt="name"
          class="w-full h-full object-cover"
        />
        <Tag
          v-if="!inStock"
          severity="danger"
          value="Out of Stock"
          class="absolute top-4 right-4 rounded-lg"
          style="background-color: #c17a4f; color: #faf6f1;"
        />
      </div>
    </template>

    <!-- Product Info -->
    <template #content>
      <div class="space-y-3">
        <Tag 
          :value="category" 
          class="rounded-lg"
          style="background-color: #d4a574; color: #faf6f1;"
        />

        <h3 class="text-lg font-bold line-clamp-2" style="color: #8b6f47;">
          {{ name }}
        </h3>

        <p class="text-sm line-clamp-2" style="color: #5c4a33;">
          {{ description }}
        </p>

        <div class="flex justify-between items-center pt-2">
          <h4 class="text-2xl font-bold" style="color: #c17a4f;">
            ${{ price.toFixed(2) }}
          </h4>
        </div>
      </div>
    </template>

    <template #footer>
      <Button
        label="Add to Cart"
        class="w-full rounded-lg font-bold"
        style="background-color: #8b6f47; color: #faf6f1; border: none;"
        :disabled="!inStock"
        @click="handleAddToCart"
      />
    </template>
  </Card>
</template>
