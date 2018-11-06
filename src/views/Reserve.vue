<template>
  <div>
    <page-header :title="pageTitle" :subtitle="pageSubtitle" :color="pageColor" />

    <main class="container has-text-left">
      <div class="field">
        <label class="label">Full Name</label>
        <div class="control">
          <input v-model="name" class="input" :class="{'is-danger': isInvalidName}" type="text" placeholder="John Smith">
        </div>
        <p class="help is-danger" v-show="isInvalidName">Please provide your full name</p>
      </div>

      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input v-model="phoneNumber" class="input" type="tel" :class="{'is-danger': isInvalidPhoneNumber}" placeholder="555-555-5555">
        </div>
        <p class="help is-danger" v-show="isInvalidPhoneNumber">This phone number is invalid</p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="email" :class="{'is-danger': isInvalidEmail}" placeholder="john.smith@example.com">
        </div>
        <p class="help is-danger" v-show="isInvalidEmail">This email is invalid</p>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button @click="createReservation" class="button is-link" :disabled="isInvalidNewReso">Make Reservation</button>
        </div>
        <div class="control">
          <button @click="clear" class="button is-text">Cancel</button>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
const PageHeader = () => import('@/components/PageHeader')

export default {
  name: 'Reserve',
  components: {
    PageHeader
  },

  data: () => ({
    pageTitle: 'Reserve',
    pageSubtitle: 'Make your reservation',
    pageColor: 'is-danger',

    name: '',
    phoneNumber: '',
    email: ''
  }),

  computed: {
    newReservation () {
      return {
        customerName: this.name.trim(),
        phoneNumber: this.phoneNumber.trim(),
        customerEmail: this.email.trim()
      }
    },
    isInvalidName () {
      const fullNameRegExr = /(?:(\w+-?\w+)) (?:(\w+))(?: (\w+))?$/g
      return this.name.match(fullNameRegExr) === null
    },
    isInvalidPhoneNumber () {
      const phoneRegExr = /[0-9]{3}[.-][0-9]{3}[.-][0-9]{4}/
      return this.phoneNumber.match(phoneRegExr) === null
    },
    isInvalidEmail () {
      const emailRegExr = /^(?:(?:[\w`~!#$%^&*-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*|\[\d{1,3}.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm
      return this.email.match(emailRegExr) === null
    },
    isInvalidNewReso () {
      return this.isInvalidName || this.isInvalidPhoneNumber || this.isInvalidEmail
    }
  },

  methods: {
    clear () {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
    },
    createReservation () {
      this.$axios.post('/tables', this.newReservation)
        .then(res => this.$router.push({ name: 'tables' }))
    }
  }
}
</script>
