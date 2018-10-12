import api from '../api'
import request from '../api/request'

class CommonService {

  getListByCategory = async category => {
    const url = api[category].all
    const { data, success, message } = await request(url)
    if (success) {
      return data
    } else {
      console.log('api error: ', message)
    }
  }
}

const service = new CommonService()

export default service