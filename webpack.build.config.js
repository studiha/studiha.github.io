const path = require("path");

module.exports = {
    entry: {
      app: ["./src/app.js"]
    },
    output: {
      path: path.resolve(__dirname, "assets"),
      filename: "[name].js",
    },
    resolve: { extensions: ['.js', '.jsx'] },
    module: {
      rules: [
        {
          test: /(\.js?$|\.jsx?$)/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /.css/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
        }
      ]
    },
    mode: 'production',
    devtool: 'inline-source-map',
}
