import menuStore from './menu-store'

const rootStore = {
  modules: {
    menuStore: {
      ...menuStore,
      namespaced: true
    }
  }
}

export default rootStore
