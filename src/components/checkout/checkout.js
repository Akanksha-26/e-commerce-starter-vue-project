import counter from '../counter/counter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Checkout',
  components: {
    'counter': counter
  },
  data () {
    return {
      selectedItems: [],
      totalCost: 0
    }
  },

  computed: {
    ...mapGetters({
      products: 'menuStore/menuList',
      selectedProducts: 'menuStore/selectedItemsList',
      totalBill: 'menuStore/totalCost'
    })
  },
  methods: {
    // Event when user changes quantity in counter
    onChangeQty (selectedItem) {
      let selectedObj = Object.assign({}, this.products.find((item) => item.id === selectedItem.id))
      selectedObj.count = selectedItem.count
      this.$store.dispatch('menuStore/changeSelectedMenuItems', selectedObj)
    },
    // Event when user has removed all the items
    restartOrder () {
      this.$router.push({ path: 'home' })
    },
    // Event o route user to payment page
    proceedToPay () {
      this.$router.push({ path: 'payment' })
    }
  }
}
