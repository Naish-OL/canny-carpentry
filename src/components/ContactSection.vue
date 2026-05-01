<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import { apiClient, type CreateQuotePayload } from '@/services/api'

const formData = ref<CreateQuotePayload>({
  customer_name: '',
  email: '',
  phone: '',
  job_details: '',
  job_type: 'carpentry'
})

const loading = ref(false)
const submitted = ref(false)
const error = ref<string | null>(null)

const handleSubmit = async () => {
  loading.value = true
  error.value = null
  try {
    await apiClient.createQuote(formData.value)
    submitted.value = true
    // Reset form
    formData.value = {
      customer_name: '',
      email: '',
      phone: '',
      job_details: '',
      job_type: 'carpentry'
    }
    // Hide success message after 3 seconds
    setTimeout(() => {
      submitted.value = false
    }, 3000)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to submit quote'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-amber-900 mb-2 text-center">
        Get a Custom Quote
      </h2>
      <p class="text-center text-amber-700 mb-12">
        Tell us about your carpentry project
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-6">
          <Card class="bg-white rounded-3xl border-2 border-amber-200">
            <template #content>
              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-amber-900">Contact Information</h3>
                <div class="space-y-3">
                  <p class="text-amber-700">
                    <strong>Phone:</strong> (714) 555-WOOD
                  </p>
                  <p class="text-amber-700">
                    <strong>Email:</strong> hello@cannycarpentry.com
                  </p>
                  <p class="text-amber-700">
                    <strong>Address:</strong> Orange County, CA
                  </p>
                  <p class="text-amber-700">
                    <strong>Hours:</strong> Mon-Fri 8am-6pm PST
                  </p>
                </div>
              </div>
            </template>
          </Card>

          <Card class="bg-white rounded-3xl border-2 border-amber-200">
            <template #content>
              <div class="space-y-3">
                <h3 class="text-2xl font-bold text-amber-900">We Specialize In</h3>
                <ul class="space-y-2 text-amber-700">
                  <li>✓ Custom Kitchen Cabinets</li>
                  <li>✓ Built-in Shelving</li>
                  <li>✓ Doors & Frames</li>
                  <li>✓ Furniture Design</li>
                  <li>✓ Restoration Work</li>
                </ul>
              </div>
            </template>
          </Card>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-3xl border-2 border-amber-200 p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Success Message -->
            <div
              v-if="submitted"
              class="p-4 bg-green-100 border-2 border-green-500 rounded-lg text-green-700"
            >
              ✓ Quote request submitted! We'll be in touch soon.
            </div>

            <!-- Error Message -->
            <div
              v-if="error"
              class="p-4 bg-red-100 border-2 border-red-500 rounded-lg text-red-700"
            >
              {{ error }}
            </div>

            <!-- Name -->
            <div>
              <label class="block text-amber-900 font-semibold mb-2">Full Name</label>
              <input
                v-model="formData.customer_name"
                type="text"
                placeholder="John Smith"
                required
                class="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-700 bg-amber-50"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-amber-900 font-semibold mb-2">Email</label>
              <input
                v-model="formData.email"
                type="email"
                placeholder="john@example.com"
                required
                class="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-700 bg-amber-50"
              />
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-amber-900 font-semibold mb-2">Phone (Optional)</label>
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="(714) 555-1234"
                class="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-700 bg-amber-50"
              />
            </div>

            <!-- Job Type -->
            <div>
              <label class="block text-amber-900 font-semibold mb-2">Project Type</label>
              <select
                v-model="formData.job_type"
                class="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-700 bg-amber-50 text-amber-900"
              >
                <option value="carpentry">General Carpentry</option>
                <option value="kitchen">Kitchen Cabinets</option>
              </select>
            </div>

            <!-- Job Details -->
            <div>
              <label class="block text-amber-900 font-semibold mb-2">Project Details</label>
              <textarea
                v-model="formData.job_details"
                placeholder="Describe your project, dimensions, materials, and timeline..."
                required
                rows="5"
                class="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-700 bg-amber-50 resize-none"
              />
            </div>

            <!-- Submit Button -->
            <Button
              type="submit"
              label="Get Quote"
              :loading="loading"
              class="w-full"
              style="background-color: #8b6f47; color: white; font-weight: bold; padding: 12px"
              @click="handleSubmit"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>