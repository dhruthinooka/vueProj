<template>
  <h1>{{ getTitle() }}</h1>
  <input :type="getType()" />
</template>
<script setup lang="ts">
function getTitle() {
  return 'Un Titre!'
}
function getType() {
  return 'number'
}
</script>
<style></style>
