<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-800 text-white py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- About -->
        <div class="space-y-4">
          <p class="font-bold text-lg">
            About Us
          </p>
          <p class="text-gray-300 text-sm">
            Canny Carpentry specializes in handcrafted wooden furniture and custom design solutions for over 15 years.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <p class="font-bold text-lg">
            Quick Links
          </p>
          <div class="flex flex-col space-y-2 text-gray-300 text-sm">
            <p class="cursor-pointer hover:text-white">Home</p>
            <p class="cursor-pointer hover:text-white">Products</p>
            <p class="cursor-pointer hover:text-white">About</p>
            <p class="cursor-pointer hover:text-white">Contact</p>
          </div>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <p class="font-bold text-lg">
            Contact
          </p>
          <div class="space-y-2 text-gray-300 text-sm">
            <p>Email: info@cannycarpentry.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Hours: Mon-Fri 9AM-5PM</p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="border-gray-600 my-8" />

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          &copy; {{ currentYear }} Canny Carpentry. All rights reserved.
        </p>
        <div class="flex gap-4 text-gray-400 text-sm">
          <p class="cursor-pointer hover:text-white">Privacy Policy</p>
          <p class="cursor-pointer hover:text-white">Terms of Service</p>
        </div>
      </div>
    </div>
  </footer>
</template>
