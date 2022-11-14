<template>
    <div class="fourth">
      <NavBar/>
      <h1 align="center" class="mt-3">This is the option 4 page</h1>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  
  export default {
    name: 'FourthView',
    components: {
      NavBar
    }
  }
  </script>
  