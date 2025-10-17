<template>
  <h2>Blog</h2>
</template>

<script lang="ts" setup>
import { reactive, ref, type Ref } from 'vue'

const count = ref(15)
const arrTest = reactive([1, 2, 3, 4, 5]);

function display() {
  console.log('Display');
}
defineExpose<{
  count: Ref<number>,
  arrTest: number[],
  display: () => void
}>({
  count,
  arrTest,
  display
})
</script>

<style lang="scss" scoped></style>
