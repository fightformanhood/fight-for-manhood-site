---
title: "Register"
description: "Register for the Fight for Manhood 10-week program."
layout: "base.njk"
permalink: "/register/"
---

<style>
:root{
  --bg0:#070b12;
  --bg1:#0b1324;
  --text:#e8edf6;
  --muted:#a9b3c7;
  --gold:#caa246;
  --line: rgba(202,162,70,.28);
  --stroke: rgba(255,255,255,.10);
  --stroke2: rgba(255,255,255,.14);
}

.ffm-register{
  min-height:100vh;
  background:
    radial-gradient(1000px 700px at 50% -10%, rgba(255,255,255,.10), transparent 60%),
    radial-gradient(900px 700px at 50% 15%, rgba(202,162,70,.10), transparent 65%),
    linear-gradient(180deg, var(--bg0) 0%, var(--bg1) 55%, var(--bg0) 100%);
  color:var(--text);
  padding:clamp(18px,3vw,36px) 18px 70px;
}

.ffm-register *{ box-sizing:border-box; }

.ffm-container{ max-width:860px; margin:0 auto; }
.ffm-gold{ color:var(--gold); }

/* Pills */
.ffm-pills{
  display:flex;
  justify-content:center;
  gap:8px;
  flex-wrap:wrap;
  margin:0 0 14px;
}

.ffm-pill{
  border:1px solid rgba(202,162,70,.35);
  padding:7px 13px;
  border-radius:999px;
  font-size:11px;
  text-transform:uppercase;
  letter-spacing:.14em;
  background:rgba(0,0,0,.22);
}

/* HERO (not <header> to avoid base.njk header styling) */
.ffm-hero{
  text-align:center;
  margin:0 auto 10px;
}

.ffm-hero h1{
  margin:0;
  font-size:clamp(40px,5vw,66px);
  font-weight:900;
  letter-spacing:-0.02em;
  text-transform:uppercase;
  line-height:1.02;
}

.ffm-hero .subline{
  margin:6px 0 0;
  font-size:15px;
  line-height:1.25;
  color:rgba(232,237,246,.86);
}

.ffm-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,var(--line),transparent);
  margin:14px auto;
  width:min(820px,92%);
}

/* Card */
.ffm-card{
  max-width:860px;
  margin:0 auto;
  border:1px solid var(--stroke);
  border-radius:16px;
  padding:16px;
  background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02));
  box-shadow:0 14px 36px rgba(0,0,0,.28);
}

/* Section title */
.ffm-sectionTitle{
  margin:10px 0 6px;
  font-size:11px;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-weight:900;
  color:rgba(202,162,70,.92);
}

/* ===== CORE INFO — CRUSH THE SPACING ===== */
.ffm-core{
  display:flex;
  flex-direction:column;
  gap:4px;           /* << tight between fields */
  margin:0;
  padding:0;
}

.ffm-field{
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
}

.ffm-field label{
  margin:0 0 2px;    /* << tight label gap */
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.06em;
  font-size:10px;
  line-height:1;
  color:rgba(232,237,246,.86);
}

.ffm-field input,
.ffm-field select{
  width:100%;
  margin:0;
  padding:6px 10px;  /* << shorter */
  height:32px;       /* << hard cap */
  border-radius:10px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(0,0,0,.26);
  color:var(--text);
  outline:none;
  font-size:14px;
  line-height:1;
}

.ffm-field input:focus,
.ffm-field select:focus{
  border-color: rgba(202,162,70,.65);
  box-shadow: 0 0 0 2px rgba(202,162,70,.12);
}

/* Blocks below core info */
.ffm-block{
  border:1px solid rgba(255,255,255,.10);
  background:rgba(0,0,0,.18);
  border-radius:14px;
  padding:10px;
  margin:0 0 10px;
}

.ffm-blockLabel{
  margin:0 0 6px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.08em;
  font-size:11px;
  color:rgba(232,237,246,.86);
}

.ffm-checkboxGroup{
  display:grid;
  gap:4px; /* tight */
  margin:0;
}

.ffm-check{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:13px;
  color:rgba(232,237,246,.90);
  margin:0;
}

.ffm-check input{
  width:14px;
  height:14px;
  margin:0;
  accent-color: var(--gold);
}

/* Actions */
.ffm-actions{
  margin-top:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:8px;
}

