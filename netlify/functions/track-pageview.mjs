import { getStore } from "@netlify/blobs";
import { randomUUID } from "node:crypto";

const STORE_NAME = "ffm-analytics";
const MAX_BODY_BYTES = 4096;
const ALLOWED_HOSTS = new Set([
  "fightformanhood.com",
  "www.fightformanhood.com",
  "stupendous-malabi-efd5d8.netlify.app"
]);
const EXCLUDED_PATH = /^(?:\/admin|\/attendees|\/hub|\/pioneers)(?:\/|$)/;
const AUTOMATED_AGENT = /bot|crawler|spider|headless|lighthouse|pagespeed|preview|monitor|uptime/i;

const reply = (status) =>
  new Response(null, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/plain; charset=utf-8"
    }
  });

const clean = (value, limit = 160) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

const easternParts = (date) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date);
  return Object.fromEntries(parts.map(({ type, value }) => [type, value]));
};

export default async (request, context) => {
  if (request.method !== "POST") return reply(405);

  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const sourceUrl = origin || referer;
  if (!sourceUrl) return reply(403);

  let sourceHost;
  try {
    sourceHost = new URL(sourceUrl).hostname.toLowerCase();
  } catch {
    return reply(403);
  }
  if (!ALLOWED_HOSTS.has(sourceHost) && !sourceHost.endsWith("--stupendous-malabi-efd5d8.netlify.app")) {
    return reply(403);
  }

  const userAgent = request.headers.get("user-agent") || "";
  if (AUTOMATED_AGENT.test(userAgent)) return reply(204);

  const bodyText = await request.text();
  if (Buffer.byteLength(bodyText, "utf8") > MAX_BODY_BYTES) return reply(413);

  let body;
  try {
    body = JSON.parse(bodyText);
  } catch {
    return reply(400);
  }

  const page = clean(body.page, 240);
  const sessionId = clean(body.sessionId, 64);
  if (body.source !== "ffm-web-v1" || !page.startsWith("/") || EXCLUDED_PATH.test(page) || !sessionId) {
    return reply(400);
  }

  const now = new Date();
  const local = easternParts(now);
  const localDate = `${local.year}-${local.month}-${local.day}`;
  const localTime = `${local.hour}:${local.minute}:${local.second}`;
  const key = `${localDate}/${local.hour}/${now.getTime()}-${randomUUID()}.json`;
  const campaign = body.campaign && typeof body.campaign === "object" ? body.campaign : {};

  const event = {
    recordedAt: now.toISOString(),
    localDate,
    localTime,
    timeZone: "America/New_York",
    page,
    sessionId,
    device: body.device === "mobile" ? "mobile" : "desktop",
    referrerHost: clean(body.referrerHost),
    campaign: {
      source: clean(campaign.source),
      medium: clean(campaign.medium),
      name: clean(campaign.name),
      content: clean(campaign.content),
      term: clean(campaign.term)
    },
    geography: {
      country: clean(context.geo?.country?.code, 8),
      region: clean(context.geo?.subdivision?.code, 16)
    }
  };

  const store = getStore(STORE_NAME);
  await store.setJSON(key, event, { onlyIfNew: true });
  return reply(204);
};

export const config = {
  path: "/api/track-pageview"
};
