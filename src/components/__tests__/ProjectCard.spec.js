import { it, expect, describe } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'

describe('Project Card', () => {
  it('accepts prop valaues', () => {
    const wrapper = shallowMount(ProjectCard, { props: { summary: '', title: 'title' } })
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
