import { onMounted, onBeforeUnmount } from 'vue'

export function useClickOutside(elementRef, callback) {
  const handleClick = (event) => {
    if (elementRef.value && !elementRef.value.contains(event.target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClick)
  })
}
