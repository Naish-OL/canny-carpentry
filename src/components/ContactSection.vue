<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
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
  <div id="contact" class="py-12 md:py-16 px-4 rounded-2xl" style="background-color: #fff9f5;">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 rounded-2xl p-6" style="color: #c17a4f;">
        Get in Touch
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8 p-6 rounded-2xl shadow-lg" style="background-color: #faf6f1;">
          <div>
            <h3 class="text-xl font-bold mb-4 rounded-lg p-3" style="color: #faf6f1; background-color: #8b6f47;">
              Contact Information
            </h3>
            <div class="space-y-4">
              <div class="p-3 rounded-lg" style="background-color: #fff9f5; border-left: 4px solid #c17a4f;">
                <p class="font-bold mb-1" style="color: #8b6f47;">Email</p>
                <p style="color: #5c4a33;">info@cannycarpentry.com</p>
              </div>
              <div class="p-3 rounded-lg" style="background-color: #fff9f5; border-left: 4px solid #c17a4f;">
                <p class="font-bold mb-1" style="color: #8b6f47;">Phone</p>
                <p style="color: #5c4a33;">+1 (555) 123-4567</p>
              </div>
              <div class="p-3 rounded-lg" style="background-color: #fff9f5; border-left: 4px solid #c17a4f;">
                <p class="font-bold mb-1" style="color: #8b6f47;">Address</p>
                <p style="color: #5c4a33;">
                  123 Woodcraft Lane<br>
                  Carpentry City, CA 90210
                </p>
              </div>
              <div class="p-3 rounded-lg" style="background-color: #fff9f5; border-left: 4px solid #c17a4f;">
                <p class="font-bold mb-1" style="color: #8b6f47;">Hours</p>
                <p style="color: #5c4a33;">
                  Monday - Friday: 9AM - 5PM<br>
                  Saturday: 10AM - 3PM<br>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="space-y-6 p-6 rounded-2xl shadow-lg" style="background-color: #faf6f1;">
          <Message 
            v-if="submitStatus === 'success'"
            severity="success" 
            text="Thank you! We'll get back to you soon."
            class="w-full rounded-lg"
          />

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block font-bold mb-2 rounded" style="color: #8b6f47;">
                Full Name
              </label>
              <InputText
                id="name"
                v-model="formData.name"
                placeholder="John Doe"
                class="w-full rounded-lg"
                style="background-color: #fff9f5; border: 2px solid #e8d7c3; color: #5c4a33;"
                required
              />
            </div>

            <div>
              <label for="email" class="block font-bold mb-2 rounded" style="color: #8b6f47;">
                Email
              </label>
              <InputText
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="john@example.com"
                class="w-full rounded-lg"
                style="background-color: #fff9f5; border: 2px solid #e8d7c3; color: #5c4a33;"
                required
              />
            </div>

            <div>
              <label for="phone" class="block font-bold mb-2 rounded" style="color: #8b6f47;">
                Phone Number
              </label>
              <InputText
                id="phone"
                v-model="formData.phone"
                placeholder="+1 (555) 123-4567"
                class="w-full rounded-lg"
                style="background-color: #fff9f5; border: 2px solid #e8d7c3; color: #5c4a33;"
              />
            </div>

            <div>
              <label for="message" class="block font-bold mb-2 rounded" style="color: #8b6f47;">
                Message
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                placeholder="Tell us about your project..."
                rows="5"
                class="w-full px-3 py-2 rounded-lg"
                style="background-color: #fff9f5; border: 2px solid #e8d7c3; color: #5c4a33;"
                required
              />
            </div>

            <Button
              type="submit"
              label="Send Message"
              class="w-full font-bold rounded-lg"
              style="background-color: #c17a4f; color: #faf6f1; border: none;"
              :loading="isSubmitting"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
