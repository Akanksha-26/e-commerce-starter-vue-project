export default {
  name: 'Payment',
  data () {
    return {
      name: '',
      cardNumber: '',
      cvv: '',
      showSnackbar: false,
      position: 'center',
      duration: 4000,
      isInfinity: false
    }
  },
  methods: {
    // Event when user clicks on pay button
    pay () {
      if (this.name !== '' && this.cardNumber !== '' && this.cvv !== '') {
        this.showSnackbar = true
        this.$store.dispatch('menuStore/setIntialState')
        this.$router.push({ path: '/' })
      }
    }
  }
}
