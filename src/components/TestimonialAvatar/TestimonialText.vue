<template>
  <div>{{ text }}</div>
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
    }
  }
})
</script>

<style scoped></style>
