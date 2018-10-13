const path = require('path')

export default {
  // history: 'hash',
  alias: {
    'services': path.resolve(__dirname, 'src/services/'),
    'decorators': path.resolve(__dirname, 'src/decorators/'),
    'components': path.resolve(__dirname, 'src/components/'),
    'utils': path.resolve(__dirname, 'src/utils/')
  },
  publicPath: '/dist/',
  // base: path.resolve(__dirname, 'dist'),
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dynamicImport: {
        loadingComponent: './components/DynamicLoadingComponent.js'
      }
    }]
  ]
}