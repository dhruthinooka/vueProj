<template>
  <input type="text" v-model="text" />
  <h1>{{ text }}</h1>
  <input type="number" v-model="product.quantity" />
  <h1>Prix total HT: {{ totalPriceHT }}</h1>
  <h2>Prix total TTC: {{ totalPriceTTC }}</h2>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const text = ref('')

const product = reactive({
  name: 'books',
  quantity: 1,
  priceHT: 10,
})
const totalPriceHT = computed(() => {
  return product.priceHT * product.quantity
})
const totalPriceTTC = computed(() => {
  return product.priceHT * product.quantity * 1.2
})
</script>
<style></style>
