(() => {
  "use strict";

  const excludedPath = /^(?:\/admin|\/attendees|\/hub|\/pioneers)(?:\/|$)/;
  const automatedAgent = /bot|crawler|spider|headless|lighthouse|pagespeed|preview|monitor|uptime/i;

  if (
    excludedPath.test(window.location.pathname) ||
    navigator.webdriver ||
    automatedAgent.test(navigator.userAgent) ||
    navigator.doNotTrack === "1" ||
    navigator.globalPrivacyControl === true
  ) {
    return;
  }

  const clean = (value, limit = 160) =>
    typeof value === "string" ? value.trim().slice(0, limit) : "";

  const getSessionId = () => {
    const key = "ffm_analytics_session";
    try {
      let value = window.sessionStorage.getItem(key);
      if (!value) {
        value = crypto.randomUUID();
        window.sessionStorage.setItem(key, value);
      }
      return value;
    } catch {
      return crypto.randomUUID();
    }
  };

  const params = new URLSearchParams(window.location.search);
  let referrerHost = "";
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {
    referrerHost = "";
  }

  const payload = JSON.stringify({
    source: "ffm-web-v1",
    page: clean(window.location.pathname || "/", 240),
    referrerHost: clean(referrerHost, 160),
    sessionId: getSessionId(),
    device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop",
    campaign: {
      source: clean(params.get("utm_source")),
      medium: clean(params.get("utm_medium")),
      name: clean(params.get("utm_campaign")),
      content: clean(params.get("utm_content")),
      term: clean(params.get("utm_term"))
    }
  });

  const endpoint = "/api/track-pageview";
  if (navigator.sendBeacon) {
    const sent = navigator.sendBeacon(
      endpoint,
      new Blob([payload], { type: "text/plain;charset=UTF-8" })
    );
    if (sent) return;
  }

  fetch(endpoint, {
    method: "POST",
    body: payload,
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    credentials: "same-origin",
    keepalive: true
  }).catch(() => {});
})();
