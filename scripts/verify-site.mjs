import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const root = resolve("dist");
const failures = [];

if (!existsSync(root)) {
  failures.push("_site does not exist; run the build first.");
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const files = existsSync(root) ? walk(root) : [];
const htmlFiles = files.filter((file) => extname(file) === ".html");
const pages = htmlFiles.map((file) => ({ file, html: readFileSync(file, "utf8") }));

const requiredRoutes = [
  "index.html",
  "program/index.html",
  "stories/index.html",
  "register/index.html",
  "contact/index.html",
  "attendees/index.html",
  "pioneers/index.html",
  "success/index.html",
  "404.html"
];

for (const route of requiredRoutes) {
  if (!existsSync(join(root, route))) failures.push(`Missing route: /${route}`);
}

const stalePatterns = [/March 17/i, /Spring 2026/i, /Wednesdays/i, /37 men registered/i, /example\.com\/group/i, /Best Western/i, /420 N Peters/i, /Cedar Bluff/i, /6:00 PM/i];
const encodingErrorPatterns = [/Â/u, /Ã/u, /â(?:€|‚|„|™|œ|ž|†|‡)/u, /ðŸ/u, /ï¿½/u, /�/u];
for (const { file, html } of pages) {
  for (const pattern of stalePatterns) {
    if (pattern.test(html)) failures.push(`${relative(root, file)} contains stale content matching ${pattern}`);
  }
  for (const pattern of encodingErrorPatterns) {
    if (pattern.test(html)) failures.push(`${relative(root, file)} contains malformed text encoding matching ${pattern}`);
  }

  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const pathOnly = href.split(/[?#]/)[0];
    if (!pathOnly) continue;
    const target = pathOnly.endsWith("/") ? join(root, pathOnly, "index.html") : join(root, pathOnly);
    if (!existsSync(target)) failures.push(`${relative(root, file)} links to missing ${href}`);
  }
}

const homepage = readFileSync(join(root, "index.html"), "utf8");
const stories = readFileSync(join(root, "stories/index.html"), "utf8");
const homepageTestimonials = (homepage.match(/class="card testimonial testimonial-quote"/g) || []).length;
const storyTestimonials = (stories.match(/class="card testimonial testimonial-quote"/g) || []).length;
const storyQuotes = (stories.match(/class="testimonial-entry"/g) || []).length;
if (homepageTestimonials !== 6) failures.push("Homepage should contain 6 testimonials; found " + homepageTestimonials + ".");
if (storyTestimonials !== 16) failures.push("Stories page should contain 16 people; found " + storyTestimonials + ".");
if (storyQuotes !== 21) failures.push("Stories page should contain all 21 quotes; found " + storyQuotes + ".");
if (!homepage.includes('href="/stories/"')) failures.push("Homepage is missing the Read more stories link.");
const register = readFileSync(join(root, "register/index.html"), "utf8");
const contact = readFileSync(join(root, "contact/index.html"), "utf8");
for (const [name, html] of [["ffm-register", register], ["ffm-contact", contact]]) {
  if (!new RegExp(`<form[^>]+name=["']${name}["']`, "i").test(html)) failures.push(`Missing ${name} form.`);
  if (!new RegExp(`name=["']form-name["'][^>]+value=["']${name}["']`, "i").test(html)) failures.push(`${name} is missing Netlify form-name.`);
  if (!/action=["']\/success\/["']/i.test(html)) failures.push(`${name} does not submit to /success/.`);
  if (!/name=["']bot-field["']/i.test(html)) failures.push(`${name} is missing its honeypot field.`);
}

const allHtml = pages.map(({ html }) => html).join("\n");
for (const requiredText of ["Fall 2026", "September 15", "November 17", "Tuesdays", "6:30 PM", "6223 Highland Place Way"]) {
  if (!allHtml.includes(requiredText)) failures.push(`Missing required cohort text: ${requiredText}`);
}

if (failures.length) {
  console.error(`Verification failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML pages, all internal links, both Netlify forms, and Fall 2026 cohort messaging.`);
