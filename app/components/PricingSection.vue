<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">Simple, <span class="text-gradient">transparent pricing</span></h2>
        <p class="section-sub">Choose the plan that fits your league size. No hidden fees.</p>
      </div>

      <div class="pricing-grid" @mouseleave="activeIndex = 1">
        <div 
          v-for="(plan, i) in plans" 
          :key="i" 
          class="pricing-card animate-on-scroll" 
          :class="{ 'active': activeIndex === i }" 
          :style="`animation-delay: ${i * 0.1}s`"
          @mouseenter="activeIndex = i"
        >
          <div v-if="i === 1" class="popular-badge">Most Popular</div>
          <div class="plan-header">
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="period">/mo</span>
            </div>
            <p class="plan-desc">{{ plan.desc }}</p>
          </div>

          <ul class="features-list">
            <li v-for="feat in plan.features" :key="feat">
              <Check :size="18" color="var(--primary-color)" />
              {{ feat }}
            </li>
          </ul>

          <button class="btn" :class="activeIndex === i ? 'btn-primary' : 'btn-outline'">
            {{ plan.cta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'

const activeIndex = ref(1) // Pro is active by default

const plans = [
  {
    name: 'Starter',
    price: '0',
    desc: 'Perfect for small friendly tournaments.',
    features: [
      'Up to 8 teams',
      'Basic standings',
      'Digital match sheets',
      'Public league page'
    ],
    cta: 'Start Free',
    featured: false
  },
  {
    name: 'Pro',
    price: '29',
    desc: 'The best tools for professional organizers.',
    features: [
      'Unlimited teams',
      'Advanced statistics',
      'Payment collection',
      'Custom branding',
      'Priority support'
    ],
    cta: 'Get Started Pro',
    featured: false
  },
  {
    name: 'Enterprise',
    price: '99',
    desc: 'For large multi-city organizations.',
    features: [
      'Multiple admin roles',
      'API access',
      'White-label mobile app',
      'Dedicated manager'
    ],
    cta: 'Contact Sales',
    featured: false
  }
]
</script>

<style scoped>
.pricing {
  padding: 100px 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.pricing-card {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  padding: 48px 40px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pricing-card.active {
  transform: scale(1.05);
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 0 40px rgba(0, 245, 255, 0.1);
  z-index: 2;
}

.popular-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--gradient-primary);
  color: #0A192F;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.plan-header {
  margin-bottom: 32px;
}

h3 {
  font-size: 24px;
  margin-bottom: 16px;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 12px;
}

.currency {
  font-size: 24px;
  font-weight: 600;
}

.amount {
  font-size: 48px;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
}

.period {
  color: var(--text-secondary);
}

.plan-desc {
  color: var(--text-secondary);
  font-size: 14px;
}

.features-list {
  margin-bottom: 40px;
  flex-grow: 1;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 15px;
}

.btn {
  width: 100%;
}

@media (max-width: 992px) {
  .pricing-card.featured {
    transform: none;
  }
}
</style>
