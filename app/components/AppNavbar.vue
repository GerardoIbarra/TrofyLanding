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
        <div class="lang-switcher">
          <button 
            class="lang-btn"
            :class="{ active: currentLocale === 'en' }"
            @click="setLocale('en')"
          >EN</button>
          <button 
            class="lang-btn"
            :class="{ active: currentLocale === 'es' }"
            @click="setLocale('es')"
          >ES</button>
        </div>
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
        <div class="lang-switcher large">
          <button 
            class="lang-btn"
            :class="{ active: currentLocale === 'en' }"
            @click="setLocale('en'); isMenuOpen = false"
          >English</button>
          <button 
            class="lang-btn"
            :class="{ active: currentLocale === 'es' }"
            @click="setLocale('es'); isMenuOpen = false"
          >Español</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const { locale: currentLocale, locales, setLocale } = useI18n()

const availableLocales = computed(() => locales.value)

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

.lang-switcher {
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.lang-switcher button, .lang-switcher .lang-btn {
  padding: 4px 12px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.lang-switcher button.active, .lang-switcher .lang-btn.active {
  background: var(--text-primary);
  color: var(--bg-color);
}

.lang-switcher.large button, .lang-switcher.large .lang-btn {
  padding: 10px 24px;
  font-size: 16px;
  border-radius: 12px;
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
