<script setup lang="ts">
import vector1 from '~/assets/images/vector.png'
import ellipse from '~/assets/images/ellipse.png'

const menu = [
  {name: 'Accueil', link: '#'},
  {name: 'Qui suis-je ?', link: '#'},
  {name: 'Ma Stack', link: '#'},
  {name: 'Contact', link: '#'},
]
</script>

<template>
  <div>
    <div class="bg-slate-900 h-screen" :style="{ backgroundImage: `url(${vector1})` }">
      <nav class="flex justify-between py-4 container mx-auto">
        <div class="">
          <img src="~/assets/images/logo.png" alt="AAA">
        </div>

        <div class="flex font-custom w-full items-center justify-end space-x-5">
          <div class="flex">
            <div v-for="m in menu" class="py-1 px-4">
              <a href="#" class="text-white hover:text-cyan-500">{{ m.name }}</a>
            </div>
          </div>
          <div class="flex justify-around space-x-4">
            <button class="bg-transparent border rounded-full text-white py-1 px-4 flex items-center space-x-2">
              <Icon name="material-symbols:settings-phone" class="text-white"/>
              <span>Discutons ?</span>
            </button>
            <button class="bg-cyan-600 border rounded-full text-white py-1 px-4 font-custom">Télécharger mon CV</button>
          </div>
        </div>
      </nav>
      <div class="grid grid-cols-2 items-center container mx-auto mt-10">
        <div class="flex space-y-8 flex-col bg-center bg-cover" >
          <h1 class="text-white text-4xl font-custom">Hi ! I am</h1>
          <h1>
            <span class="font-extrabold text-cyan-500 font-title text-7xl">Duorli Nebel</span>
            <br>
            <span class="font-extrabold text-white font-title text-7xl ">Massengo</span>
          </h1>
          <p class="text-white text-2xl font-custom">Expert Tech Lead Fullsatck</p>
          <div>
            <p class="text-white text-lg font-custom">Je suis un développeur web fullstack passionné par la création de
              sites web et d'applications web modernes et performantes.</p>
            <p class="text-white text-lg font-custom">Je suis spécialisé dans le développement de sites web et
              d'applications web modernes et performantes.</p>

          </div>

          <div>
            <button class="bg-cyan-600 border rounded-full text-white py-1 px-4 font-custom animate-bounce flex items-center space-x-2">
              <Icon name="material-symbols:download-rounded" class="text-white"/>
              <span>
                 Télécharger mon CV
              </span>

            </button>
          </div>

        </div>
        <div class="flex items-center justify-center h-full">
          <img src="https://deneb-reactjs.tortoizthemes.com/assets/banner_1-CZKWZCWg.png" alt="">
        </div>
      </div>
    </div>
  </div>

  <div>
    ss
  </div>


</template>

<style scoped>

</style>