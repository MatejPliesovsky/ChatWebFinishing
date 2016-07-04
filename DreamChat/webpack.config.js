var webpack = require('webpack');
var path = require('path');
// var config = require('./config');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new ManifestPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  output:{
    path: path.resolve("./build/client"),
    publicPath: "/",
    filename: 'bundle.client.js',
    sourceMapFilename: 'bundle.client.map'
  },
  // resolve: {
  //   root: __dirname,
  //   alias: {
  //     Main: 'views/components/Main.jsx',
  //     AppBar: 'views/components/AppBar.jsx',
  //     Login: 'views/components/Login.jsx',
  //     LoginForm: 'views/components/LoginForm.jsx',
  //     Register: 'views/components/Register.jsx',
  //     RegisterForm: 'views/components/RegisterForm.jsx',
  //     DashBoardComp: 'views/components/DashBoardComp.jsx',
  //     DashBoard: 'views/components/DashBoard.jsx',
  //     ContactListComp: 'views/components/ContactListComp.jsx',
  //     ContactList: 'views/components/ContactList.jsx',
  //     SearchComp: 'views/components/SearchComp.jsx',
  //     UserDeskComp:'views/components/UserDeskComp.jsx',
  //   },
  //   extensions: ['', '.js', '.jsx' ]
  // },
  devtool: '#eval-source-map',
  module: {
    loaders: [
      {
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_module|bower_components)/
      }
    ]
  }
};
