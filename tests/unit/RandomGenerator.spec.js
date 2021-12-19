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

  test.skip('if number greater than 90 will appear message', () => {})
})
