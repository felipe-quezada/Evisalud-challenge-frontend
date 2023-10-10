<script setup>
const { number, courseTitle, weeksTime } = defineProps({
  number: Number,
  courseTitle: String,
  weeksTime: String
})
</script>

<template>
  <section
    class="flex w-full px-4 py-3 mb-5 items-center bg-black-primary border-2 border-gray rounded-xl text-sm lg:rounded-full lg:text-base"
  >
    <div
      style="background-image: url(src/assets/diamond.svg)"
      class="h-7 w-7 bg-cover flex items-center justify-center text-center font-semibold lg:h-10 lg:w-10"
    >
      <span>{{ number }}</span>
    </div>
    <div class="w-60 mx-auto lg:ml-7 lg:w-auto">
      <h4 class="font-bold">{{ courseTitle }}</h4>
      <span class="text-sm">{{ weeksTime }}</span>
    </div>
  </section>
</template>
