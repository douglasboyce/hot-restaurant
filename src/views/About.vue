<template>
  <div class="about">
    <page-header title="About" color="is-warning" />
  </div>
</template>

<script>
const PageHeader = () => import('@/components/PageHeader')

export default {
  name: 'About',
  components: {
    PageHeader
  }
}
</script>
