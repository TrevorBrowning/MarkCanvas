<template>
  <div
    :class="{ dark: isDark }"
    class="w-full min-h-screen p-4 sm:p-8 font-sans transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
  >
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold text-cyan-700 dark:text-cyan-400">Markdown Live Preview</h1>
      <p class="mt-2 text-gray-700 dark:text-gray-400">
        Type Markdown on the left, see the result on the right.
      </p>
    </header>
    <div>
      <button
        @click="themeToggle"
        class="fixed top-0 right-0 px-3 py-1 rounded-md text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        {{ themeDefault }}
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Markdown Input -->
      <div>
        <div class="flex justify-center items-center mb-2">
          <label class="text-lg font-medium text-gray-800 dark:text-gray-300">MD Input</label>
        </div>

        <textarea
          v-model="markdownInput"
          class="custom-scroll w-full h-96 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 transition-colors resize-none"
        ></textarea>
        <!-- Tools Section -->
        <div class="flex items-center gap-4">
          <button
            @click="copyMarkdown"
            class="bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
          >
            {{ copyButtonText }}
          </button>
          <button
            @click="clearMarkdown"
            class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
          >
            Clear
          </button>
          <button
            @click="toggleCheatsheet"
            class="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
          >
            Help
          </button>
          <button
            @click="downloadMD"
            class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
          >
            Download .MD
          </button>
          <span>{{ wordCount }} Words</span>
          <span>{{ characterCount }} Characters</span>
          <span>{{ readingTime }} min read</span>
        </div>
      </div>
      <!-- Markdown Preview -->
      <div>
        <div class="flex justify-center items-center mb-2">
          <label class="text-lg font-medium text-gray-800 dark:text-gray-300">MD Preview</label>
        </div>
        <div
          v-html="renderedHtml"
          class="custom-scroll prose max-w-none overflow-y-auto h-96 rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 dark:prose-invert dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 transition-colors"
        ></div>
      </div>
      <div
        v-if="isCheatsheetVisible"
        class="fixed inset-0 flex items-center justify-center p-4 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 transition-colors"
      >
        <div
          class="relative w-full max-w-lg rounded-lg bg-gray-50 p-6 shadow-xl text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors sm:p-8"
        >
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-cyan-700 dark:text-cyan-400">Markdown Cheatsheet</h2>
            <button
              :class="{ 'font-bold underline': activeCheatSheetTab === 'basic' }"
              @click="activeCheatSheetTab = 'basic'"
            >
              Basic
            </button>
            <button
              :class="{ 'font-bold underline': activeCheatSheetTab === 'gfm' }"
              @click="activeCheatSheetTab = 'gfm'"
            >
              GFM
            </button>
            <button
              @click="toggleCheatsheet"
              class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-2xl leading-none transition-colors"
            >
              &times;
            </button>
          </div>
          <div v-if="activeCheatSheetTab === 'basic'">
            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Text Formatting</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">*Italic*</code> &rarr;
                <em>Italic</em>
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">**Bold**</code> &rarr;
                <strong>Bold</strong>
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">~~Strikethrough~~</code>
                &rarr;
                <del>Strikethrough</del>
              </li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Headings</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700"># Heading 1</code></li>
              <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">## Heading 2</code></li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Lists</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">* Unordered item</code>
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">1. Ordered item</code>
              </li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Links & Images</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700"
                  >[Link Text](https://...)</code
                >
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700"
                  >![Alt Text](image.jpg)</code
                >
              </li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Code & Blockquotes</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">`inline code`</code></li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">```\ncode block\n```</code>
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">&gt; Blockquote</code>
              </li>
            </ul>
          </div>
          <div v-if="activeCheatSheetTab === 'gfm'">
            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">
              GitHub Flavored Markdown (GFM)
            </h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">- [x] Task completed</code>
                &rarr; Task list item (checked)
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">- [ ] Task incomplete</code>
                &rarr; Task list item (unchecked)
              </li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Tables</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">| Header | Header |</code>
                &rarr; Table headers
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">| --- | --- |</code>
                &rarr; Header separator
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">| Cell | Cell |</code>
                &rarr; Table row cells
              </li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Strikethrough</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">~~Strikethrough~~</code>
                &rarr; Strikethrough text
              </li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Autolinks</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700"
                  >&lt;https://example.com&gt;</code
                >
                &rarr; Automatically linked URL
              </li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Fenced Code Blocks</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">```</code>
                <em>(start or end code block)</em>
              </li>
              <li>
                <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">```js</code>
                <em>(code block with language for syntax highlighting)</em>
              </li>
            </ul>

            <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">
              Line Breaks & Paragraphs
            </h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>Single line breaks are rendered as <code>&lt;br&gt;</code> (press Enter once)</li>
              <li>Paragraphs require a blank line between them</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { marked } from 'marked'

const markdownInput = ref(localStorage.getItem('savedMarkdown') || '# Hello, world!')
const isCheatsheetVisible = ref(false)
const copyButtonText = ref('Copy')
const isDark = ref(false)
const themeDefault = ref(localStorage.getItem('theme'))
const activeCheatSheetTab = ref('basic')

const savedTheme = localStorage.getItem('theme')

function initializeTheme() {
  if (savedTheme === 'dark') {
    isDark.value = true
    themeDefault.value = '🌙'
    document.documentElement.classList.add('dark')
  } else if (savedTheme === 'light') {
    isDark.value = false
    themeDefault.value = '☀️'
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

initializeTheme()

const themeToggle = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    themeDefault.value = '🌙'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    themeDefault.value = '☀️'
  }
}
const renderedHtml = computed(() =>
  marked(markdownInput.value, {
    gfm: true,
    breaks: true,
  }),
)

watch(markdownInput, (newValue) => {
  localStorage.setItem('savedMarkdown', newValue)
})
// Track Character Count
const characterCount = computed(() => {
  return markdownInput.value.length
})
// Track Word Count
const wordCount = computed(() => {
  if (!markdownInput.value.trim()) {
    return 0
  }
  return markdownInput.value.trim().split(/\s+/).length
})
// Track Reading Time
const readingTime = computed(() => {
  return Math.ceil(wordCount.value / 200)
})

// Copy Text to Clipboard
const copyMarkdown = () => {
  navigator.clipboard.writeText(markdownInput.value)
  copyButtonText.value = 'Copied!'
  setTimeout(() => {
    copyButtonText.value = 'Copy'
  }, 2000)
}
// Clear Canvas
const clearMarkdown = () => {
  const userConfirmed = confirm('Are you sure you want to clear the Canvas?')
  if (userConfirmed) {
    markdownInput.value = ''
  }
}
// Toggle MD Cheatsheet
const toggleCheatsheet = () => {
  isCheatsheetVisible.value = !isCheatsheetVisible.value
}
// Download MD File
const downloadMD = () => {
  const dlMD = markdownInput.value
  const blob = new Blob([dlMD], { type: 'text/markdown' })
  const blobUrl = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = blobUrl
  a.download = 'markdown.md'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(blobUrl)
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
/* Thin scrollbar for webkit browsers */
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
</style>
