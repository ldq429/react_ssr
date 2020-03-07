/**
 * webpack 在配置过程中 有公共的一样的配置项 想打了 webpack-merge 来合并配置项
 * 从而简化代码 抽离出公共的配置项 webpack.base.js
 * 分别引入client 以及 server 中 最后merge
 * @type {{module: {rules: [{test: RegExp, loader: string, options: {presets: [string, string, [string, {targets: {browsers: string}}]]}, exclude: RegExp}]}}}
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_moudles/,
        options: {
          presets: ['react', 'stage-0', ['env', {
            targets: {
              browsers: 'last 2 versions'
            }
          }]]
        }
      }
    ]
  }
};