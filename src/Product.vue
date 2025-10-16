<template>
  <h3>{{ title }} : {{ quantity }}</h3>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

// Fetch the properties without typing
// const props = defineProps(['nameProduct', 'quantity', 'price'])

const props = defineProps({
  nameProduct: {
    type: String,
    required: true,
    // default: 'Apple'
  },
  quantity: Number,
  price: Number,
})

const title = computed(() => props.nameProduct.toUpperCase())
console.log(props.price)
</script>

<style lang="scss" scoped></style>
