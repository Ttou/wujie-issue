const { defineLintStagedConfig } = require("@ttou/define-config");

module.exports = defineLintStagedConfig({
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.css": ["stylelint --fix --allow-empty-input", "prettier --write"],
});
