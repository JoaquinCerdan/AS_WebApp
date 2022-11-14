<template>
    <div class="first">
      <NavBar/>
      <h1 align="center" class="mt-3">This is the posts page</h1>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  
  export default {
    name: 'PostView',
    components: {
      NavBar
    }
  }
  </script>
  