<script setup>
import Card from 'primevue/card'
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-cki-sage text-cki-dark py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">About Canny Kitchens & Interiors</h1>
        <p class="text-lg opacity-90">Crafting beautiful, functional spaces since 2015</p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <Card class="shadow-lg border-0" style="background-color: #F5E9E5;">
          <h2 class="text-3xl font-bold text-cki-dark mb-6">Our Story</h2>
          <div class="text-cki-dark space-y-4 leading-relaxed">
            <p>
              Canny Kitchens & Interiors was founded with a simple mission: to create beautiful, 
              functional spaces that enhance your home and lifestyle. Located in Kilmaine, Co. Mayo, 
              we've been serving clients throughout Ireland with exceptional craftsmanship and attention to detail.
            </p>
            <p>
              With years of experience in custom kitchen design, interior planning, and premium surface 
              installation, our team brings expertise and passion to every project we undertake.
            </p>
            <p>
              We believe that great design starts with understanding your needs, preferences, and vision. 
              That's why we work closely with each client to ensure their project exceeds expectations.
            </p>
          </div>
        </Card>
      </div>
    </section>

    <!-- Services Highlight -->
    <section class="bg-cki-beige py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-cki-dark mb-12 text-center">What We Offer</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Custom Kitchens -->
          <Card class="shadow-lg border-0" style="background-color: white;">
            <h3 class="text-2xl font-bold text-cki-sage mb-4">Custom Kitchens</h3>
            <p class="text-cki-dark space-y-3">
              <span class="block">From concept to completion, we design and install bespoke kitchens tailored to your lifestyle:</span>
              <span class="block">✓ Space planning and design</span>
              <span class="block">✓ Cabinet craftsmanship</span>
              <span class="block">✓ Premium countertops</span>
              <span class="block">✓ Professional installation</span>
            </p>
          </Card>

          <!-- Interior Design -->
          <Card class="shadow-lg border-0" style="background-color: white;">
            <h3 class="text-2xl font-bold text-cki-sage mb-4">Interior Design</h3>
            <p class="text-cki-dark space-y-3">
              <span class="block">Transform your spaces with expert interior design services:</span>
              <span class="block">✓ Design consultation</span>
              <span class="block">✓ Color and material selection</span>
              <span class="block">✓ Layout optimization</span>
              <span class="block">✓ Full project coordination</span>
            </p>
          </Card>

          <!-- Premium Surfaces -->
          <Card class="shadow-lg border-0" style="background-color: white;">
            <h3 class="text-2xl font-bold text-cki-sage mb-4">Premium Surfaces</h3>
            <p class="text-cki-dark space-y-3">
              <span class="block">We specialize in high-quality surface materials:</span>
              <span class="block">✓ Wood surfaces and finishes</span>
              <span class="block">✓ Ceramic and specialty tiles</span>
              <span class="block">✓ Solid acrylic countertops</span>
              <span class="block">✓ Seamless installations</span>
            </p>
          </Card>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="bg-cki-sage text-cki-dark py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
        <div class="space-y-4">
          <p class="text-lg">
            <strong>Email:</strong>
            <a href="mailto:solidsurfaces@cki.ie" class="text-cki-dark hover:opacity-70 transition-opacity">
              solidsurfaces@cki.ie
            </a>
          </p>
          <p class="text-lg">
            <strong>Phone:</strong>
            <a href="tel:+353879458836" class="text-cki-dark hover:opacity-70 transition-opacity">
              +353 87 945 8836
            </a>
          </p>
          <p class="text-lg">
            <strong>Location:</strong> Kilmaine, Co. Mayo, Ireland
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
