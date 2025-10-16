<template>
  <h3>Voiture</h3>
  <ul>
    <li>Prix: 1500</li>
  </ul>
  <button @click="count++">Ajouter une voiture au panier</button>
  <p>Vous avez ajouté {{ count }} voitures</p>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

const count = ref(0);
</script>

<style lang="scss" scoped></style>
