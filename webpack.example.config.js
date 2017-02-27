var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var APP_PATH = path.resolve(__dirname,'./example/index.js');
var BUILD_PATH = path.resolve(__dirname, './example/build');
var TMP_PATH = path.resolve(__dirname,'./example/index.html');

module.exports = {
  entry: {
    app: APP_PATH, 
    vendor: ['react','react-dom'] 
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js' //输出js
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename: 'vendor.js'}),
    new webpack.optimize.UglifyJsPlugin({ 
        minimize: true,
        compress:{
            warnings: false,
            drop_debugger: true,
            drop_console: true
        }
    }), 
    new HtmlWebpackPlugin({
        title: 'react-mobile-editor',
        template: TMP_PATH,
        filename: 'index.html',
        chunks: ['app','vendor'],
        inject: 'body'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
      //browser: 'chromium-browser' // mac调试时需要注释该行
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react','stage-2']
      }
    },{
        test: /\.less$/,
        loaders: ['style','css','less']
    },{
		test: /\.(png|jpg|gif)$/,
		loader: 'url-loader?limit=10000&name=build/[name].[ext]'
	}
    ]
  }
};