<template>
  <h1>{{ title }}</h1>
  <p :class="$attrs.class">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor iste minus molestias nulla
    pariatur quaerat quia ratione reiciendis vel! Ad amet at cupiditate eius excepturi odit quis sed
    tempora!
  </p>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<style lang="scss" scoped></style>
