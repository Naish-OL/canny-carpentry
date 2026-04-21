<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-12 px-4 rounded-t-2xl" style="background-color: #5c4a33;">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- About -->
        <div class="space-y-4 p-4 rounded-lg" style="background-color: #8b6f47;">
          <p class="font-bold text-lg" style="color: #faf6f1;">
            About Us
          </p>
          <p class="text-sm" style="color: #e8d7c3;">
            Canny Carpentry specializes in handcrafted wooden furniture and custom design solutions for over 15 years.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4 p-4 rounded-lg" style="background-color: #8b6f47;">
          <p class="font-bold text-lg" style="color: #faf6f1;">
            Quick Links
          </p>
          <div class="flex flex-col space-y-2 text-sm">
            <p class="cursor-pointer rounded px-2 py-1 transition-all" style="color: #d4a574;" @mouseover="$event.target.style.color='#faf6f1'" @mouseout="$event.target.style.color='#d4a574'">Home</p>
            <p class="cursor-pointer rounded px-2 py-1 transition-all" style="color: #d4a574;" @mouseover="$event.target.style.color='#faf6f1'" @mouseout="$event.target.style.color='#d4a574'">Products</p>
            <p class="cursor-pointer rounded px-2 py-1 transition-all" style="color: #d4a574;" @mouseover="$event.target.style.color='#faf6f1'" @mouseout="$event.target.style.color='#d4a574'">About</p>
            <p class="cursor-pointer rounded px-2 py-1 transition-all" style="color: #d4a574;" @mouseover="$event.target.style.color='#faf6f1'" @mouseout="$event.target.style.color='#d4a574'">Contact</p>
          </div>
        </div>

        <!-- Contact -->
        <div class="space-y-4 p-4 rounded-lg" style="background-color: #8b6f47;">
          <p class="font-bold text-lg" style="color: #faf6f1;">
            Contact
          </p>
          <div class="space-y-2 text-sm" style="color: #e8d7c3;">
            <p>Email: info@cannycarpentry.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Hours: Mon-Fri 9AM-5PM</p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="my-8" style="border-color: #8b6f47;" />

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm" style="color: #d4a574;">
          &copy; {{ currentYear }} Canny Carpentry. All rights reserved.
        </p>
        <div class="flex gap-4 text-sm">
          <p class="cursor-pointer rounded px-2 py-1 transition-all" style="color: #d4a574;" @mouseover="$event.target.style.color='#faf6f1'" @mouseout="$event.target.style.color='#d4a574'">Privacy Policy</p>
          <p class="cursor-pointer rounded px-2 py-1 transition-all" style="color: #d4a574;" @mouseover="$event.target.style.color='#faf6f1'" @mouseout="$event.target.style.color='#d4a574'">Terms of Service</p>
        </div>
      </div>
    </div>
  </footer>
</template>
