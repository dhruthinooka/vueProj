<template>
  <div @click="userClick('div')">
    <h1 @click.stop.left="userClick('h1')">Hello World</h1>
  </div>
  <input @keyup.enter="mykeyup">
  <form @submit.prevent="formSubmit">
    <button>Submit</button>
  </form>

</template>
<script setup lang="ts">
function userClick(from: string) {
  console.log('click from ', from);
}

function formSubmit() {
  console.log('form submitted');
}

function mykeyup() {
  console.log('mykeyup');
}
</script>
<style></style>
