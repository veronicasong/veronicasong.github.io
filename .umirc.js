const path = require('path')

export default {
  // history: 'hash',
  alias: {
    'services': path.resolve(__dirname, 'src/services/'),
    'decorators': path.resolve(__dirname, 'src/decorators/')
  },
  publicPath: '/dist/',
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dynamicImport: true
    }]
  ]
}