import EmailValidation from '@/components/EmailValidation.vue'
import { mount } from '@vue/test-utils'

let wrapper
describe('EmailValidation', () => {
  beforeEach(() => {
    wrapper = mount(EmailValidation)
  })

  test.each([
    { email: 'abc', hasErrorMessage: true },
    { email: 'test@test.id', hasErrorMessage: false },
    { email: 'abc.abc679@gmail.com', hasErrorMessage: false },
  ])(
    'error message will show when email is invalid',
    async ({ email, hasErrorMessage }) => {
      const button = wrapper.find('[data-testid="btn"]')
      const input = wrapper.find('[data-testid="emailTest"]')

      input.setValue(email)
      button.trigger('click')
      await wrapper.vm.$nextTick()

      expect(wrapper.find('[data-testid="messageTest"]').exists()).toBe(
        hasErrorMessage
      )
    }
  )
})
