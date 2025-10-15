<template>
  <input
    class="input"
    :class="{
      inputOngoing,
      inputError,
      inputValid
    }"
    @focus="
      input.focus = true;
      input.touched = true
    "
    @blur="input.focus = false"
    type="text"
    v-model="input.value"
  />
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'

const input = reactive({
  value: '',
  focus: false,
  touched: false
})
const inputOngoing = computed(() => input.focus
  && input.value.length)
const inputError = computed(() => !input.focus && input.touched
  && input.value.length <= 5)
const inputValid = computed(() => input.touched
  && !input.focus && !inputError.value)
</script>
<style scoped>
.input {
  outline: 0;
  border: 2px solid black;
  border-radius: 4px;
}

.inputOngoing {
  border-color: cadetblue;
}

.inputError {
  border-color: red;
}

.inputValid {
  border-color: green;
}
</style>
