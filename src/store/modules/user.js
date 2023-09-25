
const user = {
  state: {
    info: null
  },

  mutations: {
    getInfo(state) {
      state.info = JSON.parse(localStorage.getItem('userInfo'))
    }
  },

  getters: {
    userInfo(state) { 
      return state.info
    }
  }
}

export default user





