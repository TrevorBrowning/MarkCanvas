<template>
  <div
    :class="{ dark: isDark }"
    class="flex flex-col h-screen w-full font-sans bg-slate-100 dark:bg-slate-900"
  >
    <header
      class="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 h-16 bg-white border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700"
    >
      <div class="flex items-center gap-3">
        <h1 class="text-xl font-bold text-slate-800 dark:text-slate-100">MarkCanvas</h1>
      </div>
      <div class="flex items-center gap-4">
        <HeaderActions
          @toggle-help="toggleCheatsheet"
          @toggle-templates="isTemplateModalVisible = true"
          @download-md="downloadMD"
          @download-html="downloadHTML"
          @download-txt="downloadPlainText"
        />
        <ThemeToggle />
      </div>
    </header>

    <main
      class="flex-grow min-h-0 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-4 sm:p-8"
    >
      <div class="grid h-full gap-2" style="grid-template-rows: 1fr auto">
        <MarkdownEditor class="min-h-0" ref="editorRef" v-model="markdownInput" />
        <div
          class="flex-shrink-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-2"
        >
          <EditorToolbar
            class="mr-6"
            :copy-text="copyButtonText"
            @copy="copyMarkdown"
            @clear="clearMarkdown"
            @toggle-emojis="isEmojiModalVisible = true"
          />
          <div class="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{{ wordCount }} Words</span>
            <span>{{ characterCount }} Characters</span>
            <span>{{ readingTime }} min read</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col h-full min-h-0">
        <MarkdownViewer :markdown="markdownInput" />
      </div>
    </main>

    <TemplatesModal
      v-if="isTemplateModalVisible"
      :templates="templates"
      @close="isTemplateModalVisible = false"
      @insert-template="insertTemplate"
    />
    <CheatsheetModal v-if="isCheatsheetVisible" @close="toggleCheatsheet" />
    <EmojiPickerModal
      v-if="isEmojiModalVisible"
      @close="isEmojiModalVisible = false"
      @select-emoji="handleEmojiSelect"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { marked } from 'marked'
import MarkdownEditor from './components/MarkdownEditor.vue'
import MarkdownViewer from './components/MarkdownViewer.vue'
import TemplatesModal from './components/TemplatesModal.vue'
import CheatsheetModal from './components/CheatsheetModal.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import EmojiPickerModal from './components/EmojiPickerModal.vue'
import HeaderActions from './components/HeaderActions.vue'
import EditorToolbar from './components/EditorToolbar.vue'
import { templates } from './data/templates.js'
import { useTheme } from './composables/useTheme.js'

const { isDark } = useTheme()

const markdownInput = ref(localStorage.getItem('savedMarkdown') || '# Hello, world!')
const copyButtonText = ref('Copy')
const isCheatsheetVisible = ref(false)
const isTemplateModalVisible = ref(false)
const isEmojiModalVisible = ref(false)
const editorRef = ref(null)

watch(markdownInput, (newValue) => {
  localStorage.setItem('savedMarkdown', newValue)
})

const renderedHtml = computed(() =>
  marked(markdownInput.value, { gfm: true, breaks: true, mangle: false, headerIds: false }),
)
const characterCount = computed(() => markdownInput.value.length)
const wordCount = computed(() => {
  if (!markdownInput.value.trim()) return 0
  return markdownInput.value.trim().split(/\s+/).length
})
const readingTime = computed(() => {
  const wordsPerMinute = 200
  return Math.ceil(wordCount.value / wordsPerMinute)
})

const insertTemplate = (content) => {
  markdownInput.value = content
  isTemplateModalVisible.value = false
}

const handleEmojiSelect = (emoji) => {
  if (editorRef.value) {
    editorRef.value.insertTextAtCursor(emoji)
  }
  isEmojiModalVisible.value = false
}

const copyMarkdown = () => {
  navigator.clipboard.writeText(markdownInput.value)
  copyButtonText.value = 'Copied!'
  setTimeout(() => {
    copyButtonText.value = 'Copy'
  }, 2000)
}

const clearMarkdown = () => {
  if (confirm('Are you sure you want to clear the Canvas?')) {
    markdownInput.value = ''
  }
}

const toggleCheatsheet = () => {
  isCheatsheetVisible.value = !isCheatsheetVisible.value
}

const downloadMD = () => {
  const blob = new Blob([markdownInput.value], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'MarkCanvas.md'
  a.click()
  URL.revokeObjectURL(url)
}

const downloadHTML = () => {
  const fullHtml = `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>MarkCanvas Export</title>\n  <style>body { font-family: sans-serif; }</style>\n</head>\n<body>\n${renderedHtml.value}\n</body>\n</html>`
  const blob = new Blob([fullHtml], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'MarkCanvas.html'
  a.click()
  URL.revokeObjectURL(url)
}

const downloadPlainText = () => {
  let text = markdownInput.value
  text = text
    .replace(/^#+\s/gm, '')
    .replace(/(\*\*|__|\*|_|~~)/g, '')
    .replace(/!\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/^[\s\t]*(\*|-|\d+\.)\s/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^[=-]{3,}/gm, '')
    .replace(/`{3}.*$/gm, '')
    .replace(/`/g, '')
    .replace(/\n{3,}/g, '\n\n')

  const blob = new Blob([text], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'MarkCanvas.txt'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style>
html,
body {
  margin: 0;
}

.dark body {
  background-color: #1a202c;
}

.custom-scroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.5);
  border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(100, 100, 100, 0.5) transparent;
}

.prose p img {
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
}

.prose {
  overflow-wrap: break-word;
}
</style>
