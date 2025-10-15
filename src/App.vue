<template>
  <button @click="toggle = !toggle">Toggle</button>
  <h1 v-show="toggle">Bonjour le monde!</h1>
  <h2 v-pre> {{ toggle }}</h2>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const toggle = ref(false);

</script>
<style scoped lang="scss">
</style>
