<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputTextarea from 'primevue/inputtextarea'
import Message from 'primevue/message'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submitStatus = ref(null)
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  // Simulate form submission
  setTimeout(() => {
    submitStatus.value = 'success'
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    isSubmitting.value = false

    // Clear success message after 3 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 3000)
  }, 1000)
}
</script>

<template>
  <div id="contact" class="py-12 md:py-16 px-4 bg-white">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
        Get in Touch
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-blue-600">
              Contact Information
            </h3>
            <div class="space-y-4">
              <div>
                <p class="font-bold mb-1">Email</p>
                <p class="text-gray-600">info@cannycarpentry.com</p>
              </div>
              <div>
                <p class="font-bold mb-1">Phone</p>
                <p class="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <p class="font-bold mb-1">Address</p>
                <p class="text-gray-600">
                  123 Woodcraft Lane<br>
                  Carpentry City, CA 90210
                </p>
              </div>
              <div>
                <p class="font-bold mb-1">Hours</p>
                <p class="text-gray-600">
                  Monday - Friday: 9AM - 5PM<br>
                  Saturday: 10AM - 3PM<br>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="space-y-6">
          <Message 
            v-if="submitStatus === 'success'"
            severity="success" 
            text="Thank you! We'll get back to you soon."
            class="w-full"
          />

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block font-bold mb-2 text-gray-700">
                Full Name
              </label>
              <InputText
                id="name"
                v-model="formData.name"
                placeholder="John Doe"
                class="w-full"
                required
              />
            </div>

            <div>
              <label for="email" class="block font-bold mb-2 text-gray-700">
                Email
              </label>
              <InputText
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="john@example.com"
                class="w-full"
                required
              />
            </div>

            <div>
              <label for="phone" class="block font-bold mb-2 text-gray-700">
                Phone Number
              </label>
              <InputText
                id="phone"
                v-model="formData.phone"
                placeholder="+1 (555) 123-4567"
                class="w-full"
              />
            </div>

            <div>
              <label for="message" class="block font-bold mb-2 text-gray-700">
                Message
              </label>
              <InputTextarea
                id="message"
                v-model="formData.message"
                placeholder="Tell us about your project..."
                rows="5"
                class="w-full"
                required
              />
            </div>

            <Button
              type="submit"
              label="Send Message"
              class="w-full bg-blue-600 hover:bg-blue-700 font-bold"
              :loading="isSubmitting"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
