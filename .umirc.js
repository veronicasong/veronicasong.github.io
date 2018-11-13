const path = require('path')

export default {
  history: 'hash',
  alias: {
    services: path.resolve(__dirname, 'src/services/'),
    decorators: path.resolve(__dirname, 'src/decorators/'),
    components: path.resolve(__dirname, 'src/components/'),
    resources: path.resolve(__dirname, 'src/resources/'),
    utils: path.resolve(__dirname, 'src/utils/'),
  },
  publicPath: '/dist/',
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: {
          loadingComponent: './components/DynamicLoadingComponent.js',
        },
      },
    ],
  ],
}
