export default function (eleventyConfig) {

  // Copy admin folder so /admin works
  eleventyConfig.addPassthroughCopy("src/admin");

  // Copy uploads folder for CMS media
  eleventyConfig.addPassthroughCopy("src/assets/uploads");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes",
      output: "dist"
    }
  };
}
