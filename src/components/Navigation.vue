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
  <Toolbar class="p-4 sticky top-0 z-10 shadow-md bg-white">
    <template #start>
      <h1 
        class="text-2xl font-bold text-blue-600 cursor-pointer"
        @click="scrollToTop"
      >
        🔨 Canny Carpentry
      </h1>
    </template>

    <template #end>
      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-4">
        <Button 
          label="Home" 
          link 
          @click="scrollToSection('landing')"
          class="p-button-text"
        />
        <Button 
          label="Shop" 
          link 
          @click="scrollToSection('ecommerce')"
          class="p-button-text"
        />
        <Button 
          label="Contact" 
          link 
          @click="scrollToSection('contact')"
          class="p-button-text"
        />
      </div>

      <!-- Mobile Menu Button -->
      <Button 
        icon="pi pi-bars"
        class="md:hidden p-button-rounded p-button-text"
        @click="sidebarVisible = true"
      />
    </template>
  </Toolbar>

  <!-- Mobile Sidebar -->
  <Sidebar v-model:visible="sidebarVisible" position="left">
    <div class="flex flex-col gap-4 p-4">
      <Button 
        label="Home" 
        class="w-full justify-start"
        @click="scrollToSection('landing')"
      />
      <Button 
        label="Shop" 
        class="w-full justify-start"
        @click="scrollToSection('ecommerce')"
      />
      <Button 
        label="Contact" 
        class="w-full justify-start"
        @click="scrollToSection('contact')"
      />
    </div>
  </Sidebar>
</template>
