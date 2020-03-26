requirejs.config({
  baseUrl: "./",
  paths: {
    react: "../lib/react",
    jquery: "../lib/jquery",
  },
  shim: {
    jquery: {
      exports: "$",
    },
  },
});
