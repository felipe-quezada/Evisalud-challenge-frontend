<script setup>
import ButtonPrimary from '../components/ButtonPrimary.vue'
import CardComponent from '../components/CardComponent.vue'
import TeacherProfiles from '../components/TeacherProfiles.vue'
</script>

<template>
  <section
    class="grid h-[442px] bg-bg-mobile bg-cover px-4 pt-[196px] text-2xl text-white font-semibold leading-9 relative -z-10 lg:px-10 lg:bg-bg-desktop md:text-5xl md:h-auto"
  >
    <h1 class="w-5/6 lg:w-[750px] md:w-[500px] md:mb-16">
      Descubre la Maravilla de la Naturaleza: Nuestros Cursos para un Mundo Más Verde
    </h1>
    <ButtonPrimary
      class="w-full m-auto text-sm mb-8 md:w-[448px] md:ml-0 md:mr-auto md:mb-32"
      to="#"
      text="Comienza ahora"
    />
  </section>
  <section class="bg-black px-4 py-16 text-center text-white text-sm">
    <p class="space-y-8 md:text-xl lg:w-[900px] lg:mx-auto">
      Estamos impulsados por la firme creencia de que cada uno de nosotros puede marcar la
      diferencia y contribuir a un mundo más sostenible.
    </p>

    <section class="h-[250px] py-4 px-5 flex flex-wrap justify-between items-center sm:hidden">
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
    <section
      class="bg-black-primary py-6 my-[60px] text-base justify-between rounded-full hidden sm:w-[350px] sm:mx-auto sm:flex sm:flex-row sm:justify-center sm:text-sm sm:px-10 lg:w-[920px] lg:px-[120px]"
    >
      <div class="flex flex-col items-center mr-auto">
        <span class="text-sky-primary font-bold text-3xl sm:text-xl">25</span>
        <p class="w-1/2 md:w-auto">Cursos online</p>
      </div>
      <hr class="w-[65px] border-gray mt-10 rotate-90" />
      <div class="flex flex-col items-center m-auto">
        <span class="text-sky-primary font-bold text-3xl sm:text-xl">14</span>
        <p>Programas de formación</p>
      </div>
      <hr class="w-[65px] border-gray mt-10 rotate-90" />
      <div class="flex flex-col items-center ml-auto">
        <span class="text-sky-primary font-bold text-3xl sm:text-xl">12</span>
        <p>Alianzas</p>
      </div>
    </section>
  </section>

  <TeacherProfiles />

  <section class="text-white bg-black">
    <div class="flex flex-col items-center justify-center pt-6">
      <h3
        class="mb-10 font-bold relative z-20 after:content-[''] after:bg-sky-primary after:absolute after:h-2 after:w-56 after:left-0 after:ml-1.5 after:bottom-0.5 after:-z-10 after:rounded-full"
      >
        Cursos que incluye el programa
      </h3>
      <div class="w-full px-4">
        <CardComponent
          number="1"
          course-title="Fundamentos de Conservación Ambiental"
          weeks-time="(2 semanas)"
        />
        <CardComponent
          number="2"
          course-title="Energía Renovable: Fuentes y Aplicaciones"
          weeks-time="(2 semanas)"
        />
        <CardComponent
          number="3"
          course-title="Ecoturismo Responsable y Conservación"
          weeks-time="(3 semanas)"
        />
        <CardComponent
          number="4"
          course-title="Manejo Sostenible de Bosque"
          weeks-time="(5 semanas)"
        />
      </div>
      <div
        class="flex flex-col w-5/6 ml-auto mt-10 mb-20 px-6 py-5 space-y-5 rounded-s-3xl bg-sky-primary text-sm"
      >
        <h4 class="font-bold">Inversión</h4>
        <div>
          <strong class="font-bold">$125 (Perú: S/ 420)</strong>
          <span class="block">¡Pregunta por nuestros descuentos!</span>
        </div>
        <ButtonPrimary
          class="h-11 bg-white text-sky-primary!"
          img="src/assets/carShop.svg"
          text="Agregar al carrito"
          to="#"
        />
        <hr class="w-full border-gray" />
        <span>Si tienes dudas o necesitas más información, contáctanos:</span>
        <ButtonPrimary
          class="h-11 bg-white text-sky-primary!"
          img="src/assets/WhatsappBlue.svg"
          text="ir a Whatsapp (+51 990 888 777)"
          to="#"
        />
        <ButtonPrimary
          class="h-11 border-2 border-white"
          img="src/assets/info.svg"
          text="Ir a Preguntas frecuentes"
          to="#"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
