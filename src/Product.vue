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
    default: 'Apple',
    validator(value: string): boolean {
      return value.length > 10 ? false : true;
    }
  },
  quantity: Number,
  price: {
    type: Number,
    required: true
  },
  available: Boolean
})

console.log(props.available)

const title = computed(() => props.nameProduct.toUpperCase())
console.log(props.price)
</script>

<style lang="scss" scoped></style>
