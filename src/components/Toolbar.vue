<template>
  <div class="flex items-center gap-2">
    <button
      @click="$emit('toggle-emojis')"
      class="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
    >
      😊
    </button>
    <button
      @click="$emit('copy')"
      class="bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
    >
      {{ copyText }}
    </button>
    <button
      @click="$emit('clear')"
      class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
    >
      Clear
    </button>
    <button
      @click="$emit('toggle-help')"
      class="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
    >
      Help
    </button>
    <button
      @click="$emit('toggle-templates')"
      class="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
    >
      Templates
    </button>

    <div class="relative">
      <button
        @click="toggleExportMenu"
        class="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
      >
        Export ▼
      </button>
      <div
        v-if="showExportMenu"
        class="absolute mt-1 right-0 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-md z-10"
      >
        <ul class="text-sm text-left">
          <li>
            <button
              @click="$emit('download-md')"
              class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Download .MD
            </button>
          </li>
          <li>
            <button
              @click="$emit('download-html')"
              class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Download .HTML
            </button>
          </li>
          <li>
            <button disabled class="w-full text-left px-4 py-2 text-gray-400 cursor-not-allowed">
              Print to PDF (Coming Soon)
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppToolbar',
  props: {
    copyText: {
      type: String,
      default: 'Copy',
    },
  },

  emits: [
    'copy',
    'clear',
    'toggle-help',
    'toggle-templates',
    'download-md',
    'download-html',
    'toggle-emojis',
  ],
  data() {
    return {
      showExportMenu: false,
    }
  },
  methods: {
    toggleExportMenu() {
      this.showExportMenu = !this.showExportMenu

      if (this.showExportMenu) {
        document.addEventListener('click', this.closeMenuOnOutsideClick, { once: true })
      }
    },
    closeMenuOnOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.showExportMenu = false
      } else {
        document.addEventListener('click', this.closeMenuOnOutsideClick, { once: true })
      }
    },
  },
}
</script>
