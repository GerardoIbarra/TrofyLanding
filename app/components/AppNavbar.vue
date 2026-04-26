<template>
  <nav class="navbar glass" :class="{ 'scrolled': isScrolled }">
    <div class="container nav-content">
      <div class="logo">
        <AppLogo :width="40" :height="40" color="var(--primary-color)" />
        <span class="logo-text">TROFI</span>
      </div>
      
      <div class="nav-links">
        <a href="#features">{{ $t('nav.features') }}</a>
        <a href="#how-it-works">{{ $t('nav.process') }}</a>
        <a href="#pricing">{{ $t('nav.pricing') }}</a>
      </div>
      
      <div class="nav-actions">
        <button class="flag-toggle" @click="toggleLocale">
          <span class="flag-icon">{{ currentLocale === 'en' ? '🇲🇽' : '🇺🇸' }}</span>
          <span class="lang-code">{{ currentLocale === 'en' ? 'ES' : 'EN' }}</span>
        </button>
      </div>

      <button class="mobile-menu-btn" @click="isMenuOpen = !isMenuOpen">
        <Menu v-if="!isMenuOpen" :size="24" color="white" />
        <X v-else :size="24" color="white" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'open': isMenuOpen }">
      <a href="#features" @click="isMenuOpen = false">{{ $t('nav.features') }}</a>
      <a href="#how-it-works" @click="isMenuOpen = false">{{ $t('nav.process') }}</a>
      <a href="#pricing" @click="isMenuOpen = false">{{ $t('nav.pricing') }}</a>
      
      <div class="mobile-lang-switcher">
        <button class="flag-toggle large" @click="toggleLocale; isMenuOpen = false">
          <span class="flag-icon">{{ currentLocale === 'en' ? '🇲🇽' : '🇺🇸' }}</span>
          <span>{{ currentLocale === 'en' ? 'Español' : 'English' }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { locale: currentLocale, locales, setLocale } = useI18n()

const availableLocales = computed(() => locales.value)

const toggleLocale = () => {
  const nextLocale = currentLocale.value === 'en' ? 'es' : 'en'
  setLocale(nextLocale)
}

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 1000;
  transition: all 0.3s ease;
  border-top: none;
  border-left: none;
  border-right: none;
}

.navbar.scrolled {
  height: 70px;
  background: rgba(3, 3, 3, 0.9);
  border-bottom-color: var(--border-color);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 24px;
}

.logo-text {
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 22px;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-actions {
  display: flex;
  gap: 12px;
}

.nav-actions .btn {
  padding: 8px 20px;
  font-size: 14px;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-btn .bar {
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 2px;
}

.mobile-menu {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  width: 100%;
  height: 0;
  background: var(--bg-color);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0;
}

.mobile-menu.open {
  height: calc(100vh - var(--nav-height));
  padding: 40px 20px;
}

.flag-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.flag-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--primary-color);
  transform: translateY(-1px);
}

.flag-icon {
  font-size: 18px;
}

.lang-code {
  font-size: 12px;
  opacity: 0.8;
}

.flag-toggle.large {
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 16px;
}

.mobile-lang-switcher {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .nav-links, .nav-actions {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
}
</style>
