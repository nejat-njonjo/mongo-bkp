// disable eslint

const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
}