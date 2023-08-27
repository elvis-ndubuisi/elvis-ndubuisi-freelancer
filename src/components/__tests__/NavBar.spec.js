import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'
import { RouterLink } from 'vue-router'

describe('Navigation Bar', () => {
  it('renders with style classes of .sticky and .shadow-sm', () => {
    const comp = shallowMount(NavBar)
    expect(comp.classes()).toContain('sticky')
    expect(comp.classes()).toContain('shadow-sm')
  })
  it('renders child element with class styles of .max-w-screem-xl & .flex', () => {
    const comp = shallowMount(NavBar)
    expect(comp.find('section').classes()).toContain('max-w-screen-xl')
    expect(comp.find('section').classes()).toContain('flex')
  })

  describe('renders with clickable Router links', () => {
    it('for home route', () => {
      const wrapper = shallowMount(NavBar)
      const homeLink = wrapper.findComponent(RouterLink) // Find the RouterLink component
      expect(homeLink.exists()).toBeTruthy()
      expect(homeLink.props().to).toBe('/') // Check if the "to" prop is set to "/"
    })

    it('at least 4 routes', () => {
      const wrapper = shallowMount(NavBar)
      const links = wrapper.findAllComponents(RouterLink)
      // Check if there are at least 4 RouterLink components
      expect(links.length).toBeGreaterThanOrEqual(4)
    })

    it('last link should contain text "Let\'s Talk" and to="#contact"', () => {
      const wrapper = shallowMount(NavBar)
      // Get the last RouterLink component
      const lastLink = wrapper.findAllComponents(RouterLink).at(-1)

      // Check if the last link has the "to" prop set to "#contact"
      expect(lastLink.props().to).toBe('#contact')
    })
  })
})
