<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="logo">
          <AppLogo :width="36" :height="36" color="var(--primary-color)" />
          <span class="logo-text">TROFY</span>
        </div>
        <p class="brand-desc">Building the future of competitive sports management. Based in Mexico, serving the world.</p>
        <div class="socials">
          <a href="#" class="social-link"><Twitter :size="20" /></a>
          <a href="#" class="social-link"><Instagram :size="20" /></a>
          <a href="#" class="social-link"><Linkedin :size="20" /></a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Product</h4>
        <a href="#">Features</a>
        <a href="#">Roadmap</a>
        <a href="#">Pricing</a>
        <a href="#">App Store</a>
      </div>

      <div class="footer-links">
        <h4>Support</h4>
        <a href="#">Documentation</a>
        <a href="#">Help Center</a>
        <a href="#">Community</a>
        <a href="#">Contact</a>
      </div>

      <div class="footer-links">
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
    
    <div class="container footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Trofy Sports Tech. All rights reserved.</p>
      <div class="status">
        <span class="status-dot"></span>
        All systems operational
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Instagram, Linkedin } from 'lucide-vue-next'
</script>

<style scoped>
.footer {
  padding: 100px 0 40px;
  border-top: 1px solid var(--border-color);
  background: linear-gradient(to bottom, transparent, rgba(124, 92, 252, 0.02));
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
}

.logo-text {
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 24px;
}

.brand-desc {
  color: var(--text-secondary);
  max-width: 280px;
  margin-bottom: 24px;
}

.socials {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--text-secondary);
}

.social-link:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-3px);
}

h4 {
  margin-bottom: 24px;
  font-size: 16px;
  color: var(--text-primary);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: var(--text-secondary);
  font-size: 14px;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  padding-top: 40px;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 14px;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>
