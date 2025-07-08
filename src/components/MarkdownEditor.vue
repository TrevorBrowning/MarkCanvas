<template>
  <div class="relative flex flex-col h-full">
    <div
      v-if="!modelValue"
      class="absolute top-0 left-0 mt-3 px-4 py-3 text-slate-400 dark:text-slate-600 pointer-events-none z-0"
    >
      <p>Start typing your markdown here...</p>
      <p>Use / to view commands</p>
    </div>

    <textarea
      ref="textareaRef"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown="$emit('keydown', $event)"
      class="relative flex-grow min-h-0 w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 transition-colors resize-none custom-scroll z-10"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, nextTick, defineProps, defineEmits, defineExpose } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'keydown'])

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

const wrapText = (prefix, suffix = prefix) => {
  const textarea = textareaRef.value
  if (!textarea) return

  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = props.modelValue.substring(start, end)

  const newText =
    props.modelValue.substring(0, start) +
    prefix +
    selectedText +
    suffix +
    props.modelValue.substring(end)

  emit('update:modelValue', newText)

  nextTick(() => {
    textarea.focus()
    textarea.selectionStart = start + prefix.length
    textarea.selectionEnd = end + prefix.length
  })
}

const insertLink = () => {
  const textarea = textareaRef.value
  if (!textarea) return

  const webText = prompt("Enter the site title")
  if (!webText) return
  const url = prompt('Enter the URL:', 'https://')
  if (!url) return

  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = props.modelValue.substring(start, end) || 'link text'

  const newText =
    props.modelValue.substring(0, start) +
    `[${selectedText}](${url})` +
    props.modelValue.substring(end)

  emit('update:modelValue', newText)

  nextTick(() => {
    textarea.focus()
    textarea.selectionStart = textarea.selectionEnd = start + `[${selectedText}](${url})`.length
  })
}

defineExpose({
  insertTextAtCursor,
  textareaRef,
  wrapText,
  insertLink,
})
</script>
