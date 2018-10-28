import { message } from 'antd';
import api from '../api';
import request from '../api/request';

const POST_PARAMS = body => ({
  method: 'POST',
  headers: {
    Authorization: localStorage.getItem('token')
  },
  body
})

export default {
  namespace: 'common',

  state: {

  },

  effects: {
    *getMediaByCategory({ payload }, { call, put }) {
      const { data, success, message: msg } = yield request(api.media.byCategory(payload.category))
      if (success) {
        yield put({
          type: 'save',
          payload: {
            key: payload.category,
            data
          }
        })
      } else if (payload.console) {
        message.error(msg)
      }
    },

    *postMedia({ payload }, { call, put}) {
      const { data, success, message: msg } = yield request(api.console.media.post, 
        POST_PARAMS(JSON.stringify(payload))
      )
      if (success) {
        return true
      } else {
        message.error(msg)
        return false
      }
    },

    *updateMedia({ payload }, { call, put}) {
      const { data, success, message: msg } = yield request(api.console.media.update, 
        POST_PARAMS(JSON.stringify(payload))
      )
      if (success) {
        return true
      } else {
        message.error(msg)
        return false
      }
    },

    *uploadFileToOss({ payload }, { call, put}) {
      const { data, success, message: msg } = yield request(api.console.oss.post, 
        POST_PARAMS(payload)
      )
      if (success) {
        return data
      } else {
        message.error(msg)
      }
    }
  },

  reducers: {
    save(state, action) {
      state[action.payload.key] = action.payload.data
    }

  }
}