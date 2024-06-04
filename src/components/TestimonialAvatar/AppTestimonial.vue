<template>
  <div
    class="flex flex-col justify-center md:justify-start lg:justify-center
      mt-[--testimonial-container-top-margin] w-[--testimonial-container-width] gap-[--gap] bg-white
      p-6 rounded-lg border border-solid border-neutral-200 h-auto mx-auto mb-4
      shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]"
    tabindex="0"
  >
    <div id="profile" class="flex justify-center items-center gap-4 self-stretch" tabindex="0">
      <testimonial-avatar :src="imgSrc" :alt="alt" class="w-12 h-12 object-cover" />
      <testimonial-info :name="name" :nickname="nickname" />
    </div>
    <testimonial-text :text="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestimonialAvatar from './TestimonialAvatar.vue'
import TestimonialInfo from './TestimonialInfo.vue'
import TestimonialText from './TestimonialText.vue'

export default defineComponent({
  name: 'AppTestimonial',
  components: { TestimonialAvatar, TestimonialInfo, TestimonialText },
  props: {
    imgSrc: {
      type: String,
      required: true,
      default: ''
    },
    alt: {
      type: String,
      required: true,
      default: 'profile picture'
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    nickname: {
      type: String,
      required: true,
      default: ''
    },
    text: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>
