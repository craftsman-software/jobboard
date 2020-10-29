const { list } = require("./changelog.config");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", list],
    "body-max-line-length": [0, "always", 100],
  },
};
