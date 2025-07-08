<template>
  <div
    class="fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50"
  >
    <div
      class="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col max-h-[85vh]"
    >
      <div class="flex-shrink-0 flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-cyan-600 dark:text-cyan-400">Markdown Templates</h2>
        <button @click="$emit('close')" class="dark:text-slate-200 text-2xl leading-none">
          &times;
        </button>
      </div>

      <div class="flex-shrink-0 mb-4">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search templates..."
          class="w-full px-3 py-2 rounded-md border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
        />
      </div>

      <div class="flex-grow min-h-0 overflow-y-auto custom-scroll pr-2">
        <div v-for="(templates, category) in categorizedTemplates" :key="category">
          <h3
            class="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 first:mt-0 mb-2 pt-4 text-center"
          >
            {{ category }}
          </h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div
          v-if="Object.keys(categorizedTemplates).length === 0"
          class="text-center text-slate-500 dark:text-slate-400 py-10"
        >
          No templates found.
        </div>
      </div>
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
  data() {
    return {
      searchTerm: '',
    }
  },
  computed: {
    categorizedTemplates() {
      const search = this.searchTerm.toLowerCase()
      if (!search) {
        return this.templates.reduce((acc, tpl) => {
          const category = tpl.category || 'General'
          if (!acc[category]) {
            acc[category] = []
          }
          acc[category].push(tpl)
          return acc
        }, {})
      }

      const filtered = this.templates.filter(
        (tpl) =>
          tpl.name.toLowerCase().includes(search) ||
          (tpl.category && tpl.category.toLowerCase().includes(search)),
      )

      return filtered.reduce((acc, tpl) => {
        const category = tpl.category || 'General'
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(tpl)
        return acc
      }, {})
    },
  },
}
</script>
