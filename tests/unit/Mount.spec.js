import Mount from '@/components/Mount.vue'
import { mount, shallowMount } from '@vue/test-utils'
// use shallowMount if you have much child components
// jika menggunakan mount component child akan dirender
// jika menggunakan shallowMount component child akan dibuat stub

test('using mount', () => {
  const wrapper = mount(Mount)
  console.log(wrapper.html())
})

test('using shallow mount', () => {
  const wrapper = shallowMount(Mount)
  console.log(wrapper.html())
})
