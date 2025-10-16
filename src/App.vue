<template>
  <ul>
<!--    access elements of an object using 'for'-->
    <li v-for="(fruit, index) in fruits">{{ index }}: {{ fruit }}</li>
    <!--    In the below example, we are only fetching fruit and not the index-->
    <!--    <li v-for="fruit in fruits">{{ fruit }}</li>-->

    <!--    we can also use 'of' in place of 'in' while iterating using for-->
  </ul>
  <ul>
    <!--    we can simply use the standard syntax of 'for'-->
    <li v-for="(user, index) in users">{{ index }}: {{ user.name }}</li>
    <!--    we can deconstruct the user list to directly fetch 'name'-->
    <li v-for="({ name, grades }, index) in users">
      {{ index }}: {{ name }},
      grades: <span v-for="grade of grades"> {{ grade }},</span></li>
  </ul>
<!--  access key-value pair along with index-->
  <ul>
    <li v-for="(value, key, index) of car">
      {{ index }} : {{ key }} : {{ value }}
    </li>
  </ul>
<!--  print a text n times-->
  <ul>
    <li v-for="i in 10">Bonjour!</li>
  </ul>

</template>
<script setup lang="ts">
import { reactive } from 'vue'

const fruits = reactive(['fraise', 'pomme', 'kiwi'])
const users = reactive([
  { name: 'Tintin', grades: [14, 15, 18] },
  { name: 'Julie', grades: [1, 2, 1] },
  { name: 'Paul', grades: [20, 10, 15] },
  { name: 'Sophie', grades: [4, 5, 8] }
])

const car = {
  wheel: 4,
  price: 4000
}
</script>
<style scoped lang="scss"></style>
