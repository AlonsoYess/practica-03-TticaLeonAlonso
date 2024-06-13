<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-black text-white">
      <q-toolbar dense>
        <div class="q-gutter-xs q-layout">
          <div class="flex items-center">
            
              <img src="src/assets/imagenes/logoCarro.jfif" alt="Logo" class="logo-img">
           
                <q-toolbar-title q-toolbar-title class="text-center q-ml-sm">Venta de Autos</q-toolbar-title>

                <q-btn flat round icon="search" class="q-mr-xs" />
            <q-btn flat round icon="shopping_cart" />
          </div>
          
        </div>
      </q-toolbar>
    </q-header>

    

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [

  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style scoped>
.logo-img {
  width: 60px; 
  height: auto; 
}
</style>