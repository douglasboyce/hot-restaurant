<template>
  <div>
    <page-header :title="pageTitle" :subtitle="pageSubtitle" :color="pageColor" />
    <main class="container">
      <section-header title="Current Reservations" color="is-info" />
      <table-list :list="currentTables" />

      <section-header title="Waiting List" color="is-info" />
      <table-list :list="waitingList" />
    </main>
  </div>
</template>

<script>
const PageHeader = () => import('@/components/PageHeader')
const SectionHeader = () => import('@/components/SectionHeader')
const TableList = () => import('@/components/TableList')

export default {
  name: 'Tables',
  components: {
    PageHeader,
    SectionHeader,
    TableList
  },

  data: () => ({
    pageTitle: 'Tables',
    pageSubtitle: 'Current Reservations and Waiting List',
    pageColor: 'is-success',
    currentTables: [],
    waitingList: []
  }),

  created () {
    this.$axios.get('/tables')
      .then(res => this.currentTables = res.data)

    this.$axios.get('/waitlist')
      .then(res => this.waitingList = res.data)
  }
}
</script>

<style lang="scss" scoped>

</style>
