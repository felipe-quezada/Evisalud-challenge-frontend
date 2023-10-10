<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <section
    class="h-500 w-full px-10 py-6 flex flex-col items-center font-normal text-sm text-center text-white bg-black-primary"
  >
    <div class="w-full flex justify-between items-center py-4">
      <img class="w-[107px] h-[41px]" src="@/assets/logo.svg" alt="logo" />
      <div class="text-left space-y-4">
        <strong>Contacto:</strong>
        <div class="flex">
          <img class="mr-2" src="@/assets/mail.svg" alt="mail" /> <span>ejemplo@gmail.com</span>
        </div>
        <div class="flex">
          <img class="mr-2" src="@/assets/telephone.svg" alt="telephone" />
          <span>+51 78910112</span>
        </div>
      </div>
    </div>
    <hr class="w-full border-gray" />
    <strong class="font-bold mt-5">Síguenos en nuestras redes:</strong>
    <div class="w-full flex my-6 items-center justify-between">
      <a href="https://www.facebook.com/">
        <img src="@/assets/facebook.svg" alt="facebook" />
      </a>
      <a href="https://www.instagram.com/">
        <img src="@/assets/instagram.svg" alt="instagram" />
      </a>
      <a href="https://www.youtube.com/">
        <img src="@/assets/youtube.svg" alt="youtube" />
      </a>
      <a href="https://www.linkedin.com/">
        <img src="@/assets/linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://www.tiktok.com/">
        <img src="@/assets/tiktok.svg" alt="tiktok" />
      </a>
      <a href="https://web.whatsapp.com/">
        <img src="@/assets/whatsapp.svg" alt="whatsapp" />
      </a>
    </div>
    <hr class="w-full border-gray" />
    <ul class="w-52 my-10 space-y-5 flex flex-col items-center text-center text-sky-primary">
      <li><a href="#">Preguntas frecuentes</a></li>
      <hr class="w-full border-gray" />
      <li><a href="#">Acerca de nosotros</a></li>
      <hr class="w-full border-gray" />
      <li><a href="#">Trabaja con nosotros</a></li>
    </ul>
    <div class="text-xs space-x-3 mb-8">
      <a href="#">Libro de reclamaciones</a>
      <span>|</span>
      <a href="#">Términos y condiciones</a>
    </div>
    <footer>
      <small class="text-gray">{{ `&copy; ${year} nombre - All Rights Reserved` }}</small>
    </footer>
  </section>
</template>
