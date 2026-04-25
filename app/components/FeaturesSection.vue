<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="animate-on-scroll">Everything you need to <br/><span class="text-gradient">manage like a pro</span></h2>
        <p class="section-sub">Stop using spreadsheets. Start using Trofy to handle the complexity of sports logistics.</p>
      </div>

      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card animate-on-scroll" :style="`animation-delay: ${index * 0.1}s`">
          <div class="feature-icon">
            <component :is="feature.icon" :size="32" color="var(--primary-color)" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
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
  Trophy, 
  Users, 
  LineChart 
} from 'lucide-vue-next'

const features = [
  {
    icon: BarChart3,
    title: 'Live Standings',
    desc: 'Automated table generation. Points, goal difference, and head-to-head records calculated instantly.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Generate fair fixtures in seconds. Handle venue conflicts and player availability effortlessly.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    desc: 'Update scores from the field. Players and fans get instant notifications on their devices.'
  },
  {
    icon: Trophy,
    title: 'Tournament Formats',
    desc: 'Knockouts, Round Robins, Group Stages, or Custom Brackets. We support every competitive style.'
  },
  {
    icon: Users,
    title: 'Member Management',
    desc: 'Digital player passes, registration forms, and secure payment processing for league fees.'
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    desc: 'Detailed stats for teams and players. Track top scorers, clean sheets, and MVP ratings.'
  }
]
</script>

<style scoped>
.features {
  padding: 100px 0;
  background: linear-gradient(to bottom, transparent, rgba(124, 92, 252, 0.03), transparent);
}

.section-header {
  margin-bottom: 70px;
  text-align: center;
}

h2 {
  font-size: clamp(32px, 4vw, 48px);
  margin-bottom: 20px;
}

.section-sub {
  color: var(--text-secondary);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
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
  background: linear-gradient(135deg, rgba(124, 92, 252, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: rgba(124, 92, 252, 0.3);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
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
