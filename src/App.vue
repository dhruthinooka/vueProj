<template>
  <h1>Bonjour {{ user.name }}</h1>
  <h2>count: {{ count }}</h2>
  <button @click="incCount">Add</button>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const state = reactive( {
  user: {
    name: 'Tarun',
    age: 32,
  }
})

let { user } = state;
let count = ref(0);
function incCount() {
  count.value++;
  user.name = user.name === 'Tarun' ? 'Sita' : 'Tarun';
}
</script>
<style></style>
