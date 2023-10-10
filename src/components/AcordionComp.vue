<script setup>
import { useBoolean } from '../composables/useBoolean'

const { name, prof } = defineProps({
  img: String,
  name: String,
  prof: String
})
const { booleanState: showMore, setBooleanState } = useBoolean()
</script>

<template>
  <li class="px-4 py-5">
    <div class="flex">
      <div
        :class="`bg-transparent h-20 w-20 p-1 rounded-full ${
          showMore ? 'border-sky-primary' : 'border-gray'
        } border-2`"
      >
        <img class="rounded-full" :src="img" alt="" />
      </div>
      <div class="ml-4 text-left">
        <strong :class="showMore ? 'text-sky-primary' : 'text-white'">{{ name }}</strong>
        <span class="block text-gray">{{ prof }}</span>
        <div
          @click="setBooleanState"
          class="flex text-sky-primary underline decoration-solid font-semibold"
        >
          <button class="" v-if="showMore">Ver menos</button>
          <button class="" v-else>Ver más</button>
          <img
            :class="`ml-2 transition duration-300 ${showMore ? 'rotate-180' : 'rotate-0'}`"
            src="@/assets/arrowDown.svg"
          />
        </div>
      </div>
    </div>
    <hr class="w-full border-gray mt-10" />
    <div :class="`mt-5 text-left transition ${showMore ? '' : 'hidden'}`">
      <slot> </slot>
    </div>
  </li>
</template>
