const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === "production" ? "/landing_page/" : "/",
});
