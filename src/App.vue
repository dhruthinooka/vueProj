<template>
  <Product available :product="product" />
</template>
<script setup lang="ts">
// Local component by importing as below
import Product from './Product.vue'
import { reactive } from 'vue'
import type { ProductInterface } from '@/interfaces/product.interface.ts'

const product = reactive<ProductInterface>({
  available: true,
  price: 1500,
  nameProduct: 'Moto',
})
// const product = ref('Moto')
</script>
<style scoped lang="scss"></style>
