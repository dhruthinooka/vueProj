<template>
  <h3>{{ title }}</h3>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ProductInterface } from './interfaces/product.interface.ts';

const props = defineProps<{
  product: ProductInterface
}>()

console.log(props.product.available)
const title = computed(() => props.product.nameProduct.toUpperCase())

// Fetch the properties without typing
// const props = defineProps(['nameProduct', 'quantity', 'price'])

// Fetch the properties by generic
// const props = defineProps<{
//   // mandatory
//   price: number,
//   nameProduct: string,
//   // optional
//   available?: boolean
// }>()
</script>

<style lang="scss" scoped></style>
