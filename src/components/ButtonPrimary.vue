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
    class="p-3 flex justify-center items-center w-full rounded-full bg-sky-primary text-white text-center font-bold"
  >
    <div class="w-3 h-3 mr-2" v-if="img">
      <img class="h-full w-full" :src="img" />
    </div>
    <span>
      {{ text }}
    </span>
  </a>
</template>

<style scoped></style>
