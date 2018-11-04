import { message } from 'antd'
import api from '../api'
import request from '../api/request'

const POST_PARAMS = body => ({
  method: 'POST',
  headers: {
    Authorization: localStorage.getItem('token'),
  },
  body,
})

export default {
  namespace: 'common',

  state: {},

  effects: {
    *clap({ payload }, { call, put }) {
      const { data, success, message: msg } = yield request(
        api.media.clap,
        POST_PARAMS(JSON.stringify(payload))
      )
      if (success) {
        yield put({
          type: 'updateClaps',
          payload,
        })
      } else {
      }
    },
    *favs({ payload }, { call, put }) {
      const { data, success, message: msg } = yield request(
        api.media.fav,
        POST_PARAMS(JSON.stringify(payload))
      )
      if (success) {
        yield put({
          type: 'updateFavs',
          payload,
        })
      } else {
      }
    },
    *getMediaByCategory({ payload }, { call, put }) {
      const { category, _id } = payload
      const { data, success, message: msg } = yield request(api.media.byCategory(category, _id))
      if (success) {
        yield put({
          type: 'save',
          payload: {
            key: payload.category,
            data,
          },
        })
        return data
      } else if (payload.console) {
        message.error(msg)
      }
    },

    *postMedia({ payload }, { call, put }) {
      const { data, success, message: msg } = yield request(
        api.console.media.post,
        POST_PARAMS(JSON.stringify(payload))
      )
      if (success) {
        return true
      } else {
        message.error(msg)
        return false
      }
    },

    *updateMedia({ payload }, { call, put }) {
      const { data, success, message: msg } = yield request(
        api.console.media.update,
        POST_PARAMS(JSON.stringify(payload))
      )
      if (success) {
        return true
      } else {
        message.error(msg)
        return false
      }
    },

    *uploadFileToOss({ payload }, { call, put }) {
      const { data, success, message: msg } = yield request(
        api.console.oss.post,
        POST_PARAMS(payload)
      )
      if (success) {
        return data
      } else {
        message.error(msg)
      }
    },
  },

  reducers: {
    save(state, action) {
      state[action.payload.key] = action.payload.data
    },
    updateClaps(
      state,
      {
        payload: { _id, category },
      }
    ) {
      const media = state[category].find(v => v._id === _id)
      media.meta.claps = media.meta.claps + 1
    },
    updateFavs(
      state,
      {
        payload: { _id, category },
      }
    ) {
      const media = state[category].find(v => v._id === _id)
      media.meta.favs = media.meta.favs + 1
    },
  },
}
