<template>
  <div class="second">
    <NavBar/>
    <div class="m-3" align="center">
      <h1 style="font-family: ">Projects</h1>
    </div>
    <ProjectComponent/>
    
  </div>
</template>
  
<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import ProjectComponent from '@/components/ProjectComponent.vue'
  
  export default {
    name: 'ProjectView',
    components: {
      NavBar,
      ProjectComponent
    }
  }
</script>
  