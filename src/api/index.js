const PROTOCOL = 'http'
const ADDRESS = '106.14.13.38/api'

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `${PROTOCOL}://${ADDRESS}`

const api = {
  meals: {
    all: `${baseUrl}/meals`,
  }
}

export default api