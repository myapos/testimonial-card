<template>
  <main class="h-full flex flex-col">
    <app-testimonial
      :imgSrc="imgSrc"
      alt="A profile picture"
      name="Sarah Dole"
      nickname="@sarahdole"
      text="I've been searching for high-quality abstract images for my design projects,
       and I'm thrilled to have found this platform. 
       The variety and depth of creativity are astounding!"
    />
  </main>
  <app-footer author="Myron Apostolakis" username="myapos-598" />
</template>

<script lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppTestimonial from './components/TestimonialAvatar/AppTestimonial.vue'
import imgSrc from './assets/profile-thumbnail.png'

export default {
  name: 'App',
  components: { AppFooter, AppTestimonial },
  data() {
    // set showCardList to true to test a card list approach
    return { imgSrc, showCardList: false }
  }
}
</script>
