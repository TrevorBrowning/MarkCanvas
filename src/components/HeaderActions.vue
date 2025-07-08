<template>
  <div ref="exportMenuContainer" class="flex items-center gap-3">
    <button
      @click="$emit('toggle-help')"
      class="px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"
    >
      Help
    </button>
    <button
      @click="$emit('toggle-templates')"
      class="px-3 py-1 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-700 transition-colors"
    >
      Templates
    </button>

    <div class="relative">
      <button
        @click="showExportMenu = !showExportMenu"
        class="px-3 py-1 rounded-md text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-700 flex items-center gap-1"
      >
        Export <span>▼</span>
      </button>
      <Transition>
        <div
          v-if="showExportMenu"
          class="absolute mt-2 right-0 w-40 bg-white dark:text-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10"
        >
          <ul class="text-sm text-left">
            <li>
              <button
                @click="$emit('download-md')"
                class="w-full text-left px-4 py-2 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
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
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useClickOutside } from '../composables/useClickOutside'

defineEmits(['toggle-help', 'toggle-templates', 'download-md', 'download-html', 'download-txt'])

const showExportMenu = ref(false)

const exportMenuContainer = ref(null)

useClickOutside(exportMenuContainer, () => {
  showExportMenu.value = false
})
</script>
