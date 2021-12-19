// Mounting // mount, shallowMount
// Selectors // wrapper.find('select_element')
// Triggers
// Assertions / Matchers (jest)

// Selector
// ref, tag (p, input, span), class, id, data-testid

import Greeting from '@/components/Greeting'
import { mount } from '@vue/test-utils'

let wrapper

describe('Greeting', () => {
  beforeEach(() => {
    wrapper = mount(Greeting)
  })

  test('p greetings will not show at first', () => {
    const elementP = wrapper.find('[data-testid="greet"]')
    expect(elementP.exists()).toBeFalsy()
  })

  test('p greetings will show with data user typed on textfield', async () => {
    let name = 'John Doe'
    const button = wrapper.find('button')

    wrapper.find('input').setValue(name)
    await button.trigger('click')

    expect(wrapper.find('[data-testid="greet"]').text()).toContain(name)
  })
})
