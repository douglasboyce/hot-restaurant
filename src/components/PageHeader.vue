<template>
  <section class="hero is-info is-bold" :class="color">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle" v-if="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: () => null
    },
    color: {
      type: String,
      required: true,
      validator (value) {
        return ['is-primary', 'is-info', 'is-danger', 'is-warning', 'is-success'].includes(value.toLowerCase())
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    margin-bottom: 2rem;
  }
</style>
