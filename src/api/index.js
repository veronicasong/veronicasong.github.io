const PROTOCOL = 'https'
const ADDRESS = '50percent.fun/api'

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : `${PROTOCOL}://${ADDRESS}`
// const baseUrl = `${PROTOCOL}://${ADDRESS}`

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