<script setup>
import { ref } from 'vue'

const showMore = ref(false)
const showMoreClicked = () => {
  showMore.value = !showMore.value
}
</script>

<template>
  <section class="bg-black-primary text-white text-center">
    <h3>Nuestros docentes</h3>
    <ul>
      <li class="fpx-4 py-5">
        <div class="flex">
          <div class="bg-transparent h-20 w-20 rounded-full border-gray border-2"></div>
          <div class="ml-4 text-left">
            <strong class="text-white">Nombre cualquiera</strong>
            <span class="block text-gray">Profeción</span>
            <div
              class="flex text-sky-primary underline decoration-solid font-semibold"
              @click="showMoreClicked"
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
        <div :class="`mt-5 text-left px-4 transition ${showMore ? '' : 'hidden'}`">
          <p>
            Arlene es una apasionada geóloga ambiental que ha dedicado su vida a la conservación y
            protección de los ecosistemas naturales. Nacida en una pequeña comunidad rural, desde
            una edad temprana desarrolló un profundo amor por la naturaleza y las maravillas
            geológicas que la componen.
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
