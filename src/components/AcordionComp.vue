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
    <div
      :class="` lg:w-[750px] md:transition md:duration-300 md:text-sm ${
        showMore ? 'lg:translate-x-[200px]' : 'translate-x-0'
      }`"
    >
      <div class="flex">
        <div
          :class="`bg-transparent h-20 w-20 p-1 rounded-full lg:h-[149px] lg:w-[149px] md:border-4 ${
            showMore ? 'border-sky-primary' : 'border-gray'
          } border-2`"
        >
          <img class="rounded-full w-full h-full" :src="img" alt="" />
        </div>
        <div class="ml-4 text-left lg:w-[600px]">
          <strong
            :class="`md:text-base md:font-bold ${showMore ? 'text-sky-primary' : 'text-white'}`"
            >{{ name }}</strong
          >
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
          <div :class="`hidden mt-5 text-left transition md:block ${showMore ? '' : 'md:hidden'}`">
            <slot> </slot>
          </div>
        </div>
      </div>
    </div>

    <hr class="w-full border-gray mt-10" />
    <div :class="`mt-5 text-left transition md:hidden ${showMore ? '' : 'hidden'}`">
      <slot> </slot>
    </div>
  </li>
</template>
