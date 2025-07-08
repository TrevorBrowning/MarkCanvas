import { onMounted, onUnmounted } from 'vue'

export function useEscapeKey(callback) {
  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleEscape)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
  })
}
