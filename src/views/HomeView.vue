<template>
  <div class="home">
    <NavBar/>
    <h1 align="center" class="mt-3">This is the home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
