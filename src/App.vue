<template>
  <Product :name-product="product" :quantity="quantity" :price="1500"/>
</template>
<script setup lang="ts">
// Local component by importing as below
import Product from './Product.vue';
import { ref } from 'vue'

const product = ref('Moto')
const quantity = ref(1)

</script>
<style scoped lang="scss"></style>
