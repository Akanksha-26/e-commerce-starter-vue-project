import { Store } from 'vuex'

import rootStore from './root-store'

function makeStore () {
  return new Store({
    ...rootStore,

    strict: true
  })
}

export { makeStore }
