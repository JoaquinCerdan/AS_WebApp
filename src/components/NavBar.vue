<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <router-link to="/" class="navbar-brand active">Navbar</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <router-link to="/first">
          <b-navbar-brand>
            Posts
          </b-navbar-brand>
        </router-link>

        <router-link to="/second">
          <b-navbar-brand>
            Proyects
          </b-navbar-brand>
        </router-link>

        <router-link to="/third">
          <b-navbar-brand>
            Contact
          </b-navbar-brand>
        </router-link>

        <router-link to="/fourth">
          <b-navbar-brand>
            Option 4
          </b-navbar-brand>
        </router-link>

        <router-link to="/about">
          <b-navbar-brand>
            About me
          </b-navbar-brand>
        </router-link>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default{
  name: 'NavBar',
}
</script>

<style>
.disabled {
    opacity: 0.5;
    pointer-events: none;
}
.active {
    border-bottom: 1px solid white;
}
</style>