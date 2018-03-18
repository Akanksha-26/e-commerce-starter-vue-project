export default {
  name: 'Admin',
  data () {
    return {
      isMenuItemSelected: false,
      selectedItems: [],
      products: []
    }
  },
  computed: {
    productList () {
      this.products = JSON.parse(JSON.stringify(this.$store.getters['menuStore/menuList']))
      return this.$store.getters['menuStore/menuList']
    }
  },
  methods: {
    //   Function to add new item in local list
    addItem () {
      this.products.push({
        id: this.products.length + 1,
        name: '',
        count: 0,
        price: 0
      })
    },
    // Dispatch action to store to save all changes
    saveChanges () {
      this.products = this.products.filter((x) => x.name !== '' && x.price !== '')
      this.$store.dispatch('menuStore/saveNewItem', this.products)
      this.$router.push({ path: '/' })
    }
  }
}
