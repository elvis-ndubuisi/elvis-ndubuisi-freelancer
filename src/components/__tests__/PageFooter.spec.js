import PageFooter from '../PageFooter.vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('Footer component', () => {
  it('renders', () => {
    const comp = mount(PageFooter)
    expect(comp).toBeTruthy()
  })
})
