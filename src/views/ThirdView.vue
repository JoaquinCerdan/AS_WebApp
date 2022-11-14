<template>
    <div class="third">
      <NavBar/>
      <h1 align="center" class="mt-3">This is the contact page</h1>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  
  export default {
    name: 'ThirdView',
    components: {
      NavBar
    }
  }
  </script>
  