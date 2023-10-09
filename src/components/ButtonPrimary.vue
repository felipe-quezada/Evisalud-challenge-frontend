<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  img: String
})
</script>

<template>
  <button class="rounded-full bg-sky-primary text-white font-bold">{{ text }}</button>
</template>

<style scoped></style>
