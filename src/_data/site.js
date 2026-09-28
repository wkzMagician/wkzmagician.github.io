module.exports = function () {
  // Re-read the single editable content file on every Eleventy rebuild.
  const contentPath = require.resolve("../../site-content.js");
  delete require.cache[contentPath];
  return require(contentPath);
};
