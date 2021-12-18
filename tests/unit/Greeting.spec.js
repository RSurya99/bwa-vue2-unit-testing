// Mounting // mount, shallowMount
// Selectors // wrapper.find('select_element')
// Triggers
// Assertions / Matchers (jest)

import Greeting from '@/components/Greeting'
import { mount } from '@vue/test-utils'

describe('Greeting', () => {
  test('page mount correctly', () => {
    const wrapper = mount(Greeting)
    console.log(wrapper.html)
  })

  test('tag p should exist', () => {
    const wrapper = mount(Greeting)
    const elementP = wrapper.find('p')
    console.log(elementP.html())
  })

  test('p greetings will not show at first', () => {
    const wrapper = mount(Greeting)
    const elementP = wrapper.find('[data-testid="greet"]')
    expect(elementP.exists()).toBeFalsy()
  })

  test('p greetings will show when button clicked', async () => {
    const wrapper = mount(Greeting)
    const button = wrapper.find('button')

    expect(wrapper.find('[data-testid="greet"]').exists()).toBeFalsy()
    await button.trigger('click')
    expect(wrapper.find('[data-testid="greet"]').exists()).toBeTruthy()
  })

  test('greetings to user on textfield', async () => {
    let name = 'John Doe'
    const wrapper = mount(Greeting)
    const button = wrapper.find('button')

    wrapper.find('input').setValue(name)
    await button.trigger('click')

    expect(wrapper.find('[data-testid="greet"]').text()).toContain(name)
  })
})
