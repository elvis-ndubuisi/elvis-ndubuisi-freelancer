<script setup>
import NavBar from '../components/NavBar.vue'
import ProjectCard from '../components/ProjectCard.vue'
import BlogCard from '../components/BlogCard.vue'
import gsap from 'gsap'
import { ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// function captionBeforeEnter(el) {}
</script>

<template>
  <main class="bg-ef-bg min-h-screen text-ef-text">
    <NavBar />

    <section class="w-full min-h-[85vh]">
      <div>
        <h1>Hello, I&apos;m Elvis, <br />Creative & Technical Software Developer.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero cum voluptas?</p>
        <div class="flex items-center gap-4">
          <button>Get in touch</button>
          <button>View all works</button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>

    <aside>stack marguee</aside>

    <section id="page" class="">
      <!-- project screenshot slides from scale(0) bottom to scale(1) top -->
      <h2>Selected Projects</h2>
      <section class="max-w-screen-xl mx-auto px-2 flex flex-col gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </section>

    <section id="page">
      <h2>Distilled about</h2>
      <section>
        <div>
          <h3>Skills</h3>
          <h3>Others</h3>
        </div>
        <div>
          <h2>Elvis Ndubuisi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi vero sequi,
            perferendis cumque qui voluptate. Mollitia iste esse aliquam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam vitae facere sed a sint!
          </p>
        </div>
      </section>
    </section>

    <!-- Blog section -->
    <section id="page">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </section>
  </main>
</template>
