<template>
<!--  title will be rendered once and not updated later-->
  <h1 v-once>{{ title }}</h1>
<!--  Vue stores title in cache and it reevaluates only if it changes-->
  <div v-memo="title">
    <p>{{ title }}</p>
    <h1></h1>
    <ul></ul>
  </div>
  <input v-model="input" type="text" />

  <p>{{ input }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const title = ref('I am a title');
const input = ref('');
</script>
<style scoped lang="scss"></style>
