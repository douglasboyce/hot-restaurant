<template>
  <div id="app">
    <top-navbar />
    <main class="container is-fullhd">
      <router-view />
    </main>
  </div>
</template>

<script>
const TopNavbar = () => import('@/components/Navbar')

export default {
  name: 'App',
  components: {
    TopNavbar
  }
}
</script>
