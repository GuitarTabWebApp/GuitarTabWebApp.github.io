const path = require("path");

module.exports = function override(config, env) {
  // Change the build output directory
  config.output.path = path.join(__dirname, "docs");

  return config;
};
