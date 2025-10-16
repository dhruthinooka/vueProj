<template>

  <ul>
    <!--    we can use the 'for' and can bind a key -->
    <li v-for="({ name, id }, index) in users" :key="id">{{ index }}: {{ name }}</li>
  </ul>
  <ul>
    <template v-for="({ name, id }) in users" :key="id">
      <li v-if="name != 'Paul'">{{ name }}</li>
    </template>
  </ul>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const users = reactive([
  { name: 'Tintin', id: 1 },
  { name: 'Julie', id: 2 },
  { name: 'Paul', id: 3 },
  { name: 'Sophie', id: 4 }
])

// add a user to the users object after 3 sec
setTimeout(() => {
  users.push(
    {
      name: 'Christine',
      id: 1
    })
}, 3000)

</script>
<style scoped lang="scss"></style>
