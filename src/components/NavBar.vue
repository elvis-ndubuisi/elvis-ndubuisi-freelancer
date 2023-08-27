<script setup>
import { RouterLink } from 'vue-router'
import NavMenu from './NavMenu.vue'
</script>

<template>
  <header class="sticky top-0 bg-ef-bg/60 backdrop-blur-md z-20 shadow-sm">
    <section
      class="text-ef-text max-w-screen-xl mx-auto flex items-center justify-between px-1 py-3"
    >
      <RouterLink to="/" ref="home-link" class="font-bold text-xl border-2 border-ef-text pl-1"
        >Ndubuisi <span class="font-normal text-white bg-black px-1">Elvis</span></RouterLink
      >

      <nav class="hiddem md:flex items-center gap-4">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <RouterLink
        to="#contact"
        class="font-medium bg-ef-secondary py-1 px-3 rounded border-2 border-ef-text text-ef-text"
      >
        Let's Talk
      </RouterLink>

      <button class="md:hidden">button</button>
      <NavMenu />
    </section>
  </header>
</template>
