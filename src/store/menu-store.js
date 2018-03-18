import Vue from 'vue'
// import intialState from './intialState.js'

let intialState = {
  menu: [
    {
      'id': 1,
      'name': 'Hamburger',
      'price': 500,
      'count': 0
    },
    {
      'id': 2,
      'name': 'Fries',
      'price': 100,
      'count': 0
    },
    {
      'id': 3,
      'name': 'Coke',
      'price': 50,
      'count': 0
    },
    {
      'id': 4,
      'name': 'Pepsi',
      'price': 50,
      'count': 0
    }
  ],
  selectedItems: []
}

const foundItemIndex = function (array, payload) {
  return array.findIndex(o => o.id === payload.id)
}

const state = {
  menu: [],
  selectedItems: []
}
const getters = {
  menuList: state => state.menu,
  selectedItemsList: state => state.selectedItems,
  totalCost: state => {
    if (state.selectedItems.length > 0) {
      return state.selectedItems.map(item => item.totalCost).reduce((prev, next) => prev + next)
    }
    return 0
  }
}
const mutations = {
  SET_SELECTED_ITEMS (state, payload) {
    let index = state.menu.findIndex(o => o.id === payload.id)
    state = Object.assign(state, {
      'menu': [...state.menu.slice(0, index), payload, ...state.menu.slice(index + 1)]
    })
  },
  SET_TOTAL_PRICE (state, payload) {
    let i = foundItemIndex(state.selectedItems, payload)
    if (payload.count > 0) {
      let {name, price, count, id} = payload
      let selectedObj = {
        id,
        name,
        count,
        totalCost: price * count
      }
      if (i > -1) {
        Vue.set(state.selectedItems, i, selectedObj)
      } else {
        state.selectedItems.push(selectedObj)
      }
    } else {
      state.selectedItems.splice(i, 1)
    }
  },
  SET_INTIAL_STATE (state) {
    state = Object.assign(state, {
      'menu': intialState.menu,
      'selectedItems': intialState.selectedItems
    })
  },
  SAVE_ITEM (state, payload) {
    console.log(payload)
    intialState = Object.assign(intialState, {
      menu: payload
    })
  }
}
const actions = {
  changeSelectedMenuItems ({ commit, state }, selectedMenuItem) {
    commit('SET_SELECTED_ITEMS', selectedMenuItem)
    commit('SET_TOTAL_PRICE', selectedMenuItem)
  },
  setIntialState ({ commit }) {
    commit('SET_INTIAL_STATE')
  },
  saveNewItem ({ commit }, payload) {
    commit('SAVE_ITEM', payload)
    commit('SET_INTIAL_STATE')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
// export default menuStore
