<template>
  <Blog v-for="title of titles" :title="title" :key="title"
        class="parent"/>
</template>
<script setup lang="ts">
import Blog from './Blog.vue'
import { ref } from 'vue'

const titles = ref(['a title', 'another title', 'a last title'])
</script>
<style scoped lang="scss"></style>
