<template>
  <section class="grid items-cemter grid-cols-2">
    <img src="{{ img }}" alt="{{ title }}" />
    <div>
      <h3>{{ titie }}</h3>
      <p>{{ summary }}</p>
      <a href="">View website</a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  titie: { type: String, required: true },
  link: { type: String, required: true },
  img: { type: String, required: true },
  summary: { type: String, required: true }
})
</script>
