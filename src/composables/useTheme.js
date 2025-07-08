import { ref, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const themeDefault = ref('☀️')

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      isDark.value = true
    } else {
      isDark.value = false
    }
    updateDOM()
  }

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
