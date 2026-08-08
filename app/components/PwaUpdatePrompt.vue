<template>
  <Transition name="slide-up">
    <div v-if="showPrompt" class="pwa-toast-container">
      <div class="pwa-toast">
        <div class="pwa-icon-wrapper" :class="{ 'pulsing': !isUpdating }">
          <RefreshCw :size="20" class="pwa-icon" :class="{ 'spinning': isUpdating }" />
        </div>
        <div class="pwa-content">
          <h4 class="pwa-title">{{ titleText }}</h4>
          <p class="pwa-desc">{{ descText }}</p>
        </div>
        <div class="pwa-actions">
          <button @click="handleUpdate" class="btn-update" :disabled="isUpdating">
            {{ isUpdating ? '...' : updateText }}
          </button>
          <button @click="handleClose" class="btn-close" :aria-label="dismissText">
            <X :size="16" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RefreshCw, X } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useState, useNuxtApp } from '#app'

const { locale } = useI18n()

const isClient = ref(false)
const hasChunkError = useState('has-chunk-error', () => false)

onMounted(() => {
  isClient.value = true
})

const nuxtApp = useNuxtApp()

const showPrompt = computed(() => {
  if (!isClient.value) return false
  const pwa = nuxtApp.$pwa
  return (pwa?.needRefresh) || hasChunkError.value
})

const isChunkError = computed(() => {
  return hasChunkError.value
})

const titleText = computed(() => {
  if (isChunkError.value) {
    return locale.value === 'es' ? 'Error de Carga' : 'Connection Error'
  }
  return locale.value === 'es' ? 'Nueva Versión' : 'Update Available'
})

const descText = computed(() => {
  if (isChunkError.value) {
    return locale.value === 'es' 
      ? 'Se detectó un error al cargar componentes. Actualiza para refrescar la aplicación.' 
      : 'A connection or component load issue was detected. Please update to reload assets.'
  }
  return locale.value === 'es'
    ? 'Una nueva versión de Trofi está disponible. Haz clic en actualizar.'
    : 'A new version of Trofi is available. Click update to reload the application.'
})

const updateText = computed(() => {
  return locale.value === 'es' ? 'Actualizar' : 'Update'
})

const dismissText = computed(() => {
  return locale.value === 'es' ? 'Cerrar' : 'Dismiss'
})

const isUpdating = ref(false)

const handleUpdate = () => {
  isUpdating.value = true
  
  const pwa = nuxtApp.$pwa
  if (pwa?.needRefresh) {
    pwa.updateServiceWorker(true)
  } else {
    // For chunk errors, reload the page to get the new build bundles
    window.location.reload()
  }
}

const handleClose = () => {
  const pwa = nuxtApp.$pwa
  if (pwa?.needRefresh) {
    pwa.cancelPrompt()
  }
  hasChunkError.value = false
}
</script>

<style scoped>
.pwa-toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  max-width: 420px;
  width: calc(100vw - 48px);
}

.pwa-toast {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: rgba(18, 18, 18, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 245, 255, 0.05);
}

.pwa-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: rgba(0, 245, 255, 0.1);
  color: var(--primary-color);
  flex-shrink: 0;
}

.pwa-icon-wrapper.pulsing {
  animation: pulse-glow 2s infinite ease-in-out;
}

.pwa-icon {
  transition: transform 0.3s ease;
}

.pwa-icon.spinning {
  animation: spin 1s infinite linear;
}

.pwa-content {
  flex-grow: 1;
}

.pwa-title {
  font-family: 'Outfit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.pwa-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.4;
}

.pwa-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: center;
  flex-shrink: 0;
}

.btn-update {
  background: var(--gradient-primary);
  color: #050505;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 245, 255, 0.2);
}

.btn-update:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 245, 255, 0.3);
}

.btn-update:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-close {
  background: transparent;
  color: var(--text-secondary);
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.btn-close:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
}

/* Animations */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 245, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 245, 255, 0);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
</style>
