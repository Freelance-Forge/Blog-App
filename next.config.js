// next.config.js

module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.md$/,
        use: [
          'babel-loader',
          {
            loader: 'raw-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              /* your markdown loader options here */
            },
          },
        ],
      });
  
      if (isServer) {
        config.externals.push({
          'remark-parse': 'commonjs remark-parse',
          'remark-stringify': 'commonjs remark-stringify',
        });
      }
  
      return config;
    },
  };
  