<script setup>
import { useBoolean } from '../composables/useBoolean'

const { booleanState: isClicked, setBooleanState } = useBoolean()
</script>

<template>
  <section
    class="bg-black-secondary w-full h-[65px] px-[18px] relative flex flex-row justify-between items-center text-gray text-sm"
  >
    <div class="h-[36px] w-[95px]">
      <img src="@/assets/logo.svg" alt="logo" />
    </div>

    <!-- Hamburger menu animated -->
    <div @click="setBooleanState" class="w-[35px] h-[24px] relative md:hidden">
      <div
        :class="`bg-white absolute w-full h-[4px] transition duration-300 top-0 rounded-md ${
          isClicked ? 'rotate-45 translate-y-[12px]' : 'rotate-0'
        }`"
      ></div>
      <div
        :class="`bg-white absolute w-full h-[4px] transition duration-300 top-[12px] rounded ${
          isClicked ? 'scale-x-0' : 'scale-x-100'
        }`"
      ></div>
      <div
        :class="`bg-white absolute w-full h-[4px] transition duration-300 top-[24px] rounded ${
          isClicked ? '-rotate-45 translate-y-[-12px]' : 'rotate-0'
        }`"
      ></div>
    </div>

    <!-- Menu to mobiles -->

    <nav
      :class="`bg-black-secondary w-full px-[24px] text-center absolute md:hidden top-[65.3px] left-0 transition duration-300 origin-top ${
        isClicked ? 'scale-y-100' : 'scale-y-0'
      }`"
    >
      <ul class="space-y-6 py-8">
        <li>
          <button
            role="link"
            href="#"
            class="h-[35px] w-[90px] rounded-full bg-sky-primary text-white font-bold"
          >
            Inicio
          </button>
        </li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Sobre nosotrs</a></li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped></style>
