<template>
  <div
    class="credits fixed bottom-6 left-1/2 translate-x-[-50%] text-xs text-[--footer-text-color]
      text-center"
    data-gfe-screenshot-exclude="true"
  >
    <span tabindex="0" class="mr-1">A challenge by</span>
    <a
      href="https://www.greatfrontend.com/projects?ref=challenges"
      target="_blank"
      class="font-bold text-black mr-1"
      >GreatFrontEnd Projects</a
    >
    <span tabindex="0" class="mr-1">Built by</span>
    <a
      :href="`https://www.greatfrontend.com/projects/u/${username}`"
      target="_blank"
      class="font-bold text-black"
      >{{ author }}</a
    >.
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppFooter',
  props: {
    author: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
})
</script>
