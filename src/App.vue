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
        <img src="./assets/MarkCanvas-Logo.png" alt="MarkCanvas Logo" class="h-8 w-auto" />
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
        <div class="relative min-h-0">
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
        <MarkdownViewer :markdown="markdownInput" ref="viewerRef" />
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
import { ref, watch, computed, nextTick, onBeforeUpdate } from 'vue'
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
import { slashCommands } from './data/slashCommands.js'
import { useTheme } from './composables/useTheme.js'
import { useScrollSync } from './composables/useScrollSync.js'

const { isDark } = useTheme()

const markdownInput = ref(localStorage.getItem('savedMarkdown') || '# Hello, world!')
const copyButtonText = ref('Copy')
const isCheatsheetVisible = ref(false)
const isTemplateModalVisible = ref(false)
const isEmojiModalVisible = ref(false)
const editorRef = ref(null)
const viewerRef = ref(null)

const isCommandMenuOpen = ref(false)
const commandSearchTerm = ref('')
const commandMenuSelectedIndex = ref(0)
const commandItems = ref([])

const editorEl = computed(() => editorRef.value?.textareaRef)
const viewerEl = computed(() => viewerRef.value?.viewerRef)
useScrollSync(editorEl, viewerEl)

watch(markdownInput, async (newValue) => {
  localStorage.setItem('savedMarkdown', newValue)
  await nextTick()
  const textarea = editorRef.value?.textareaRef
  if (!textarea) return

  const cursorPosition = textarea.selectionStart
  const textBeforeCursor = newValue.substring(0, cursorPosition)
  const lastSlashIndex = textBeforeCursor.lastIndexOf('/')
  const lastSpaceIndex = textBeforeCursor.lastIndexOf(' ')
  const lastNewlineIndex = textBeforeCursor.lastIndexOf('\n')

  if (
    lastSlashIndex !== -1 &&
    lastSlashIndex > lastSpaceIndex &&
    lastSlashIndex > lastNewlineIndex
  ) {
    isCommandMenuOpen.value = true
    commandSearchTerm.value = textBeforeCursor.substring(lastSlashIndex + 1)
    commandMenuSelectedIndex.value = 0
  } else {
    isCommandMenuOpen.value = false
  }
})

watch(commandMenuSelectedIndex, (newIndex) => {
  const selectedElement = commandItems.value[newIndex]
  if (selectedElement) {
    selectedElement.scrollIntoView({ block: 'nearest' })
  }
})

onBeforeUpdate(() => {
  commandItems.value = []
})

const filteredCommands = computed(() => {
  if (!commandSearchTerm.value) return slashCommands
  return slashCommands.filter((command) =>
    command.name.toLowerCase().startsWith(commandSearchTerm.value.toLowerCase()),
  )
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

// --- Methods ---
const executeCommand = (command) => {
  const textarea = editorRef.value?.textareaRef
  if (!textarea) return

  const cursorPosition = textarea.selectionStart
  const textBeforeCursor = markdownInput.value.substring(0, cursorPosition)
  const textAfterCursor = markdownInput.value.substring(cursorPosition)

  const textToReplace = `/${commandSearchTerm.value}`
  const newTextBefore = textBeforeCursor.slice(0, textBeforeCursor.length - textToReplace.length)

  if (command.action) {
    if (command.action === 'open-templates') isTemplateModalVisible.value = true
    if (command.action === 'open-emojis') isEmojiModalVisible.value = true
    if (command.action === 'open-help') isCheatsheetVisible.value = true
    markdownInput.value = newTextBefore + textAfterCursor
  } else if (command.content) {
    const newText = newTextBefore + command.content + textAfterCursor
    markdownInput.value = newText
    nextTick(() => {
      textarea.focus()
      const newCursorPosition = (newTextBefore + command.content).length
      textarea.selectionStart = textarea.selectionEnd = newCursorPosition
    })
  }
  isCommandMenuOpen.value = false
}

const handleCommandMenuKeys = (event) => {
  if (!isCommandMenuOpen.value) return

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    commandMenuSelectedIndex.value =
      (commandMenuSelectedIndex.value - 1 + filteredCommands.value.length) %
      filteredCommands.value.length
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    commandMenuSelectedIndex.value =
      (commandMenuSelectedIndex.value + 1) % filteredCommands.value.length
  } else if (event.key === 'Enter' || event.key === 'Tab') {
    event.preventDefault()
    const selectedCommand = filteredCommands.value[commandMenuSelectedIndex.value]
    if (selectedCommand) {
      executeCommand(selectedCommand)
    }
  } else if (event.key === 'Escape') {
    isCommandMenuOpen.value = false
  }
}

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
