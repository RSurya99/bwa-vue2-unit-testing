import RandomGenerator from '@/components/RandomGenerator.vue'
import { mount } from '@vue/test-utils'

let wrapper

describe('RandomGenerator', () => {
  beforeEach(() => {
    wrapper = mount(RandomGenerator)
  })

  test('number will show when the button clicked', async () => {
    const button = wrapper.find('[data-testid="btn"]')
    button.trigger('click')

    // wait until the DOM get re render
    await wrapper.vm.$nextTick()

    expect(
      wrapper.find('[data-testid="randomNumberTest"]').exists()
    ).toBeTruthy()
  })

  test('if number greater than 90 will appear message', async () => {
    const button = wrapper.find('[data-testid="btn"]')
    button.trigger('click')
    await wrapper.vm.$nextTick()
    const randomNumber = wrapper.find('[data-testid="randomNumberTest"]').text()
    if (randomNumber > 90) {
      expect(wrapper.find('[data-testid="messageTest"]').exists()).toBeTruthy()
    } else {
      expect(wrapper.find('[data-testid="messageTest"]').exists()).toBeFalsy()
    }
  })
})
