const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin  } = require("clean-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");
 
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/js/app.js"),
    vendors: ["react","react-router","react-dom"]
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve('./public/index.html')],
        use: {
            loader: 'file-loader',
            query: {
                name: '[name].[ext]'
            },
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      htmlWebpackPlugin: {
        "files": {
          "css":["app.css"],
          "js": ["vendors.js", "bundle.js"]
        }
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env":{
        NODE_ENV:'"production"'
      }
    })
  ]
}
