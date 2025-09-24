<template>
  <h1 @click="userClick">Hello World</h1>
  <input @input="userInput($event, 'world')" type="text" />
</template>
<script setup lang="ts">
function userClick(event: MouseEvent) {
  console.log(event)
}

function userInput(event: Event, str: string) {
  console.log(str)
}
</script>
<style></style>
