import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import img1 from '@/assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
import AppTestimonial from '../AppTestimonial.vue'

describe('AppTestimonial', () => {
  const testimonialProps = {
    imgSrc: img1,
    alt: "Sarah's Dole profile picture",
    name: 'Sarah Dole',
    nickname: '@srahdole',
    text: 'A dummy text',
    longText: 't'.repeat(1000)
  }

  it('should render properly without read more', () => {
    const wrapper = mount(AppTestimonial, {
      props: testimonialProps
    })

    expect(wrapper.get('img')).toBeDefined()
    expect(wrapper.get('img').attributes('src')).toEqual(testimonialProps.imgSrc)
    expect(wrapper.get('img').attributes('alt')).toEqual(testimonialProps.alt)
    expect(wrapper.text()).toContain(testimonialProps.name)
    expect(wrapper.text()).not.toContain('Read More')
    expect(wrapper.text()).toContain(testimonialProps.nickname)
    expect(wrapper.text()).toContain(testimonialProps.text)
  })

  it('should show read more', () => {
    const wrapper = mount(AppTestimonial, {
      props: { ...testimonialProps, text: testimonialProps.longText }
    })

    expect(wrapper.text()).toContain('Read More')
  })

  it('should toggle the entire text', async () => {
    const wrapper = mount(AppTestimonial, {
      props: { ...testimonialProps, text: testimonialProps.longText }
    })

    expect(wrapper.find('[data-testid="testimonial-text"]')).toBeDefined()
    expect(wrapper.find('[data-testid="testimonial-text"]').classes()).toContain('line-clamp-5')
    // click on read more
    await wrapper.find('[data-testid="readmore-btn"]').trigger('click')
    expect(wrapper.find('[data-testid="testimonial-text"]').classes()).not.toContain('line-clamp-5')
    // click on read more again to toggle classes
    await wrapper.find('[data-testid="readmore-btn"]').trigger('click')
    expect(wrapper.find('[data-testid="testimonial-text"]').classes()).toContain('line-clamp-5')
  })
})
