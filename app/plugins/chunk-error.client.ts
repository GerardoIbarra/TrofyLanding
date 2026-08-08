const plugin: any = defineNuxtPlugin((nuxtApp) => {
  // Shared state that can be observed by UI components
  const hasChunkError = useState('has-chunk-error', () => false)

  const handleChunkError = (error: any) => {
    console.error('[Chunk Error] Captured chunk loading/preload error:', error)
    hasChunkError.value = true
  }

  // Hook into Nuxt's internal chunk loading error event
  nuxtApp.hook('app:chunkError', ({ error }) => {
    handleChunkError(error)
  })

  // Register window-level handlers for safety to catch any uncaught script/network load issues
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      const message = event.message || ''
      const isChunkError = 
        message.includes('Failed to fetch dynamically imported module') ||
        message.includes('error loading dynamically imported module') ||
        message.includes('chunk') ||
        (event.error && (
          event.error.name === 'ChunkLoadError' || 
          event.error.message?.includes('chunk') ||
          event.error.message?.includes('Failed to fetch')
        ))

      if (isChunkError) {
        handleChunkError(event.error || message)
      }
    }, { capture: true })

    window.addEventListener('unhandledrejection', (event) => {
      const reason = event.reason
      const message = reason?.message || ''
      const isChunkError = 
        message.includes('Failed to fetch dynamically imported module') ||
        message.includes('error loading dynamically imported module') ||
        message.includes('chunk') ||
        (reason && (
          reason.name === 'ChunkLoadError' || 
          reason.message?.includes('chunk') ||
          reason.message?.includes('Failed to fetch')
        ))

      if (isChunkError) {
        handleChunkError(reason)
      }
    })
  }
})

export default plugin
