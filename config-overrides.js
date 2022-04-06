const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@constants": "src/constants",
    "@components": "src/components",
    "@assets": "src/assets",
    "@containers": "src/containers",
    "@interfaces": "src/interfaces",
    "@pages": "src/pages",
    "@store": "src/store",
    "@styled-components": "src/styled-components",
    "@styles": "src/styles",
    "@utils": "src/utils",
  })(config);

  return config;
};
