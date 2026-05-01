<script setup>
import { ref } from 'vue'
import Toolbar from 'primevue/toolbar'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import CKILogo from '@/assets/CKI.png'

const router = useRouter()
const sidebarVisible = ref(false)

const navigateTo = (routeName) => {
  router.push({ name: routeName })
  sidebarVisible.value = false
}
</script>

<template>
  <Toolbar class="sticky top-0 z-20 shadow-lg w-full" style="background-color: #99B8A3; padding: 1rem 2rem;">
    <template #start>
      <div 
        class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
        @click="navigateTo('Home')"
      >
        <img 
          :src="CKILogo" 
          alt="CKI Logo" 
          class="h-10 md:h-12 w-auto"
        />
        <span class="hidden sm:inline text-lg font-semibold text-cki-dark">Kitchens & Interiors</span>
      </div>
    </template>

    <template #end>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-8 items-center">
        <router-link 
          to="/" 
          class="font-semibold text-cki-dark hover:opacity-70 transition-opacity"
        >
          Home
        </router-link>
        <router-link 
          to="/shop" 
          class="font-semibold text-cki-dark hover:opacity-70 transition-opacity"
        >
          Shop
        </router-link>
        <router-link 
          to="/about" 
          class="font-semibold text-cki-dark hover:opacity-70 transition-opacity"
        >
          About
        </router-link>
        <router-link 
          to="/gallery" 
          class="font-semibold text-cki-dark hover:opacity-70 transition-opacity"
        >
          Gallery
        </router-link>
        <router-link 
          to="/contact" 
          class="font-semibold text-cki-dark hover:opacity-70 transition-opacity"
        >
          Contact
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <Button 
        icon="pi pi-bars"
        class="md:hidden p-button-rounded p-button-text"
        style="color: #333333; width: 2.5rem; height: 2.5rem;"
        @click="sidebarVisible = true"
      />
    </template>
  </Toolbar>

  <!-- Mobile Sidebar -->
  <Sidebar 
    v-model:visible="sidebarVisible" 
    position="left" 
    class="w-64"
    style="background-color: #F5E9E5;"
  >
    <div class="flex flex-col gap-3 p-6">
      <h2 class="text-xl font-bold text-cki-dark mb-4">Menu</h2>
      
      <Button 
        label="Home" 
        class="w-full justify-start p-4 font-semibold text-left rounded-lg"
        style="background-color: #99B8A3; color: #333333;"
        @click="navigateTo('Home')"
      />
      <Button 
        label="Shop" 
        class="w-full justify-start p-4 font-semibold text-left rounded-lg"
        style="background-color: #A8A8A8; color: #333333;"
        @click="navigateTo('Shop')"
      />
      <Button 
        label="About" 
        class="w-full justify-start p-4 font-semibold text-left rounded-lg"
        style="background-color: #99B8A3; color: #333333;"
        @click="navigateTo('About')"
      />
      <Button 
        label="Gallery" 
        class="w-full justify-start p-4 font-semibold text-left rounded-lg"
        style="background-color: #A8A8A8; color: #333333;"
        @click="navigateTo('Gallery')"
      />
      <Button 
        label="Contact" 
        class="w-full justify-start p-4 font-semibold text-left rounded-lg"
        style="background-color: #99B8A3; color: #333333;"
        @click="navigateTo('Contact')"
      />
    </div>
  </Sidebar>
</template>
