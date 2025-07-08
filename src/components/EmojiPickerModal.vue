<template>
  <div
    class="fixed inset-0 bg-white/90 dark:bg-gray-900/90 flex justify-center items-center p-4 z-50"
    @click.self="$emit('close')"
  >
    <div class="w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
      <div class="relative flex justify-center items-center mb-4">
        <h2 class="w-full text-center text-xl font-bold text-cyan-600 dark:text-cyan-400">
          Select an Emoji
        </h2>
        <button @click="$emit('close')" class="absolute right-0 text-2xl leading-none">
          &times;
        </button>
      </div>

      <div class="grid grid-cols-8 gap-2 max-h-[50vh] overflow-y-auto custom-scroll">
        <button
          v-for="emoji in emojis"
          :key="emoji"
          @click="$emit('select-emoji', emoji)"
          class="text-2xl rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {{ emoji }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useEscapeKey } from '../composables/useEscapeKey.js'

export default {
  name: 'EmojiPickerModal',
  emits: ['close', 'select-emoji'],

  setup(props, { emit }) {
    useEscapeKey(() => {
      emit('close')
    })

    const emojis = [
      '😊',
      '😂',
      '❤️',
      '👍',
      '🎉',
      '🔥',
      '🚀',
      '🤔',
      '👀',
      '👋',
      '👏',
      '✅',
      '✨',
      '💡',
      '⚠️',
      '💯',
      '🔗',
      '🧑‍💻',
      '💻',
      '📝',
      '📁',
      '📈',
      '⚙️',
      '🌍',
    ]

    return { emojis }
  },
}
</script>
