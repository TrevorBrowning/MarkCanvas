<template>
  <div
    :class="{ dark: isDark }"
    class="w-full min-h-screen font-sans transition-colors duration-300 bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400"
  >
    <header
      class="grid grid-cols-3 items-center px-4 sm:px-8 py-3 bg-white border-b border-slate-200 dark:bg-slate-800 dark:border-slate-700"
    >
      <div>
        <img src="/logo-placeholder.svg" alt="MarkCanvas Logo" class="h-8 w-auto" />
      </div>

      <div class="text-center">
        <h1 class="text-xl font-bold text-slate-800 dark:text-slate-100">MarkCanvas</h1>
        <p class="text-sm text-slate-500 dark:text-slate-400">A Live Markdown Editor</p>
      </div>

      <div class="justify-self-end">
        <ThemeToggle />
      </div>
    </header>

    <main class="max-w-7xl mx-auto p-4 sm:p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <MarkdownEditor ref="editorRef" v-model="markdownInput" />
          <div
            class="mt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-2"
          >
            <AppToolbar
              class="mr-6"
              :copy-text="copyButtonText"
              @copy="copyMarkdown"
              @clear="clearMarkdown"
              @toggle-help="toggleCheatsheet"
              @toggle-templates="isTemplateModalVisible = true"
              @download-md="downloadMD"
              @download-html="downloadHTML"
              @toggle-emojis="isEmojiModalVisible = true"
            />
            <div class="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{{ wordCount }} Words</span>
              <span>{{ characterCount }} Characters</span>
              <span>{{ readingTime }} min read</span>
            </div>
          </div>
        </div>

        <div>
          <MarkdownViewer :markdown="markdownInput" />
        </div>
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
// Global Imports
import { ref, watch, computed } from 'vue'
import { marked } from 'marked'

// Component Imports
import MarkdownEditor from './components/MarkdownEditor.vue'
import MarkdownViewer from './components/MarkdownViewer.vue'
import AppToolbar from './components/Toolbar.vue'
import TemplatesModal from './components/TemplatesModal.vue'
import CheatsheetModal from './components/CheatsheetModal.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import EmojiPickerModal from './components/EmojiPickerModal.vue'
import { templates } from './data/templates.js'
import { useTheme } from './composables/useTheme.js'

const { isDark } = useTheme()

// Ref
const markdownInput = ref(localStorage.getItem('savedMarkdown') || '# Hello, world!')
const copyButtonText = ref('Copy')
const isCheatsheetVisible = ref(false)
const isTemplateModalVisible = ref(false)
const isEmojiModalVisible = ref(false)
const editorRef = ref(null)

// Watchers
watch(markdownInput, (newValue) => {
  localStorage.setItem('savedMarkdown', newValue)
})

// Computer - Render
const renderedHtml = computed(() => marked(markdownInput.value, { gfm: true, breaks: true }))

const characterCount = computed(() => markdownInput.value.length)

const wordCount = computed(() => {
  if (!markdownInput.value.trim()) return 0
  return markdownInput.value.trim().split(/\s+/).length
})

const readingTime = computed(() => {
  const wordsPerMinute = 200
  return Math.ceil(wordCount.value / wordsPerMinute)
})

// ---METHODS---

// Insert Template
const insertTemplate = (content) => {
  markdownInput.value = content
  isTemplateModalVisible.value = false
}

// ADD THIS FUNCTION
const handleEmojiSelect = (emoji) => {
  if (editorRef.value) {
    editorRef.value.insertTextAtCursor(emoji)
  }
  isEmojiModalVisible.value = false // Close modal after selection
}

// Copy MD to Clipboard
const copyMarkdown = () => {
  navigator.clipboard.writeText(markdownInput.value)
  copyButtonText.value = 'Copied!'
  setTimeout(() => {
    copyButtonText.value = 'Copy'
  }, 2000)
}
// Clear Markdown on Editor
const clearMarkdown = () => {
  if (confirm('Are you sure you want to clear the Canvas?')) {
    markdownInput.value = ''
  }
}

// Toggle Cheatsheet
const toggleCheatsheet = () => {
  isCheatsheetVisible.value = !isCheatsheetVisible.value
}

// Download Markdown File
const downloadMD = () => {
  const blob = new Blob([markdownInput.value], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'markdown.md'
  a.click()
  URL.revokeObjectURL(url)
}

// Download HTML File
const downloadHTML = () => {
  const fullHtml = `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Markdown Export</title>\n  <style>body { font-family: sans-serif; }</style>\n</head>\n<body>\n${renderedHtml.value}\n</body>\n</html>`
  const blob = new Blob([fullHtml], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'markdown.html'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  background-color: white;
  transition: background-color 0.3s ease;
}

.dark html,
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
  padding: 6px;
  padding-bottom: 30px;
}
</style>
