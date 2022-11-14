<template>
<div>
  <b-navbar toggleable="lg" variant="warning">
    <router-link to="/" class="navbar-brand">Public</router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <router-link to="/admin">
          <b-navbar-brand>
            Posts
          </b-navbar-brand>
        </router-link>

        <router-link to="/adminProject">
          <b-navbar-brand>
            Proyects
          </b-navbar-brand>
        </router-link>

        <router-link to="/adminContact">
          <b-navbar-brand>
            Contact
          </b-navbar-brand>
        </router-link>

        <router-link to="/adminAbout">
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
  name: 'NavbarAdmin',
}
</script>