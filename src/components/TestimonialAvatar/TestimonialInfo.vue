<template>
  <div>{{ name }} - {{ nickname }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestimonialInfo',
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    nickname: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>

<style scoped></style>
