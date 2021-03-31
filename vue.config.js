const path = require("path");
module.exports = {
  // 项目部署的基础路径
  publicPath: "/vue-admin/",
  // 将构建好的文件输出到哪里
  outputDir: "dist/vue-admin/",

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,

  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: () => {},
  configureWebpack: config => {
    config.resolve = {
      // 配置解析别名
      extensions: [".js", ".json", ".vue"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
        public: path.resolve(__dirname, "./public")
      }
    };
  },

  // CSS 相关选项
  css: {
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      sass: {
        prependData: '@import "./src/style/Theme.scss";'
      }
    }
  },

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    host: "0.0.0.0",
    port: 9500,
    proxy: null
  }
};
