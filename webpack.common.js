const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    projects: './src/projects.js',
    nav: './src/main.js',
    zagum: './src/zagum.js',
    zagumPortfolio: './src/zagumPortfolio.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/bozhemoy.html',
      filename: './projects/bozhemoy.html',
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/kursiv.html',
      filename: './projects/kursiv.html',
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/zeitgeist.html',
      filename: './projects/zeitgeist.html',
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/teni.html',
      filename: './projects/teni.html',
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/stena.html',
      filename: './projects/stena.html',
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/logos.html',
      filename: './projects/logos.html',
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects/hypnos.html',
      filename: './projects/hypnos.html',
      chunks: ['projects']
    }),

    new HtmlWebpackPlugin({
      template: './src/zagum.html',
      filename: './zagum.html',
      chunks: ['zagum']
    }),
    new HtmlWebpackPlugin({
      template: './src/zagumLibrary.html',
      filename: './zagumLibrary.html',
      chunks: ['zagumPortfolio']
    }),
    new HtmlWebpackPlugin({
      template: './src/zagumSites.html',
      filename: './zagumSites.html',
      chunks: ['zagumPortfolio']
    }),
    new HtmlWebpackPlugin({
      template: './src/zagumPosters.html',
      filename: './zagumPosters.html',
      chunks: ['zagumPortfolio']
    }),
    new HtmlWebpackPlugin({
      template: './src/shop.html',
      filename: './shop.html',
      chunks: ['zagumPortfolio']
    })

    // Article
    // new HtmlWebpackPlugin({
    //   template: './src/articles/superorganisms/S_Popup.html',
    //   filename: './superorganisms/S_Popup.html'
    // }),

    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/analytics.html'),
    //     location: 'analytics',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
