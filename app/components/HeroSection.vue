<template>
  <section class="hero">
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
    
    <div class="container hero-grid">
      <div class="hero-content animate-fade-in">
        <div class="badge">Next Gen Tournament App</div>
        <h1>Elevate Your <br/><span class="text-gradient">Tournament Experience</span></h1>
        <p class="hero-sub">Trofy brings professional-grade tournament management to your pocket. Live scoring, real-time standings, and seamless league organization for any sport.</p>
        
        <div class="hero-actions">
          <button class="btn btn-primary">Start Organizing Free</button>
          <button class="btn btn-outline">
            <Play :size="16" fill="currentColor" style="margin-right: 8px" /> Watch Demo
          </button>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">50k+</span>
            <span class="stat-label">Tournaments</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">200k+</span>
            <span class="stat-label">Players</span>
          </div>
        </div>
      </div>

      <div class="hero-visual animate-fade-in" style="animation-delay: 0.2s">
        <div class="mockup-container">
          <div class="mockup-screen">
            <div class="mockup-header">
              <div class="mockup-title">League Leaderboard</div>
            </div>
            <div class="mockup-content">
              <div v-for="i in 5" :key="i" class="mockup-item">
                <div class="mockup-rank">{{ i }}</div>
                <div class="mockup-info">
                  <div class="mockup-name">Team {{ ['Warriors', 'Titans', 'Eagles', 'Wolves', 'Stars'][i-1] }}</div>
                  <div class="mockup-points">{{ 25 - i * 3 }} pts</div>
                </div>
                <TrendingUp v-if="i % 2 === 0" :size="14" color="var(--success-color)" />
                <TrendingDown v-else :size="14" color="var(--error-color)" />
              </div>
            </div>
          </div>
          <div class="mockup-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Play, TrendingUp, TrendingDown } from 'lucide-vue-next'
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(var(--nav-height) + 60px);
  padding-bottom: 100px;
  overflow: hidden;
}

.glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  opacity: 0.15;
}

.glow-1 {
  top: -100px;
  right: -50px;
  background: var(--primary-color);
}

.glow-2 {
  bottom: 0;
  left: -100px;
  background: var(--accent-color);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  background: rgba(124, 92, 252, 0.1);
  border: 1px solid rgba(124, 92, 252, 0.2);
  color: var(--primary-color);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h1 {
  font-size: clamp(40px, 5vw, 72px);
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -1px;
}

.hero-sub {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 540px;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 60px;
}

.hero-actions .icon {
  margin-right: 8px;
  font-size: 12px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 30px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  font-family: 'Outfit', sans-serif;
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
}

.stat-divider {
  width: 1px;
  height: 30px;
  background: var(--border-color);
}

/* Mockup */
.mockup-container {
  position: relative;
  width: 320px;
  margin: 0 auto;
}

.mockup-screen {
  background: var(--surface-color);
  border: 8px solid #1a1a24;
  border-radius: 40px;
  height: 560px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  position: relative;
  z-index: 1;
}

.mockup-header {
  padding: 40px 20px 20px;
  background: linear-gradient(to bottom, rgba(124, 92, 252, 0.1), transparent);
}

.mockup-title {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 20px;
}

.mockup-content {
  padding: 0 20px;
}

.mockup-item {
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color);
}

.mockup-rank {
  width: 24px;
  font-weight: 700;
  color: var(--text-secondary);
}

.mockup-info {
  flex: 1;
}

.mockup-name {
  font-size: 14px;
  font-weight: 600;
}

.mockup-points {
  font-size: 12px;
  color: var(--text-secondary);
}

.mockup-trend {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.mockup-trend.up { background: #10b981; }
.mockup-trend.down { background: #ef4444; }

.mockup-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 80px;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
}
</style>
