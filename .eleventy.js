export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets/uploads");

  // Cohort start in America/New_York:
  // Wed, Mar 11, 2026 @ 6:00 PM ET
  const COHORT_START_ISO_ET = "2026-03-11T18:00:00";
  const TZ = "America/New_York";

  // Get a Date object representing "now" in ET by formatting parts
  function getNowInTZ(tz) {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = Object.fromEntries(
      fmt.formatToParts(new Date()).map(p => [p.type, p.value])
    );

    // Build an ISO-like string and let Date parse it as local,
    // then we only use date-diff in whole days, so it stays consistent.
    return new Date(
      `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`
    );
  }

  // Build "start" as a local Date, but compare using ET-normalized "now"
  const cohortStartLocal = new Date(COHORT_START_ISO_ET);

  function daysUntilStart() {
    const nowET = getNowInTZ(TZ);

    // Compare date-only (midnight) to avoid off-by-one from hours/DST
    const startDay = new Date(
      cohortStartLocal.getFullYear(),
      cohortStartLocal.getMonth(),
      cohortStartLocal.getDate()
    );
    const nowDay = new Date(nowET.getFullYear(), nowET.getMonth(), nowET.getDate());

    const diffMs = startDay.getTime() - nowDay.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  eleventyConfig.addShortcode("cohortCountdown", function () {
    const d = daysUntilStart();
    if (d > 1) return `Starts in ${d} days`;
    if (d === 1) return `Starts tomorrow`;
    if (d === 0) return `Starts today`;
    return `In progress`;
  });

  eleventyConfig.addShortcode("cohortStartLabel", function () {
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
