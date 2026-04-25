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
          <img src="/hero-mockup.png" alt="Trofy App Mockup" class="hero-image" />
          <div class="mockup-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Play } from 'lucide-vue-next'
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
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid rgba(0, 245, 255, 0.2);
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

.mockup-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.hero-image {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
}

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
