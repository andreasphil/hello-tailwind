<template>
  <div id="app" class="antialiased bg-gray-100 font-sans h-screen py-4 sm:px-4 text-gray-800">
    <app-login/>
  </div>
</template>

<script>
import AppLogin from './components/AppLogin.vue'

export default {
  name: 'app',
  components: {
    AppLogin
  }
}
</script>

<style>
@import url('https://rsms.me/inter/inter.css');

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
