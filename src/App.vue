<template>
  <div
    @keydown="handleCommandMenuKeys"
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
        <div class="relative min-h-0 overflow-y-auto">
          <MarkdownEditor class="h-full" ref="editorRef" v-model="markdownInput" />
          <div
            v-if="isCommandMenuOpen"
            class="absolute bottom-2 left-0 right-0 z-10 mx-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg"
          >
            <ul class="max-h-64 overflow-y-auto custom-scroll">
              <li
                v-for="(command, index) in filteredCommands"
                :key="command.name"
                :ref="
                  (el) => {
                    if (el) commandItems[index] = el
                  }
                "
              >
                <button
                  @click="executeCommand(command)"
                  :class="{
                    'bg-slate-100 dark:bg-slate-700': index === commandMenuSelectedIndex,
                  }"
                  class="w-full text-left p-3 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <p class="font-medium text-slate-800 dark:text-slate-200">/{{ command.name }}</p>
                  <p class="text-sm text-slate-500 dark:text-slate-400">
                    {{ command.description }}
                  </p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="flex-shrink-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-2"
        >
          <EditorToolbar
            class="h-12"
            :copy-text="copyButtonText"
            :is-undoable="isUndoable"
            :is-redoable="isRedoable"
            @copy="copyMarkdown"
            @clear="clearMarkdown"
            @toggle-emojis="isEmojiModalVisible = true"
            @format-bold="formatBold"
            @format-italic="formatItalic"
            @format-strikethrough="formatStrikethrough"
            @format-code="formatCode"
            @format-link="formatLink"
            @undo="handleUndo"
            @redo="handleRedo"
          />
        </div>
      </div>
      <div class="grid h-full min-h-0 gap-2" style="grid-template-rows: 1fr auto">
        <div class="overflow-y-auto min-h-0">
          <MarkdownViewer :markdown="markdownInput" ref="viewerRef" class="h-full" />
        </div>
        <StatsDisplay
          class="h-14"
          :wordCount="wordCount"
          :characterCount="characterCount"
          :readingTime="readingTime"
        />
      </div>
    </main>

    <Transition>
      <TemplatesModal
        v-if="isTemplateModalVisible"
        :templates="templates"
        @close="isTemplateModalVisible = false"
        @insert-template="insertTemplate"
      />
    </Transition>
    <Transition>
      <CheatsheetModal v-if="isCheatsheetVisible" @close="toggleCheatsheet" />
    </Transition>
    <Transition>
      <EmojiPickerModal
        v-if="isEmojiModalVisible"
        @close="isEmojiModalVisible = false"
        @select-emoji="handleEmojiSelect"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { marked } from 'marked'
import MarkdownEditor from './components/MarkdownEditor.vue'
import MarkdownViewer from './components/MarkdownViewer.vue'
import TemplatesModal from './components/TemplatesModal.vue'
import CheatsheetModal from './components/CheatsheetModal.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import EmojiPickerModal from './components/EmojiPickerModal.vue'
import HeaderActions from './components/HeaderActions.vue'
import EditorToolbar from './components/EditorToolbar.vue'
import StatsDisplay from './components/StatsDisplay.vue'
import { templates } from './data/templates.js'
import { useTheme } from './composables/useTheme.js'
import { useScrollSync } from './composables/useScrollSync.js'
import { useHistory } from './composables/useHistory.js'

const { isDark } = useTheme()

const markdownInput = ref(localStorage.getItem('savedMarkdown') || '# Hello, world!')
const copyButtonText = ref('Copy')
const isCheatsheetVisible = ref(false)
const isTemplateModalVisible = ref(false)
const isEmojiModalVisible = ref(false)
const editorRef = ref(null)
const viewerRef = ref(null)

const { undo, redo, isUndoable, isRedoable, recordChange } = useHistory(markdownInput)

watch(markdownInput, (newValue) => {
  localStorage.setItem('savedMarkdown', newValue)
})

const editorEl = computed(() => editorRef.value?.textareaRef)
const viewerEl = computed(() => viewerRef.value?.viewerRef)
useScrollSync(editorEl, viewerEl)

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

const handleUndo = () => undo()
const handleRedo = () => redo()
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
const formatBold = () => {
  editorRef.value?.wrapText('**')
}
const formatItalic = () => {
  editorRef.value?.wrapText('_')
}
const formatCode = () => {
  editorRef.value?.wrapText('\n```\n', '\n```\n')
}
const formatStrikethrough = () => {
  editorRef.value?.wrapText('~~')
}
const formatLink = () => {
  editorRef.value?.insertLink()
}

onMounted(() => {
  const handleKeydown = (e) => {
    const isMac = navigator.platform.toUpperCase().includes('MAC')
    const ctrl = isMac ? e.metaKey : e.ctrlKey

    if (ctrl && e.key === 'z' && !e.shiftKey) {
      e.preventDefault()
      handleUndo()
    }

    if (ctrl && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
      e.preventDefault()
      handleRedo()
    }

    if ([' ', 'Enter', '.', ',', ';', ':', '?', '!'].includes(e.key)) {
      recordChange()
    }
  }

  window.addEventListener('keydown', handleKeydown)

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
})

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

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
