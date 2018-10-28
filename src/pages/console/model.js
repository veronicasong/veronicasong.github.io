import produce from 'immer'
import api from '../../api'
import request from '../../api/request'

export default {
  namespace: 'console',

  state: {

  },

  effects: {
    *login({ payload }, { call, put }) {
      const { data, success, message } = yield request(api.console.login, {
        method: 'POST',
        body: JSON.stringify(payload)
      })
      if (success) {
        localStorage.setItem('token', data)
        return true
      } else {
        console.log('api error: ', message)
      }
      return false
    },

  },

  reduer: {
    save(state, action) {
      return produce(state, draft => {
        draft = { ...draft, ...action.payload }
      })
    },

  }
}