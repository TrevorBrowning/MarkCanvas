<template>
  <div class="flex flex-col h-full min-h-0">
    <div
      v-html="renderedHtml"
      class="overflow-auto flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-slate-50 p-4 prose max-w-none dark:prose-invert dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors custom-scroll"
    ></div>
  </div>
</template>

<script>
import { marked } from 'marked'

export default {
  name: 'MarkdownViewer',
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
  computed: {
    renderedHtml() {
      return marked(this.markdown, {
        gfm: true,
        breaks: true,
      })
    },
  },
}
</script>
