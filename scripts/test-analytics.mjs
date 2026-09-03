import assert from "node:assert/strict";
import trackPageview from "../netlify/functions/track-pageview.mjs";

const context = { geo: {} };

const wrongMethod = await trackPageview(new Request("https://fightformanhood.com/api/track-pageview"), context);
assert.equal(wrongMethod.status, 405);

const missingOrigin = await trackPageview(
  new Request("https://fightformanhood.com/api/track-pageview", { method: "POST", body: "{}" }),
  context
);
assert.equal(missingOrigin.status, 403);

const automated = await trackPageview(
  new Request("https://fightformanhood.com/api/track-pageview", {
    method: "POST",
    headers: { origin: "https://fightformanhood.com", "user-agent": "ExampleBot/1.0" },
    body: "{}"
  }),
  context
);
assert.equal(automated.status, 204);

const excluded = await trackPageview(
  new Request("https://fightformanhood.com/api/track-pageview", {
    method: "POST",
    headers: { origin: "https://fightformanhood.com", "user-agent": "Mozilla/5.0" },
    body: JSON.stringify({ source: "ffm-web-v1", page: "/admin/", sessionId: "test-session" })
  }),
  context
);
assert.equal(excluded.status, 400);

console.log("Verified analytics request validation and bot/internal-page exclusions.");
