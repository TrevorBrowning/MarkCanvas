<template>
  <div
    class="flex-shrink-0 flex items-center justify-end border-t border-slate-200 dark:border-slate-700 pt-2"
  >
    <div class="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
      <span>{{ wordCount }} Words</span>
      <span>{{ characterCount }} Characters</span>
      <span>{{ readingTime }} min read</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  wordCount: Number,
  characterCount: Number,
  readingTime: Number,
})
</script>
