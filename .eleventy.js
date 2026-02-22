export default function (eleventyConfig) {
  // Keep admin passthrough if you still have it (harmless even if unused)
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets/uploads");

  // ===== Dynamic countdown to cohort start =====
  // Cohort start: Wed, Mar 11, 2026 @ 6:00 PM Eastern (-05:00)
  const COHORT_START = new Date("2026-03-11T18:00:00-05:00");

  function daysUntil(date) {
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    // ceil so "2.1 days" becomes "3 days" (feels right for recruiting)
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  eleventyConfig.addShortcode("cohortCountdown", function () {
    const d = daysUntil(COHORT_START);
    if (d > 1) return `Starts in ${d} days`;
    if (d === 1) return `Starts tomorrow`;
    if (d === 0) return `Starts today`;
    return `In progress`;
  });

  eleventyConfig.addShortcode("cohortStartLabel", function () {
    // Static label used alongside countdown (keeps clarity)
    return `Wed, Mar 11, 2026 • 6:00 PM`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes",
      output: "dist",
    },
  };
}
