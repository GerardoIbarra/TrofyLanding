<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">{{ $t('features.title') }} <br/><span class="text-gradient">{{ $t('features.titleGradient') }}</span></h2>
        <p class="section-sub">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card animate-on-scroll" :style="`animation-delay: ${index * 0.1}s`">
          <div class="feature-icon">
            <component :is="feature.icon" :size="32" color="var(--primary-color)" />
          </div>
          <h3>{{ $t(feature.titleKey) }}</h3>
          <p>{{ $t(feature.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  BarChart3, 
  Calendar, 
  Smartphone, 
  Users, 
  LineChart 
} from 'lucide-vue-next'
import AppLogo from './AppLogo.vue'

const features = [
  {
    icon: BarChart3,
    titleKey: 'features.standings.title',
    descKey: 'features.standings.desc'
  },
  {
    icon: Calendar,
    titleKey: 'features.scheduling.title',
    descKey: 'features.scheduling.desc'
  },
  {
    icon: Smartphone,
    titleKey: 'features.realtime.title',
    descKey: 'features.realtime.desc'
  },
  {
    icon: AppLogo,
    titleKey: 'process.steps.create.title',
    descKey: 'process.steps.create.desc'
  },
  {
    icon: Users,
    titleKey: 'process.steps.invite.title',
    descKey: 'process.steps.invite.desc'
  },
  {
    icon: LineChart,
    titleKey: 'process.steps.play.title',
    descKey: 'process.steps.play.desc'
  }
]
</script>

<style scoped>
.features {
  padding: 100px 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 245, 255, 0.02), transparent);
}



.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  padding: 40px;
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 245, 255, 0.05) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: rgba(0, 245, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.02);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 24px;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

h3 {
  font-size: 20px;
  margin-bottom: 16px;
}

p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.6;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
