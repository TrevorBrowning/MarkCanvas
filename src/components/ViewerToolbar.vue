<template>
  <div
    class="flex-shrink-0 flex items-center justify-end border-t border-slate-200 dark:border-slate-700 pt-2"
  >
    <div class="flex items-center gap-2">
      <button
        disabled
        class="px-3 py-1 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors cursor-not-allowed"
      >
        Copy HTML
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewerToolbar',
}
</script>
