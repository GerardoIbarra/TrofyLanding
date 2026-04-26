<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-card glass animate-on-scroll">
        <div class="cta-content">
          <h2>{{ $t('cta.title') }} <br/><span class="text-gradient">{{ $t('cta.titleGradient') }}</span></h2>
          <p>{{ $t('cta.subtitle') }}</p>
          <div class="cta-buttons">
            <button class="btn btn-primary">{{ $t('cta.primary') }}</button>
            <button class="btn btn-outline">{{ $t('cta.secondary') }}</button>
          </div>
        </div>
        <div class="cta-decoration">
          <div class="trophy-glow">
            <AppLogo :width="150" :height="150" color="var(--primary-color)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// AppLogo is auto-imported
</script>

<style scoped>
.cta-section {
  padding: 100px 0;
}

.cta-card {
  padding: 80px 60px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  overflow: hidden;
  position: relative;
}

.cta-content {
  flex: 1;
  z-index: 1;
}

h2 {
  font-size: clamp(32px, 5vw, 42px);
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
}

.cta-decoration {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trophy-glow {
  font-size: 120px;
  filter: drop-shadow(0 0 30px var(--primary-glow));
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 992px) {
  .cta-card {
    flex-direction: column;
    text-align: center;
    padding: 60px 40px;
  }
  
  .cta-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .cta-buttons {
    justify-content: center;
  }
}
</style>
