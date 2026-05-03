<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import { useRouter } from "vue-router";

const router = useRouter();

const services = [
  {
    title: "Custom Kitchens",
    description:
      "Bespoke kitchen design and installation tailored to your lifestyle. From classic wood finishes to modern laminates and acrylics.",
    icon: "pi pi-hammer",
    routeName: "ServiceCustomKitchens", // adjust to your actual route name
  },
  {
    title: "Interior Design",
    description:
      "Professional interior styling and space planning. We handle everything from concept to the perfect tile, color palette, and décor.",
    icon: "pi pi-palette",
    routeName: "ServiceInteriorDesign",
  },
  {
    title: "Premium Surfaces",
    description:
      "Expert installation of wood, tile, and solid acrylic countertops and surrounds. Seamless beauty built to last.",
    icon: "pi pi-image",
    routeName: "ServicePremiumSurfaces",
  },
];

const navigateTo = (routeName) => {
  if (routeName) router.push({ name: routeName });
};
</script>

<style scoped>
.service-card-wrapper {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card-wrapper:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

<template>
  <!-- Hero Section -->
  <section class="bg-cki-sage text-cki-dark py-16 md:py-24 px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">Canny Kitchens & Interiors</h1>
      <p class="text-lg md:text-xl mb-8 opacity-90">
        Custom kitchens, interior design, and premium surfaces for your home
      </p>
      <Button
        label="Explore Our Work"
        class="font-bold text-lg"
        style="
          background-color: #333333;
          color: #f5e9e5;
          padding: 0.75rem 2rem;
          border-radius: 2rem;
          border: none;
        "
        @click="router.push({ name: 'Gallery' })"
      />
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-16 md:py-24 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-cki-dark">Our Services</h2>
        <p class="mt-4 text-lg text-cki-dark opacity-75 max-w-2xl mx-auto">
          We combine craftsmanship and creativity to bring your vision to life. Explore
          what we do best.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-card-wrapper cursor-pointer transition-all duration-300 border-0"
          :style="{ borderRadius: '1rem' }"
          @click="navigateTo(service.routeName)"
        >
          <Card
            class="service-card border-0 h-full"
            :style="{ backgroundColor: '#F5E9E5', borderRadius: '1rem' }"
          >
            <template #header>
              <div class="flex justify-center pt-10 pb-4">
                <div
                  class="w-20 h-20 rounded-full flex items-center justify-center shadow-md"
                  style="background-color: #99b8a3"
                >
                  <i :class="service.icon" class="text-3xl" style="color: #ffffff"></i>
                </div>
              </div>
            </template>

            <template #content>
              <div class="text-center px-4">
                <h3 class="text-2xl font-bold text-cki-dark mb-4">
                  {{ service.title }}
                </h3>
                <p class="text-cki-dark opacity-80 leading-relaxed">
                  {{ service.description }}
                </p>
                <Button
                  label="Learn More"
                  class="p-button-text font-semibold mt-6"
                  style="color: #333333"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  @click.stop
                />
              </div>
            </template>
          </Card>
        </div>
      </div>

    </div>
  </section>

  <!-- Materials Section -->
  <section class="py-16 md:py-24 px-4 bg-cki-beige">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-cki-dark mb-16">
        Materials We Specialize In
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="bg-white rounded-lg p-8 shadow-md border-l-4"
          style="border-color: #99b8a3"
        >
          <h3 class="text-2xl font-bold text-cki-dark mb-4">Wood</h3>
          <p class="text-cki-dark opacity-80">
            Quality wood surfaces and finishes for a warm, classic aesthetic
          </p>
        </div>

        <div
          class="bg-white rounded-lg p-8 shadow-md border-l-4"
          style="border-color: #a8a8a8"
        >
          <h3 class="text-2xl font-bold text-cki-dark mb-4">Tile</h3>
          <p class="text-cki-dark opacity-80">
            Ceramic and specialty tile options for durability and style
          </p>
        </div>

        <div
          class="bg-white rounded-lg p-8 shadow-md border-l-4"
          style="border-color: #99b8a3"
        >
          <h3 class="text-2xl font-bold text-cki-dark mb-4">Solid Acrylic</h3>
          <p class="text-cki-dark opacity-80">
            Premium countertops and shower surrounds with seamless elegance
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-cki-sage text-cki-dark py-16 md:py-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
      <p class="text-lg mb-8 opacity-90">
        Contact us today to discuss your custom kitchen or interior design project
      </p>
      <Button
        label="Get In Touch"
        class="font-bold text-lg"
        style="
          background-color: #333333;
          color: #f5e9e5;
          padding: 0.75rem 2rem;
          border-radius: 2rem;
          border: none;
        "
        @click="router.push({ name: 'Contact' })"
      />
    </div>
  </section>
</template>
