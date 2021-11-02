const path = require('path')
const fs = require('fs')

if (fs.existsSync(path.join(__dirname, 'dist', 'umd'))) {
  fs.rmdirSync(path.join(__dirname, 'dist', 'umd'), { recursive: true })
}

module.exports = {
  devtool: 'source-map',
  entry:  path.join(__dirname, 'src', 'index.ts'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist', 'umd'),
    libraryTarget: 'umd',
    library: 'RPC',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    'lodash': 'lodash'
  }
}
