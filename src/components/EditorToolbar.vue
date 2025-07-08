<template>
  <div class="flex items-center gap-2">
    <button
      @click="$emit('toggle-emojis')"
      class="flex items-center justify-center h-8 w-8 rounded-md text-slate-600 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"
    >
      <span class="text-xl">😊</span>
    </button>

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
  </div>
</template>

<script>
export default {
  name: 'EditorToolbar',
  props: {
    copyText: {
      type: String,
      default: 'Copy',
    },
  },
  emits: ['toggle-emojis', 'copy', 'clear'],
}
</script>
