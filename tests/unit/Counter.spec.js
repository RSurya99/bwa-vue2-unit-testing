import Counter from '@/components/Counter.vue'
import { mount } from '@vue/test-utils'

let wrapper
describe('Counter', () => {
  beforeEach(() => {
    wrapper = mount(Counter)
  })

  test('increment the number when the + button clicked', async () => {
    const buttonPlus = wrapper.find('[data-testid="btnPlus"]')
    const currentNumber = wrapper.find('[data-testid="numberTest"]').text()
    buttonPlus.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-testid="numberTest"]').text()).toBe(
      String(Number(currentNumber) + 1)
    )
  })

  test('decrement the number when the - button clicked and current number greater that 0', async () => {
    const buttonMin = wrapper.find('[data-testid="btnMin"]')
    await wrapper.setData({ number: 3 })
    const currentNumber = wrapper.find('[data-testid="numberTest"]').text()
    await buttonMin.trigger('click')
    expect(wrapper.find('[data-testid="numberTest"]').text()).toBe(
      String(Number(currentNumber) - 1)
    )
  })

  test("don't increment the number if - button clicked and current number is 0", async () => {
    const buttonMin = wrapper.find('[data-testid="btnMin"]')
    const currentNumber = wrapper.find('[data-testid="numberTest"]').text()
    buttonMin.trigger('click')
    await wrapper.vm.$nextTick()
    if (currentNumber == 0) {
      expect(wrapper.find('[data-testid="numberTest"]').text()).toBe(
        currentNumber
      )
    }
  })

  test('increase the number by 10 when the + button clicked and current number is 10 or greater', async () => {
    const buttonPlus = wrapper.find('[data-testid="btnPlus"]')
    await wrapper.setData({ number: 10 })
    const currentNumber = wrapper.find('[data-testid="numberTest"]').text()
    await buttonPlus.trigger('click')
    expect(wrapper.find('[data-testid="numberTest"]').text()).toBe(
      String(Number(currentNumber) + 10)
    )
  })

  test('decrease the number by 10 when the - button clicked and current number is 10 or greater', async () => {
    const buttonMin = wrapper.find('[data-testid="btnMin"]')
    await wrapper.setData({ number: 20 })
    const currentNumber = wrapper.find('[data-testid="numberTest"]').text()
    await buttonMin.trigger('click')
    expect(wrapper.find('[data-testid="numberTest"]').text()).toBe(
      String(Number(currentNumber) - 10)
    )
  })
})

// TDD

// Bakalan ada tombol + dan -
// ada satu angka ditengah dua tombol
// angka tidak boleh minus
// semisal angka lebih dari 10, ketika di plus atau kurang dia bakalan kelipatan 10
// red-green test
