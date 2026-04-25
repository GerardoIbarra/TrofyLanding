<template>
  <section class="hyperframe-section">
    <div class="container">
      <div class="content-wrapper glass">
        <div class="text-content">
          <div class="badge">Interactive Experience</div>
          <h2>Meet your <span class="text-gradient">Virtual Assistant</span></h2>
          <p>Click the interactive demo to see how Trofy can automate your specific tournament needs in real-time.</p>
          
          <div class="features-mini">
            <div class="mini-item">
              <Icon name="lucide:sparkles" class="text-cyan-400" />
              <span>AI-Guided Onboarding</span>
            </div>
            <div class="mini-item">
              <Icon name="lucide:mouse-pointer-2" class="text-cyan-400" />
              <span>Interactive Decision Making</span>
            </div>
          </div>
        </div>

        <div class="demo-container">
          <!-- Hyperframe Integration -->
          <div class="hyperframe-wrapper">
            <iframe 
              src="/trofy-video.html" 
              class="size-full border-none"
              allow="autoplay"
            ></iframe>

            <div class="absolute inset-0 pointer-events-none">
              <!-- Overlay opcional si quieres efectos encima -->
            </div>
            
            <!-- Cuando tengas tu ID de HeyGen, descomenta esto: -->
            <!-- <script src="https://hyperframes.heygen.com/sdk.js" async></script> -->
            <!-- <hyper-frame project-id="TU_ID_AQUI" class="size-full" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hyperframe-section {
  padding: 80px 0;
  background: radial-gradient(circle at top right, rgba(0, 245, 255, 0.05), transparent 40%);
}

.content-wrapper {
  display: grid;
  grid-template-columns: 0.8fr 1.4fr;
  gap: 40px;
  padding: 80px 60px;
  border-radius: 40px;
  align-items: center;
}

.text-content h2 {
  font-size: 42px;
  margin: 20px 0;
  line-height: 1.2;
}

.text-content p {
  color: var(--text-secondary);
  font-size: 18px;
  margin-bottom: 32px;
}

.badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(0, 245, 255, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.features-mini {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mini-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
}

.demo-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
}

.hyperframe-wrapper {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 24px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  position: relative;
}

.placeholder-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.placeholder-content p {
  font-weight: 600;
  margin: 0;
}

.pulsing-circle {
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 245, 255, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 245, 255, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 245, 255, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 245, 255, 0);
  }
}

.sub-text {
  font-size: 12px;
  color: var(--text-secondary);
}

@media (max-width: 992px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    padding: 40px 24px;
    gap: 40px;
  }
  
  .text-content h2 {
    font-size: 32px;
  }
}
</style>
