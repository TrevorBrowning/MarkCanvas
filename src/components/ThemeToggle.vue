<template>
  <button
    @click="themeToggle"
    class="px-3 py-1 rounded-md text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
  >
    {{ themeDefault }}
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { themeDefault, themeToggle } = useTheme()
</script>
