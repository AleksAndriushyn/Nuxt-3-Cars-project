<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "default"
})
</script>

<template>
<div class="min-h-screen flex flex-col">
  <header class="shadow-sm bg-white">
    <Navigation/>
  </header>

  <main class="container mx-auto p-4 flex-1">
    <slot/>
  </main>

  <footer class="bg-gray-200 text-gray-600 font-bold text-xs p-4 uppercase">
    &copy; {{ new Date().getFullYear() }} leksus cars
  </footer>
</div>
</template>

<style scoped>

</style>