<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Table #{{ tableNumber }}</p>
    </header>

    <div class="card-content">
      <div class="content">
        <ul class="reso-details has-text-left">
          <li>ID: {{ reso.customerID }}</li>
          <li>Name: {{ reso.customerName }}</li>
          <li>Email: {{ reso.customerEmail }}</li>
          <li>Phone: {{ reso.phoneNumber }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableListItem',

  props: {
    reso: {
      type: Object,
      required: true
    },
    tableNumber: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },

  created () {
    console.log(`Fetch Reso Info using: ${this.id}`)
    this.$axios.get(`/tables/${this.id}`)
      .then(res => console.log(res.data))
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 2rem 0rem;
  }

  .reso-details {
    list-style-type: none;
  }
</style>
