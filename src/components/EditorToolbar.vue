<template>
  <div class="flex items-center gap-2">
    <button
      @click="$emit('toggle-emojis')"
      title="Insert Emoji"
      class="flex items-center justify-center h-8 w-8 rounded-md text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"
    >
      <span class="text-xl">😊</span>
    </button>

    <div class="h-5 w-px bg-slate-300 dark:bg-slate-600"></div>

    <button
      @click="$emit('copy')"
      class="px-3 py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
    >
      {{ copyText }}
    </button>
    <button
      @click="$emit('clear')"
      class="px-3 py-1 rounded-md text-sm font-medium border border-red-500/50 text-red-600 hover:bg-red-50 dark:border-red-500/50 dark:text-red-500 dark:hover:bg-red-500/10 transition-colors"
    >
      Clear
    </button>

    <div class="h-5 w-px bg-slate-300 dark:bg-slate-600"></div>

    <button
      @click="$emit('format-bold')"
      title="Bold"
      class="px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-slate-700 dark:text-slate-300"
    >
      B
    </button>
    <button
      @click="$emit('format-italic')"
      title="Italic"
      class="px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 italic text-slate-700 dark:text-slate-300"
    >
      I
    </button>
    <button
      @click="$emit('format-strikethrough')"
      title="Strikethrough"
      class="px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 line-through text-slate-700 dark:text-slate-300"
    >
      S
    </button>
    <button
      @click="$emit('format-code')"
      title="Code"
      class="px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 font-mono text-sm text-slate-700 dark:text-slate-300"
    >
      &lt;/&gt;
    </button>
    <button
      @click="$emit('format-link')"
      title="Link"
      class="px-3 h-8 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
    >
      🔗
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  copyText: {
    type: String,
    default: 'Copy',
  },
})

defineEmits([
  'toggle-emojis',
  'copy',
  'clear',
  'format-bold',
  'format-italic',
  'format-strikethrough',
  'format-link',
  'format-code',
])
</script>
