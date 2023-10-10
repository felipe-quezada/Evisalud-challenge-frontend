<script setup>
import { onMounted, ref } from 'vue'
import AcordionComp from './AcordionComp.vue'
import ButtonPrimary from './ButtonPrimary.vue'
import axios from 'axios'

const teachers = ref(null)
onMounted(() => {
  axios
    .get('https://61c34f6f9cfb8f0017a3ead1.mockapi.io/api/v1/doctors')
    .then((response) => (teachers.value = response.data))
})
</script>

<template>
  <section class="text-white text-center pt-4 -z-20 lg:px-[150px]">
    <div class="flex items-center justify-center">
      <h3
        class="font-bold relative z-20 after:content-[''] after:bg-sky-primary after:absolute after:h-2 after:w-32 after:left-0 after:ml-1.5 after:bottom-0.5 after:-z-10 after:rounded-full lg:text-4xl lg:after:w-[269px] lg:after:h-3 lg:after:bottom-0 lg:after:ml-7 lg:mb-8"
      >
        Nuestros docentes
      </h3>
    </div>
    <ul>
      <div v-for="teacher in teachers" :key="teacher.id">
        <AcordionComp :name="teacher.name" :prof="teacher.job" :img="teacher.image">
          <p>{{ teacher.description }}</p>
          <br />
          <div class="flex justify-between w-full space-x-6">
            <ButtonPrimary
              :to="teacher.linkedin"
              text="Linkedin"
              class="w-40 font-semibold text-xs"
            />
            <ButtonPrimary
              :to="teacher.posts"
              text="Mira sus publicaciones"
              class="w-40 font-semibold text-xs"
            />
          </div>
        </AcordionComp>
      </div>
    </ul>
  </section>
</template>
