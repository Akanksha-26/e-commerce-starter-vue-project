import counter from '../counter/counter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    'counter': counter
  },
  data () {
    return {
      isMenuItemSelected: false,
      selectedItems: []
    }
  },
  computed: {
    ...mapGetters({
      products: 'menuStore/menuList'
    })
  },
  methods: {
    // Event when user adds an item
    selectMenuItems (selectedItem) {
      this.isMenuItemSelected = true
      let selectedObj = Object.assign({}, this.products.find((item) => item.id === selectedItem.id))
      selectedObj.count++
      this.$store.dispatch('menuStore/changeSelectedMenuItems', selectedObj)
    },
    // Event emmited when counter is changed
    onChangeQty (selectedItem) {
      let selectedObj = Object.assign({}, this.products.find((item) => item.id === selectedItem.id))
      selectedObj.count = selectedItem.count
      this.$store.dispatch('menuStore/changeSelectedMenuItems', selectedObj)
    },
    // Route to next page
    proceedToCheckout () {
      this.$router.push({ path: 'checkout' })
    }
  }
}
