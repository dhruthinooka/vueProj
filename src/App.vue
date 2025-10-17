<template>
  <Blog @bigger="incSize" @smaller="fontSize--" :fontSize="fontSize"/>
</template>
<script setup lang="ts">
import Blog from './Blog.vue'
import { ref } from 'vue'

const fontSize = ref(16)

function incSize(inc: number) {
  fontSize.value += inc;
}
</script>
<style scoped lang="scss"></style>
