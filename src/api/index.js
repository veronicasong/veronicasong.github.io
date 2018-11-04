const PROTOCOL = 'https'
const ADDRESS = '50percent.fun/api'

const baseUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `${PROTOCOL}://${ADDRESS}`
// const baseUrl = `${PROTOCOL}://${ADDRESS}`

const api = {
  media: {
    byCategory: (category, _id) => `${baseUrl}/media?category=${category}&_id=${_id}`,
    clap: `${baseUrl}/media/clap`,
    fav: `${baseUrl}/media/favs`,
  },
  console: {
    login: `${baseUrl}/console/login`,
    media: {
      post: `${baseUrl}/console/postMedia`,
      update: `${baseUrl}/console/updateMedia`,
    },
    oss: {
      post: `${baseUrl}/console/uploadToOss`,
    },
  },
}

export default api
