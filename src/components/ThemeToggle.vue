<template>
  <button
    @click="themeToggle"
    class="flex items-center justify-center h-10 w-10 rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"
  >
    {{ themeDefault }}
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { themeDefault, themeToggle } = useTheme()
</script>
