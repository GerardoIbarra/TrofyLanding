<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">Trusted by <span class="text-gradient">Champions</span></h2>
        <p class="section-sub">Join thousands of organizers who have upgraded their league management with Trofy.</p>
      </div>

      <div class="testimonials-grid">
        <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card animate-on-scroll" :style="`animation-delay: ${i * 0.1}s`">
          <div class="quote-icon">"</div>
          <p class="quote-text">{{ t.quote }}</p>
          <div class="user-info">
            <div class="avatar">{{ t.name.charAt(0) }}</div>
            <div>
              <div class="name">{{ t.name }}</div>
              <div class="role">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Carlos Rodriguez',
    role: 'League Director, MX Soccer',
    quote: 'Trofy saved us at least 10 hours a week in administrative work. The automatic standings are a game changer.'
  },
  {
    name: 'Sarah Chen',
    role: 'Tournament MVP',
    quote: 'Being able to see my stats and upcoming matches in real-time makes the competition feel much more professional.'
  },
  {
    name: 'Mike Thompson',
    role: 'Regional Coordinator',
    quote: 'The payment integration is seamless. We no longer have to chase captains for registration fees.'
  }
]
</script>

<style scoped>
.testimonials {
  padding: 100px 0;
  background: rgba(0, 245, 255, 0.01);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.testimonial-card {
  background: var(--surface-color);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  position: relative;
}

.quote-icon {
  font-size: 60px;
  font-family: 'serif';
  color: var(--primary-color);
  opacity: 0.2;
  position: absolute;
  top: 20px;
  left: 30px;
  line-height: 1;
}

.quote-text {
  position: relative;
  z-index: 1;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #0A192F;
}

.name {
  font-weight: 600;
  font-size: 15px;
}

.role {
  font-size: 13px;
  color: var(--text-secondary);
}
</style>
