<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">{{ $t('testimonials.title') }} <span class="text-gradient">{{ $t('testimonials.titleGradient') }}</span></h2>
        <p class="section-sub">{{ $t('testimonials.subtitle') }}</p>
      </div>

      <AnimatedTestimonials :testimonials="computedTestimonials" :autoplay="true" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const computeTestimonials = computed(() => [
  {
    quote: t('testimonials.quotes.alex'),
    name: "Alex Rivera",
    designation: "Director @ Liga Premier CDMX",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop",
  },
  {
    quote: t('testimonials.quotes.sarah'),
    name: "Sarah Jenkins",
    designation: "Tournament Lead @ Metro Soccer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop",
  },
  {
    quote: t('testimonials.quotes.marco'),
    name: "Marco Silva",
    designation: "Founder @ Elite Basketball League",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote: t('testimonials.quotes.luis'),
    name: "Luis Hernandez",
    designation: "Head Coach @ Rayados Academy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
  }
]);

const computedTestimonials = computeTestimonials;
</script>

<style scoped>
.testimonials {
  padding: 100px 0;
  overflow: hidden;
}


</style>
