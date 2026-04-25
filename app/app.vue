<template>
  <div class="app-wrapper">
    <AppNavbar />
    
    <main>
      <HeroSection />
      <HyperframeDemo />
      <ProcessSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Simple intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style>
/* Custom cursor or other global app styles if needed */
.app-wrapper {
  overflow-x: hidden;
}
</style>
