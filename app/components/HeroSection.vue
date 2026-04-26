<template>
  <section class="hero">
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
    
    <div class="container hero-grid">
      <div class="hero-content animate-fade-in">
        <div class="badge">{{ $t('hero.badge') }}</div>
        <h1>{{ $t('hero.title') }} <br/><span class="text-gradient">{{ $t('hero.titleGradient') }}</span></h1>
        <p class="hero-sub">{{ $t('hero.subtitle') }}</p>
        
        <div class="hero-actions">
          <button class="btn btn-primary">{{ $t('hero.ctaPrimary') }}</button>
          <button class="btn btn-outline">
            <Play :size="16" fill="currentColor" style="margin-right: 8px" /> {{ $t('hero.ctaSecondary') }}
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
        <div class="mockup-container video-mockup">
          <iframe 
            :src="`/trofi-video.html?lang=${locale}`" 
            frameborder="0" 
            class="hero-video-frame"
            allow="autoplay"
          ></iframe>
          <div class="mockup-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Play } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 80px;
}

.hero-content {
  display: flex;
  flex-direction: column;
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
  font-size: clamp(40px, 8vw, 84px);
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -2px;
}

.hero-sub {
  font-size: 20px;
  color: var(--text-secondary);
  max-width: 700px;
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
  gap: 40px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
}

.hero-visual {
  width: 100%;
  max-width: 1100px;
}

.mockup-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: #000;
  box-shadow: 0 40px 100px rgba(0,0,0,0.6);
}

.hero-video-frame {
  width: 100%;
  height: 100%;
  border: none;
}

.mockup-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
  z-index: -1;
  pointer-events: none;
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-actions .btn {
    width: 100%;
  }

  .hero-stats {
    gap: 20px;
  }
}
</style>
