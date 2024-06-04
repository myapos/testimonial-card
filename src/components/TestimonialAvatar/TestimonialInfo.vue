<template>
  <section class="flex flex-col gap-px grow">
    <div class="font-semibold text-lg text-neutral-900" tabindex="0">
      {{ name }}
    </div>
    <div class="font-normal text-sm text-neutral-600" tabindex="0">
      {{ nickname }}
    </div>
  </section>
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
