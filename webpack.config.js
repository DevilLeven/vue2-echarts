

var build = {
  entry: './src/ECharts/ECharts.vue',
  output: {
    path: __dirname,
    filename: 'dist/vue-echarts.js',
    library: 'VueECharts',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  },
  vue: {
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  }
}

module.exports = [ build]
