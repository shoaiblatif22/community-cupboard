const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/user",
    createProxyMiddleware({
      target: "http://localhost:3000", // Replace with your backend URL
      changeOrigin: true,
    })
  );

  // Add more proxies if needed for other backend routes
};
