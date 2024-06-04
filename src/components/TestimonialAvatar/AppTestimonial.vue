<template>
  <div
    class="blog-card flex flex-col gap-[--gap] justify-between w-[--card-container-width]
      border-neutral-200 bg-white rounded-[--radius] h-auto mx-auto mt-[--card-margin-top] shadow-md
      mb-4"
    tabindex="0"
  >
    <testimonial-avatar :src="imgSrc" :alt="alt" />
    <testimonial-info :name="name" :nickname="nickname" />
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
