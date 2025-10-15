<template>

  <div>
    <h1>Profil</h1>
    <ul v-if="state.user">
      <li>Name: {{ state.user?.name }}</li>
      <li>Age: {{ state.user?.age }}</li>
    </ul>
    <h2 v-else>Chargement ...</h2>
    <input v-model="letter" type="text" />
    <h1 v-if="letter === 'A'">A</h1>
    <h1 v-else-if="letter === 'B'">B</h1>
    <h1 v-else-if="letter === 'C'">C</h1>
    <h1 v-else>Autre</h1>
  </div>

</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const state = reactive<any>({});

setTimeout(() => {
  state.user = {
    name: 'David',
    age: 5,
  }
}, 3000)

const letter = ref('')

</script>
<style scoped lang="scss">
  h1 {
    color: green;
    span {
      color: blue;
    }
  }
</style>
