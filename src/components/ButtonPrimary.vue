<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  to: String,
  img: String
})
</script>

<template>
  <a
    role="button"
    :href="to"
    class="p-3 rounded-full bg-sky-primary text-white text-center font-bold"
    >{{ text }}</a
  >
</template>

<style scoped></style>
