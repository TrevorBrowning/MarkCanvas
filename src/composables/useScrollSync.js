import { ref, watch } from 'vue'

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function useScrollSync(pane1, pane2) {
  const isSyncing = ref(false)

  const syncScroll = (from, to) => {
    if (isSyncing.value) return

    isSyncing.value = true

    const fromEl = from.value
    const toEl = to.value

    if (fromEl && toEl) {
      const fromScrollTop = fromEl.scrollTop
      const fromScrollHeight = fromEl.scrollHeight - fromEl.clientHeight
      const scrollPercentage = fromScrollTop / fromScrollHeight

      const toScrollHeight = toEl.scrollHeight - toEl.clientHeight
      toEl.scrollTop = scrollPercentage * toScrollHeight
    }

    setTimeout(() => {
      isSyncing.value = false
    }, 100)
  }

  const throttledSyncFromPane1 = throttle(() => syncScroll(pane1, pane2), 10)
  const throttledSyncFromPane2 = throttle(() => syncScroll(pane2, pane1), 10)

  watch([pane1, pane2], ([p1, p2]) => {
    if (p1 && p2) {
      p1.addEventListener('scroll', throttledSyncFromPane1)
      p2.addEventListener('scroll', throttledSyncFromPane2)
    }

    return () => {
      if (p1) p1.removeEventListener('scroll', throttledSyncFromPane1)
      if (p2) p2.removeEventListener('scroll', throttledSyncFromPane2)
    }
  })
}
