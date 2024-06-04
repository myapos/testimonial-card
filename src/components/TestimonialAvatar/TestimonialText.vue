<template>
  <blockquote
    :class="[
      'font-normal text-base text-neutral-600 ',
      ...(showFullText ? ['line-clamp-none'] : ['line-clamp-5'])
    ]"
    tabindex="0"
  >
    {{ text }}
  </blockquote>
  <button
    v-if="showReadMore"
    id="readmore-btn"
    class="block text-start hover:text-neutral-600"
    @click="toggleShowFullText"
  >
    Read More
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestimonialText',
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    showFullText: {
      type: Boolean,
      required: true,
      default: false
    },
    showReadMore: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  emits: ['toggleShowFullText'],
  methods: {
    toggleShowFullText() {
      this.$emit('toggleShowFullText')
    }
  }
})
</script>

<style scoped></style>
