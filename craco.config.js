module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Add a rule for handling image assets
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: '/images/'
            }
          }
        ]
      });
      
      return webpackConfig;
    }
  }
};
