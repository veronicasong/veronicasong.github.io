import api from '../api'
import request from '../api/request'

class ConsoleService {

  login = async (username, password) => {
    const url = api.console.login
    const { data, success, message } = await request(url, {
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
    if (success) {
      localStorage.setItem('token', data)
    } else {
      console.log('api error: ', message)
    }
  }

  postMediaToCategory = async (category, media) => {
    const url = api.console.media
    const { data, success, message } = await request(url, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({ category, media })
    })

    if (success) {
      console.log('data : ', data );
    } else {
      console.log('api error: ', message)
    }
  }
}

const service = new ConsoleService()

export default service