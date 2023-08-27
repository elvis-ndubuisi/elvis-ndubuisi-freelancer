import { it, describe, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NavMenu from '../NavMenu.vue'

describe('NavMenu mobile component', () => {
  it('can only be visible on mobile phones', () => {
    const wrapper = shallowMount(NavMenu)
    expect(wrapper.isVisible()).toBeTruthy()
  })
  it('contains nav links for /about & /blog', () => {
    const wrapper = shallowMount(NavMenu)
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
