import { ref, watch, computed } from 'vue'

function debounce(fn, delay = 500) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export function useHistory(sourceRef) {
  const history = ref([sourceRef.value])
  const redoStack = ref([])

  const isUndoable = computed(() => history.value.length > 1)
  const isRedoable = computed(() => redoStack.value.length > 0)

  let isProgrammatic = false

  const recordChange = () => {
    const lastState = history.value[history.value.length - 1]
    if (sourceRef.value !== lastState) {
      history.value.push(sourceRef.value)
      redoStack.value = []
    }
  }

  const debouncedRecordChange = debounce(recordChange, 500)

  const undo = () => {
    if (isUndoable.value) {
      const last = history.value.pop()
      redoStack.value.push(last)
      isProgrammatic = true
      sourceRef.value = history.value[history.value.length - 1]
      isProgrammatic = false
    }
  }

  const redo = () => {
    if (isRedoable.value) {
      const next = redoStack.value.pop()
      history.value.push(next)
      isProgrammatic = true
      sourceRef.value = next
      isProgrammatic = false
    }
  }

  watch(sourceRef, (newVal, oldVal) => {
    if (!isProgrammatic && newVal !== oldVal) {
      debouncedRecordChange()
    }
  })

  return {
    undo,
    redo,
    isUndoable,
    isRedoable,
    recordChange,
  }
}
