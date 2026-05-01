<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-cki-sage text-cki-dark py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- About -->
        <div class="space-y-4">
          <h3 class="font-bold text-lg">Canny Kitchens & Interiors</h3>
          <p class="text-sm opacity-80">
            Creating beautiful, functional spaces with custom kitchens, interior design, and premium surfaces.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="font-bold text-lg">Quick Links</h3>
          <nav class="flex flex-col space-y-2 text-sm">
            <router-link 
              to="/"
              class="hover:opacity-70 transition-opacity"
            >
              Home
            </router-link>
            <router-link 
              to="/shop"
              class="hover:opacity-70 transition-opacity"
            >
              Shop
            </router-link>
            <router-link 
              to="/gallery"
              class="hover:opacity-70 transition-opacity"
            >
              Gallery
            </router-link>
            <router-link 
              to="/contact"
              class="hover:opacity-70 transition-opacity"
            >
              Contact
            </router-link>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h3 class="font-bold text-lg">Contact</h3>
          <div class="space-y-2 text-sm">
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:solidsurfaces@cki.ie" class="hover:opacity-70 transition-opacity">
                solidsurfaces@cki.ie
              </a>
            </p>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+353879458836" class="hover:opacity-70 transition-opacity">
                +353 87 945 8836
              </a>
            </p>
            <p>
              <strong>Location:</strong><br />
              Kilmaine, Co. Mayo, Ireland
            </p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-cki-dark border-opacity-20 my-8"></div>

      <!-- Copyright & Links -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {{ currentYear }} Canny Kitchens & Interiors. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:opacity-70 transition-opacity">Privacy Policy</a>
          <a href="#" class="hover:opacity-70 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
