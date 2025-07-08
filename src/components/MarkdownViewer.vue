<template>
  <div>
    <div class="flex justify-center items-center mb-2">
      <label class="text-lg font-medium text-gray-800 dark:text-gray-300">MD Preview</label>
    </div>

    <div
      v-html="renderedHtml"
      class="custom-scroll prose max-w-none overflow-y-auto h-96 rounded-lg border border-slate-300 bg-slate-50 p-4 text-gray-900 dark:prose-invert dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors"
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
        gfm: true, // Enable GitHub Flavored Markdown.
        breaks: true, // New Line == <br>
      })
    },
  },
}
</script>
