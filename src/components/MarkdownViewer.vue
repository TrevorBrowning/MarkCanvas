<template>
  <div class="flex flex-col h-full min-h-0">
    <div
      ref="viewerRef"
      v-html="renderedHtml"
      class="overflow-auto flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-slate-50 p-4 prose max-w-none dark:prose-invert dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors custom-scroll"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineExpose } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
})

const viewerRef = ref(null)

const renderedHtml = computed(() => {
  return marked(props.markdown, {
    gfm: true,
    breaks: true,
    mangle: false,
    headerIds: false,
  })
})

defineExpose({ viewerRef })
</script>
