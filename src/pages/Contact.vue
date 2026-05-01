<script setup>
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  projectType: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  // In a real app, this would send data to the backend
  console.log('Form submitted:', formData.value)
  submitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    submitted.value = false
    formData.value = { name: '', email: '', phone: '', message: '', projectType: '' }
  }, 3000)
}
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <section class="bg-cki-sage text-cki-dark py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-lg opacity-90">
          Get in touch to discuss your custom kitchen, interior design, or surface project
        </p>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl font-bold text-cki-dark mb-8">Get In Touch</h2>
          
          <Card class="shadow-lg border-0 mb-6" style="background-color: #F5E9E5;">
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-bold text-cki-sage mb-2">Email</h3>
                <a 
                  href="mailto:solidsurfaces@cki.ie"
                  class="text-cki-dark hover:opacity-70 transition-opacity text-lg"
                >
                  solidsurfaces@cki.ie
                </a>
              </div>

              <div class="border-t border-cki-gray pt-6">
                <h3 class="text-lg font-bold text-cki-sage mb-2">Phone</h3>
                <a 
                  href="tel:+353879458836"
                  class="text-cki-dark hover:opacity-70 transition-opacity text-lg"
                >
                  +353 87 945 8836
                </a>
              </div>

              <div class="border-t border-cki-gray pt-6">
                <h3 class="text-lg font-bold text-cki-sage mb-2">Location</h3>
                <p class="text-cki-dark">
                  Kilmaine<br />
                  Co. Mayo<br />
                  Ireland
                </p>
              </div>

              <div class="border-t border-cki-gray pt-6">
                <h3 class="text-lg font-bold text-cki-sage mb-4">Business Hours</h3>
                <p class="text-cki-dark space-y-2">
                  <span class="block">Monday - Friday: 9:00 AM - 5:00 PM</span>
                  <span class="block">Saturday: By appointment</span>
                  <span class="block">Sunday: Closed</span>
                </p>
              </div>
            </div>
          </Card>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-bold text-cki-dark mb-8">Send Us a Message</h2>
          
          <Card class="shadow-lg border-0" style="background-color: #F5E9E5;">
            <div v-if="submitted" class="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              Thank you for your message! We'll be in touch soon.
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label class="block text-sm font-semibold text-cki-dark mb-2">Name</label>
                <InputText
                  v-model="formData.name"
                  placeholder="Your Name"
                  class="w-full"
                  required
                />
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-semibold text-cki-dark mb-2">Email</label>
                <InputText
                  v-model="formData.email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full"
                  required
                />
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-sm font-semibold text-cki-dark mb-2">Phone</label>
                <InputText
                  v-model="formData.phone"
                  placeholder="+353 87 945 8836"
                  class="w-full"
                />
              </div>

              <!-- Project Type -->
              <div>
                <label class="block text-sm font-semibold text-cki-dark mb-2">Project Type</label>
                <select 
                  v-model="formData.projectType"
                  class="w-full px-3 py-2 border border-cki-gray rounded-lg text-cki-dark focus:outline-none focus:border-cki-sage"
                >
                  <option value="">Select a project type</option>
                  <option value="kitchen">Custom Kitchen</option>
                  <option value="interior">Interior Design</option>
                  <option value="surfaces">Premium Surfaces</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-semibold text-cki-dark mb-2">Message</label>
                <Textarea
                  v-model="formData.message"
                  placeholder="Tell us about your project..."
                  rows="5"
                  class="w-full"
                  required
                />
              </div>

              <!-- Submit Button -->
              <Button
                type="submit"
                label="Send Message"
                class="w-full p-button-lg"
                style="background-color: #99B8A3; color: #333333;"
              />
            </form>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
