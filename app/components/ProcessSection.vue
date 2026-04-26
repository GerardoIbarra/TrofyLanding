<template>
  <section id="how-it-works" class="process">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">{{ $t('process.title') }} <br/><span class="text-gradient">{{ $t('process.titleGradient') }}</span></h2>
      </div>

      <div class="process-grid">
        <div v-for="(step, index) in steps" :key="index" class="process-step animate-on-scroll" :style="`animation-delay: ${index * 0.15}s`">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-icon">
            <component :is="step.icon" :size="40" color="var(--primary-color)" />
          </div>
          <h3>{{ $t(step.titleKey) }}</h3>
          <p>{{ $t(step.descKey) }}</p>
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
    titleKey: 'process.steps.create.title',
    descKey: 'process.steps.create.desc'
  },
  {
    icon: UserPlus,
    titleKey: 'process.steps.invite.title',
    descKey: 'process.steps.invite.desc'
  },
  {
    icon: Trophy,
    titleKey: 'process.steps.play.title',
    descKey: 'process.steps.play.desc'
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
