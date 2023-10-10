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
  <section class="bg-black-primary text-white text-center pt-4 -z-20">
    <div class="flex items-center justify-center">
      <h3
        class="font-bold relative z-20 after:content-[''] after:bg-sky-primary after:absolute after:h-2 after:w-32 after:left-0 after:ml-1.5 after:bottom-0.5 after:-z-10 after:rounded-full"
      >
        Nuestros docentes
      </h3>
    </div>
    <ul>
      <div v-for="teacher in teachers" :key="teacher.id">
        <AcordionComp :name="teacher.name" :prof="teacher.job" :img="teacher.image">
          <p>{{ teacher.description }}</p>
          <br />
          <div class="flex justify-between w-full">
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
