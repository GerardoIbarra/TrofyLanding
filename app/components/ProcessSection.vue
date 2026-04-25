<template>
  <section id="how-it-works" class="process">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">From kickoff to final <br/><span class="text-gradient">in three easy steps</span></h2>
      </div>

      <div class="process-grid">
        <div v-for="(step, index) in steps" :key="index" class="process-step animate-on-scroll" :style="`animation-delay: ${index * 0.15}s`">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-icon">
            <component :is="step.icon" :size="40" color="var(--primary-color)" />
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PlusCircle, UserPlus, Trophy } from 'lucide-vue-next'

const steps = [
  {
    icon: PlusCircle,
    title: 'Create Your League',
    desc: 'Set your rules, select your format, and define your schedule in under 2 minutes.'
  },
  {
    icon: UserPlus,
    title: 'Invite Teams',
    desc: 'Share a unique link with captains. They register their players and pay fees digitally.'
  },
  {
    icon: Trophy,
    title: 'Play & Track',
    desc: 'Update scores live. The table, stats, and brackets update automatically for everyone.'
  }
]
</script>

<style scoped>
.process {
  padding: 100px 0;
  position: relative;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  position: relative;
  margin-top: 60px;
}

.process-grid::after {
  content: '';
  position: absolute;
  top: 40%;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--border-color), transparent);
  z-index: 0;
}

.process-step {
  text-align: center;
  position: relative;
  z-index: 1;
  background: var(--bg-color);
  padding: 40px 20px;
}

.step-number {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 80px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  z-index: -1;
  font-family: 'Outfit', sans-serif;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  transition: all 0.3s ease;
}

.process-step:hover .step-icon {
  border-color: var(--primary-color);
  box-shadow: 0 0 20px var(--primary-glow);
  transform: translateY(-5px);
}

h3 {
  font-size: 24px;
  margin-bottom: 16px;
}

p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 992px) {
  .process-grid::after {
    display: none;
  }
}
</style>
