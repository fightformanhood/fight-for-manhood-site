export default function (eleventyConfig) {
  // Copy the root /admin folder into the output so /admin works
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Optional uploads folder for CMS media
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
