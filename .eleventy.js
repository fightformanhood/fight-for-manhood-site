export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/files");

  eleventyConfig.addTransform("firstPartyAnalytics", function (content, outputPath) {
    if (!outputPath?.endsWith(".html") || outputPath.includes("\\admin\\") || outputPath.includes("/admin/")) {
      return content;
    }

    const script = '<script src="/assets/js/analytics.js" defer></script>';
    if (content.includes(script)) return content;
    if (content.includes("</head>")) return content.replace("</head>", `  ${script}\n</head>`);
    return `${script}\n${content}`;
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    const date = new Date(`${value}T12:00:00`);
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(date);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes",
      output: "dist"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
