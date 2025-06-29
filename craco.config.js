// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the rule that handles file-loader (for static assets)
      const fileLoaderRule = webpackConfig.module.rules.find((rule) => {
        if (!rule.oneOf) return false;

        return rule.oneOf.find((oneOfRule) => {
          return oneOfRule.loader && oneOfRule.loader.includes("file-loader");
        });
      });

      if (fileLoaderRule && fileLoaderRule.oneOf) {
        // Find the file-loader within oneOf rules
        const fileLoader = fileLoaderRule.oneOf.find(
          (oneOfRule) =>
            oneOfRule.loader && oneOfRule.loader.includes("file-loader")
        );

        if (fileLoader) {
          // Exclude .mdx files from file-loader
          fileLoader.exclude = fileLoader.exclude || [];
          fileLoader.exclude.push(/\.mdx$/);
        }
      }

      // Add MDX loader as the first rule
      webpackConfig.module.rules.unshift({
        test: /\.mdx$/,
        use: [
          "babel-loader",
          {
            loader: "@mdx-js/loader",
            options: {},
          },
        ],
      });

      webpackConfig.resolve.extensions = [
        ...webpackConfig.resolve.extensions,
        ".mdx",
      ];

      return webpackConfig;
    },
  },
};
