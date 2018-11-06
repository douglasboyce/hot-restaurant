<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="@/assets/images/fork_and_knife.png" width="28" height="28">
      </router-link>

      <a role="button" @click="toggleDropdownMenu" class="navbar-burger burger" :class="{'is-active': isMenuOpen}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isMenuOpen}">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/tables" class="navbar-item">Tables</router-link>
        <router-link to="/reserve" class="navbar-item">Reserve</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>

      <div class="navbar-end">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    isMenuOpen: false
  }),

  methods: {
    toggleDropdownMenu () {
      console.log(this.isMenuOpen)
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style style="scss" scoped>

</style>
