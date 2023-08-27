<script setup>
import { onMounted, ref } from 'vue'

const pos = ref({
  x: 0,
  y: 0
})

function beforeEnter(el) {
  console.log(el)
}

function enter(el) {
  console.log(el)
}

onMounted(() => {
  document.addEventListener('mousemove', (event) => {
    pos.value.x = event.clientX
    pos.value.y = event.clientY
  })
})
</script>

<template>
  <Transition @before-enter="beforeEnter" @enter="enter">
    <div>
      <div class="bg-ef-accent w-6 h-6 rounded-full absolute top-0 left-0" />
      <div class="bg-ef-accent w-6 h-6 rounded-full absolute top-0 left-0" />
      <div class="bg-ef-accent w-6 h-6 rounded-full absolute top-0 left-0" />
      <div class="bg-ef-accent w-6 h-6 rounded-full absolute top-0 left-0" />
      <div class="bg-ef-accent w-6 h-6 rounded-full absolute top-0 left-0" />
    </div>
  </Transition>
</template>
