const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    proxy: {
      "/foo": {
        target: "https://3g.163.com",
        changOrigin: true,
        pathRewrite: {
          //重写路径
          "/foo": "",
        },
      },
      qiongyou: {
        target: "https://www.qyer.com",
        changOrigin: true,
        pathRewrite: {
          qiongyou: "",
        },
      },
    },
  },
};
