<template>
  <div class="flex items-center gap-3">
    <button
      @click="$emit('toggle-help')"
      class="px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"
    >
      Cheatsheet
    </button>
    <button
      @click="$emit('toggle-templates')"
      class="px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 transition-colors"
    >
      Templates
    </button>

    <div class="relative">
      <button
        @click="toggleExportMenu"
        class="px-3 py-1 rounded-md text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-700 flex items-center gap-1"
      >
        Export <span>▼</span>
      </button>
      <div
        v-if="showExportMenu"
        class="absolute mt-2 right-0 w-40 bg-white dark:bg-slate-800 border dark:text-slate-200 border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10"
      >
        <ul class="text-sm text-left">
          <li>
            <button
              @click="$emit('download-md')"
              class="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Download .MD
            </button>
          </li>
          <li>
            <button
              @click="$emit('download-html')"
              class="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Download .HTML
            </button>
          </li>
          <li>
            <button
              @click="$emit('download-txt')"
              class="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Download .txt
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderActions',
  emits: ['toggle-help', 'toggle-templates', 'download-md', 'download-html', 'download-txt'],
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
      }
    },
  },
}
</script>
