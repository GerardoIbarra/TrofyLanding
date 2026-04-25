<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">Trusted by <span class="text-gradient">Champions</span></h2>
        <p class="section-sub">Hear from the organizers and players who have transformed their tournaments with Trofy.</p>
      </div>

      <AnimatedTestimonials :testimonials="testimonials" :autoplay="true" />
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "Trofy cut our administrative work by 70%. Generating the season schedule used to take days, now it takes seconds.",
    name: "Alex Rivera",
    designation: "Director @ Liga Premier CDMX",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop",
  },
  {
    quote: "The live standings feature is a game changer. Players love seeing their stats update instantly after every match.",
    name: "Sarah Jenkins",
    designation: "Tournament Lead @ Metro Soccer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop",
  },
  {
    quote: "Professionalism at its peak. The digital match sheets made our league look 10x more organized to sponsors.",
    name: "Marco Silva",
    designation: "Founder @ Elite Basketball League",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote: "Best investment for our academy. Managing 50+ teams across multiple age groups is finally manageable.",
    name: "Luis Hernandez",
    designation: "Head Coach @ Rayados Academy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
  }
];
</script>

<style scoped>
.testimonials {
  padding: 100px 0;
  overflow: hidden;
}

.section-header {
  margin-bottom: 40px;
}
</style>
