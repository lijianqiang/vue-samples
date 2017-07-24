import placerService from '../../service/placer-service'
import * as types from '../../mutation-types'

const state = {
  params: {},
  placers: [],
  page: 1,
  total: 0
}

const getters = {
  size: state => state.placers.length,
  placers: state => state.placers
}

const actions = {
  vListByCondition ({ commit, state }, query) {
    placerService.listByCondition(query,
      (response) => {
        console.log('onSuccess')
        console.log(response.data.data)
        commit(types.PLACER_SET_LIST_RESPONSE, response.data.data)
      },
      (error) => {
        console.log(error)
      })
  }
}

const mutations = {
  [types.PLACER_SET_LIST_RESPONSE] (state, { data }) {
      state.params = data.params
      state.placers = data.rows
      state.page = data.page
      state.total = data.total
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
