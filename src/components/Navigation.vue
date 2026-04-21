<script setup>
import { ref } from 'vue'
import Toolbar from 'primevue/toolbar'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'

const sidebarVisible = ref(false)

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
  sidebarVisible.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  sidebarVisible.value = false
}
</script>

<template>
  <Toolbar class="p-4 sticky top-0 z-10 shadow-lg rounded-b-2xl" style="background-color: #8b6f47;">
    <template #start>
      <h1 
        class="text-3xl font-bold text-warm-cream cursor-pointer hover:opacity-80 transition-opacity"
        style="color: #faf6f1;"
        @click="scrollToTop"
      >
        🔨 Canny Carpentry
      </h1>
    </template>

    <template #end>
      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-6">
        <Button 
          label="Home" 
          link 
          @click="scrollToSection('landing')"
          class="p-button-text font-semibold"
          style="color: #faf6f1;"
        />
        <Button 
          label="Shop" 
          link 
          @click="scrollToSection('ecommerce')"
          class="p-button-text font-semibold"
          style="color: #faf6f1;"
        />
        <Button 
          label="Contact" 
          link 
          @click="scrollToSection('contact')"
          class="p-button-text font-semibold"
          style="color: #faf6f1;"
        />
      </div>

      <!-- Mobile Menu Button -->
      <Button 
        icon="pi pi-bars"
        class="md:hidden p-button-rounded p-button-text"
        style="color: #faf6f1;"
        @click="sidebarVisible = true"
      />
    </template>
  </Toolbar>

  <!-- Mobile Sidebar -->
  <Sidebar v-model:visible="sidebarVisible" position="left" style="background-color: #faf6f1;">
    <div class="flex flex-col gap-4 p-6">
      <Button 
        label="Home" 
        class="w-full justify-start font-semibold rounded-xl"
        style="background-color: #8b6f47; color: #faf6f1;"
        @click="scrollToSection('landing')"
      />
      <Button 
        label="Shop" 
        class="w-full justify-start font-semibold rounded-xl"
        style="background-color: #c17a4f; color: #faf6f1;"
        @click="scrollToSection('ecommerce')"
      />
      <Button 
        label="Contact" 
        class="w-full justify-start font-semibold rounded-xl"
        style="background-color: #d4a574; color: #5c4a33;"
        @click="scrollToSection('contact')"
      />
    </div>
  </Sidebar>
</template>
