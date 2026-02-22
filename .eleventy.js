export default function (eleventyConfig) {

  // Copy root-level admin folder
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Uploads
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
