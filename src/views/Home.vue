<template>
  <section class="hero is-fullheight-with-navbar is-info is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hot Restaurant
        </h1>
        <h2 class="subtitle">
          We only have 5 tables! Book your seat before they all are gone!
        </h2>

        <div class="text-center">
          <router-link to="/tables" class="button is-primary">View Tables</router-link>
          <router-link to="/reserve" class="button is-danger">Make Reservation</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
