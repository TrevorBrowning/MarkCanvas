<template>
  <div
    class="fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50"
  >
    <div class="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
      <div class="relative flex justify-center items-center mb-4">
        <h2 class="w-full text-center text-xl font-bold text-cyan-600 dark:text-cyan-400">
          Markdown Templates
        </h2>
        <button @click="$emit('close')" class="absolute right-0 text-2xl leading-none">
          &times;
        </button>
      </div>

      <ul
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto custom-scroll pr-2"
      >
        <li
          v-for="tpl in templates"
          :key="tpl.name"
          class="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700"
        >
          <div class="flex justify-between items-center">
            <span class="font-medium text-gray-800 dark:text-gray-200">{{ tpl.name }}</span>
            <button
              @click="$emit('insert-template', tpl.content)"
              class="text-sm bg-cyan-600 text-white px-3 py-1 rounded-md hover:bg-cyan-700 flex-shrink-0"
            >
              Insert
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TemplatesModal',
  props: {
    templates: {
      type: Array,
      required: true,
    },
  },

  emits: ['close', 'insert-template'],
}
</script>
