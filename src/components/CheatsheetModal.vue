<template>
  <div
    class="fixed inset-0 flex items-center justify-center p-4 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 transition-colors z-50"
  >
    <div
      class="relative w-full max-w-lg rounded-lg bg-gray-50 p-6 shadow-xl text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors sm:p-8"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-cyan-700 dark:text-cyan-400">Markdown Cheatsheet</h2>
        <div>
          <button
            @click="activeCheatSheetTab = 'basic'"
            :class="{
              'font-bold underline text-cyan-700 dark:text-cyan-400':
                activeCheatSheetTab === 'basic',
            }"
            class="px-2 py-1"
          >
            Basic
          </button>
          <button
            @click="activeCheatSheetTab = 'gfm'"
            :class="{
              'font-bold underline text-cyan-700 dark:text-cyan-400': activeCheatSheetTab === 'gfm',
            }"
            class="px-2 py-1"
          >
            GFM
          </button>
        </div>
        <button
          @click="$emit('close')"
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
            <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">~~Strikethrough~~</code> &rarr;
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
          <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">* Unordered item</code></li>
          <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">1. Ordered item</code></li>
        </ul>

        <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Links & Images</h3>
        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>
            <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">[Link Text](https://...)</code>
          </li>
          <li>
            <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">![Alt Text](image.jpg)</code>
          </li>
        </ul>

        <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">Code & Blockquotes</h3>
        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">`inline code`</code></li>
          <li>
            <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">```\ncode block\n```</code>
          </li>
          <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">&gt; Blockquote</code></li>
        </ul>
      </div>

      <div v-if="activeCheatSheetTab === 'gfm'">
        <h3 class="mt-4 mb-2 text-cyan-700 font-bold dark:text-cyan-500">
          GitHub Flavored Markdown (GFM)
        </h3>
        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">- [x] Task list</code></li>
          <li><code class="bg-gray-200 px-1 rounded dark:bg-gray-700">| Table | Header |</code></li>
          <li>
            <code class="bg-gray-200 px-1 rounded dark:bg-gray-700">https://example.com</code>
            &rarr; Autolink
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheatsheetModal',
  emits: ['close'],
  data() {
    return {
      activeCheatSheetTab: 'basic',
    }
  },
}
</script>
