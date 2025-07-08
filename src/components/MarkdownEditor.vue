<template>
  <div class="flex flex-col h-full">
    <textarea
      ref="textareaRef"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition-colors resize-none custom-scroll"
      placeholder="Start typing your markdown here..."
    ></textarea>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'

export default {
  name: 'MarkdownEditor',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, expose }) {
    const textareaRef = ref(null)
    const insertTextAtCursor = async (text) => {
      const textarea = textareaRef.value
      if (!textarea) return
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newText = props.modelValue.substring(0, start) + text + props.modelValue.substring(end)
      emit('update:modelValue', newText)
      await nextTick()
      textarea.focus()
      textarea.selectionStart = textarea.selectionEnd = start + text.length
    }
    expose({
      insertTextAtCursor,
    })
    return {
      textareaRef,
    }
  },
}
</script>
