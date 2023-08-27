<script setup>
import { RouterView } from 'vue-router'
import PageFooter from './components/PageFooter.vue'
import CursorPointer from './components/CursorPointer.vue'
</script>

<template>
  <RouterView />
  <PageFooter />
  <CursorPointer />
</template>
