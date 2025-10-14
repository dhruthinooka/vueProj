<template>
  <input type="text" v-model="text" />
  <h1>{{ text }}</h1>
  <input type="number" v-model="product.quantity" />
  <input type="number" v-model="price" />
  <h1>Prix total HT: {{ totalPriceHT }}</h1>
  <h2>Prix total TTC: {{ totalPriceTTC }}</h2>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from 'vue'

interface Product {
  name: string,
  quantity: number,
  priceHT: number,
  nbrOfModification: number,
  lastModification: number | null
}
const text = ref('')

const product = reactive<Product>({
  name: 'books',
  quantity: 1,
  priceHT: 10,
  nbrOfModification: 0,
  lastModification:  null
})

const price = ref(0);
const totalPriceHT = computed(() => {
  return product.priceHT * product.quantity
})
const totalPriceTTC = computed(() => {
  return product.priceHT * product.quantity * 1.2
})

watch([() => product.quantity, price], (newValue, oldValue) => {
  product.nbrOfModification++;
  console.log(newValue);
  console.log(oldValue);
})

watchEffect(() => {
  console.log('in watchEffect');
  product.priceHT = price.value;
  product.lastModification = Date.now()
  console.log(product);
})
</script>
<style></style>
