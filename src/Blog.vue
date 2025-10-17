<template>
  <button @click="$emit('bigger', props.fontSize, 5, 'hello')">+</button>
  <button @click="$emit('smaller')">-</button>
  <p :style="{ fontSize: props.fontSize + 'px' }">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Accusamus architecto assumenda corporis eligendi hic nihil,
    qui soluta! Atque inventore minus modi, nobis perspiciatis tenetur.
    Aspernatur nobis provident quaerat quidem unde.</p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  fontSize: number
}>()

const emit = defineEmits<{
  (e: 'bigger', fontSize: number, inc: number, str: string): void
  (e: 'smaller'): void
}
>()

// const emit = defineEmits({
//   bigger: (fontSize: number, inc: number, str: string) => {
//     return fontSize > 30 ? false : true
//   },
//   smaller: null
// })

// emit('bigger', props.fontSize, 10, 'Hi');
</script>

<style lang="scss" scoped></style>
