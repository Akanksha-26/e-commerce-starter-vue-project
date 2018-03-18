export default {
  name: 'counter',
  props: ['qtyObj'],
  data () {
    return {
      quantity: Object.assign({}, this.qtyObj)
    }
  },
  methods: {
    increment () {
      this.quantity.count++
      this.$emit('change', this.quantity)
    },
    decrement () {
      if (this.quantity.count > 0) {
        this.quantity.count--
      }
      this.$emit('change', this.quantity)
    }
  }
}
