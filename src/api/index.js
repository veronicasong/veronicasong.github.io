const PROTOCOL = 'https'
const ADDRESS = '106.14.13.38/api'

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : `${PROTOCOL}://${ADDRESS}`

const api = {
  media: {
    byCategory: category => `${baseUrl}/media?category=${category}`,
  },
  console: {
    login: `${baseUrl}/console/login`,
    media: {
      post: `${baseUrl}/console/postMedia`,
      update: `${baseUrl}/console/updateMedia`,
    },
    oss: {
      post: `${baseUrl}/console/uploadToOss`
    }
  },
}

export default api