.ffm-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:14px 26px;
  border-radius:14px;
  font-weight:900;
  text-transform:uppercase;
  font-size:13px;
  letter-spacing:.06em;
  border:1px solid var(--stroke2);
  color:#0a0f18;
  background:linear-gradient(180deg,rgba(202,162,70,.95),rgba(202,162,70,.80));
  min-width:280px;
  cursor:pointer;
}

.ffm-btn:hover{ filter:brightness(1.05); transform:translateY(-1px); }

.ffm-fine{
  margin:0;
  font-size:12px;
  color:rgba(169,179,199,.85);
  text-align:center;
  line-height:1.35;
  max-width:680px;
}

@media (max-width:720px){
  .ffm-card{ padding:14px; }
  .ffm-btn{ width:100%; max-width:520px; }
}
</style>

<div class="ffm-register">
  <div class="ffm-container">

    <div class="ffm-pills">
      <div class="ffm-pill">Knoxville • Wednesdays • 6:00 PM • No cost</div>
      <div class="ffm-pill">10 Weeks • 2 Hours/Night</div>
    </div>

    <div class="ffm-hero">
      <h1>STEP INTO <span class="ffm-gold">THE FIGHT</span></h1>
      <div class="subline">Ten weeks. Brotherhood. Responsibility. Growth in the light.</div>
    </div>

    <div class="ffm-divider"></div>

    <section class="ffm-card">

      <form name="ffm-register"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/success/">

        <input type="hidden" name="form-name" value="ffm-register" />

        <p style="display:none;">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <div class="ffm-sectionTitle">Core Info</div>

        <div class="ffm-core">
          <div class="ffm-field">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" autocomplete="name" required />
          </div>

          <div class="ffm-field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" autocomplete="email" required />
          </div>

          <div class="ffm-field">
            <label for="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autocomplete="tel" required />
          </div>

          <div class="ffm-field">
            <label for="church">Church attended (if any)</label>
            <input id="church" name="church" type="text" />
          </div>

          <div class="ffm-field">
            <label for="invited">Who invited you</label>
            <input id="invited" name="invited" type="text" />
          </div>

          <div class="ffm-field">
            <label for="marital">Marital Status</label>
            <select id="marital" name="marital" required>
              <option value="">Select…</option>
              <option>Single</option>
              <option>Married</option>
              <option>Engaged</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>
        </div>

        <div class="ffm-sectionTitle">Family</div>
        <div class="ffm-block">
          <div class="ffm-blockLabel">Kids (check all that apply)</div>
          <div class="ffm-checkboxGroup">
            <label class="ffm-check"><input type="checkbox" name="kids" value="Young Children"> Young Children</label>
            <label class="ffm-check"><input type="checkbox" name="kids" value="Teenagers"> Teenagers</label>
            <label class="ffm-check"><input type="checkbox" name="kids" value="College Age"> College Age</label>
            <label class="ffm-check"><input type="checkbox" name="kids" value="Adult"> Adult</label>
            <label class="ffm-check"><input type="checkbox" name="kids" value="No Children"> No Children</label>
          </div>
        </div>

        <div class="ffm-sectionTitle">Prior Involvement</div>
        <div class="ffm-block">
          <div class="ffm-checkboxGroup">
            <label class="ffm-check"><input type="checkbox" name="past_graduate" value="Yes"> Past Graduate</label>
            <label class="ffm-check"><input type="checkbox" name="attended_before" value="Yes"> Attended Before</label>
          </div>
        </div>

        <div class="ffm-sectionTitle">Commitment</div>
        <div class="ffm-block">
          <div class="ffm-checkboxGroup">
            <label class="ffm-check">
              <input type="checkbox" name="commitment_attendance" value="Yes" required>
              I understand this is a 10-week commitment and I will prioritize attendance.
            </label>
            <label class="ffm-check">
              <input type="checkbox" name="commitment_confidential" value="Yes" required>
              I understand this requires honesty and confidentiality.
            </label>
          </div>
        </div>

        <div class="ffm-actions">
          <button class="ffm-btn" type="submit">Step Into the Fight</button>
          <p class="ffm-fine">Confidential. Men only. No cost. We cap this at 20 men.</p>
        </div>

      </form>

    </section>

  </div>
</div>
