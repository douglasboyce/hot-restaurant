<template>
  <section class="container">
    <table-list-item
      v-for="(reso, index) in list"
      :key="reso.customerID"
      :reso="reso"
      :table-number="index + 1"
      :id="reso.customerID"
    />
  </section>
</template>

<script>
const TableListItem = () => import('@/components/TableListItem')

export default {
  name: 'TableList',
  components: {
    TableListItem
  },

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 2rem 2rem;
  }
</style>
