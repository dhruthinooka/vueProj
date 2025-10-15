<template>
  <h1
    :style="{
      'font-size': fontSize,
      color: color,
    }"
  >
    Bonjour le monde !
  </h1>
  <h2
    :style="h1style"
  >
    Bienvenue !
  </h2>
  <h3 :style="{
      fontSize: btnFontSize + 'px'
  }">
    Boom
  </h3>
  <button @click="btnFontSize += 10">+</button>
  <button @click="btnFontSize -= 10">-</button>
  <h4 :style="[fontSizeStr, colorStr]">Hello</h4>
</template>
<!--un tableau de diff styles-->
<script setup lang="ts">
import { reactive, ref } from 'vue'

// to declare individual reactive props
const fontSize = ref('5px')
const color = ref('red')

// to declare an obj with multiple props as reactive
const h1style = reactive({
  fontSize: '20px',
  color: 'blue'
})

const btnFontSize = ref(10)

const fontSizeStr = ref('font-size:15px;')
const colorStr = ref('color:green;')

</script>
<style scoped></style>
<script setup lang="ts">
</script>
