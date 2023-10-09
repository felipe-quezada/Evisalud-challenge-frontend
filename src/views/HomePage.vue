<script setup>
import ButtonPrimary from '../components/ButtonPrimary.vue'
</script>

<template>
  <section
    class="h-[442px] bg-bg-mobile bg-cover px-4 pt-[196px] md:bg-bg-desktop text-2xl text-white font-semibold leading-9 relative -z-10"
  >
    <h1>Descubre la Maravilla de la Naturaleza: Nuestros Cursos para un Mundo Más Verde</h1>
    <ButtonPrimary class="w-full h-[45px] mt-10 text-sm" text="Comienza ahora" />
  </section>
  <section class="h-[389px] bg-black px-4 py-16 text-center text-white text-sm">
    <p class="space-y-8">
      Estamos impulsados por la firme creencia de que cada uno de nosotros puede marcar la
      diferencia y contribuir a un mundo más sostenible.
    </p>

    <section class="h-[250px] py-4 px-5 flex flex-wrap justify-between items-center">
      <div class="w-[141px] h-[78] flex flex-col items-center py-3 rounded-md bg-black-primary">
        <span class="text-sky-primary font-bold text-xl">25</span>
        <p class="w-1/2">Cursos online</p>
      </div>
      <div class="w-[141px] h-[78] flex flex-col py-3 rounded-md bg-black-primary">
        <span class="text-sky-primary font-bold text-xl">14</span>
        <p>Programas de formación</p>
      </div>
      <div class="w-[141px] h-[78] flex flex-col py-5 mx-auto rounded-md bg-black-primary sm:mx-0">
        <span class="text-sky-primary font-bold text-xl">12</span>
        <p>Alianzas</p>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
