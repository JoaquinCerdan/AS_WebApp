<template>
    <div class="first">
      <NavBar/>
      <div class="m-3" align="center">
        <h1 style="font-family: ">Posts</h1>
      </div>
      <PostComponent/>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import PostComponent from '@/components/PostComponent.vue'
  
  export default {
    name: 'PostView',
    components: {
      NavBar,
      PostComponent
    }
  }
  </script>
  