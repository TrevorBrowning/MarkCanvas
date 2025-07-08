import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const themeDefault = ref('🌙')

  const updateDOM = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      themeDefault.value = '🌙'
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      themeDefault.value = '☀️'
      localStorage.setItem('theme', 'light')
    }
  }

  // This function is now simplified to default to dark mode.
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme')

    // If the saved theme is 'light', set it to light mode.
    // In all other cases (first visit, or theme is 'dark'), default to dark mode.
    if (savedTheme === 'light') {
      isDark.value = false
    } else {
      isDark.value = true
    }
    updateDOM()
  }

  const themeToggle = () => {
    isDark.value = !isDark.value
    updateDOM()
  }

  onMounted(() => {
    initializeTheme()
  })

  return {
    isDark,
    themeDefault,
    themeToggle,
  }
}
