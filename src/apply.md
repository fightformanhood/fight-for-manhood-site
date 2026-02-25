---
title: "Apply"
description: "Apply for the Fight for Manhood 10-week program."
layout: "base.njk"
permalink: "/apply/"
---

<style>
:root{
  --bg0:#070b12;
  --bg1:#0b1324;
  --text:#e8edf6;
  --gold:#caa246;
  --line: rgba(202,162,70,.28);
  --stroke: rgba(255,255,255,.10);
  --stroke2: rgba(255,255,255,.14);
}

/* Page */
.ffm-register{
  min-height:100vh;
  background:
    radial-gradient(1000px 700px at 50% -10%, rgba(255,255,255,.10), transparent 60%),
    radial-gradient(900px 700px at 50% 15%, rgba(202,162,70,.10), transparent 65%),
    linear-gradient(180deg, var(--bg0) 0%, var(--bg1) 55%, var(--bg0) 100%);
  color:var(--text);
  padding:28px 18px 60px;
}

.ffm-container{
  max-width:720px;
  margin:0 auto;
}

.ffm-gold{color:var(--gold);}

/* Hero */
.ffm-hero{
  text-align:center;
  margin-bottom:14px;
}

.ffm-hero h1{
  margin:0;
  font-size:clamp(34px,4vw,50px);
  font-weight:900;
  letter-spacing:-0.02em;
}

.ffm-subline{
  margin-top:6px;
  font-size:15px;
  line-height:1.4;
  color:rgba(232,237,246,.85);
}

/* Divider */
.ffm-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,var(--line),transparent);
  margin:14px 0;
}

/* Card */
.ffm-card{
  border:1px solid var(--stroke);
  border-radius:12px;
  padding:14px;
  background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02));
}

/* Section Title */
.ffm-sectionTitle{
  margin:10px 0 4px;
  font-size:10px;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-weight:900;
  color:var(--gold);
}

/* CORE INFO – ULTRA TIGHT */
.ffm-core{
  display:flex;
  flex-direction:column;
  gap:3px; /* minimal gap */
}

.ffm-field{
  margin:0;
}

.ffm-field label{
  display:block;
  margin:0 0 1px;
  font-size:9px;
  font-weight:900;
  letter-spacing:.05em;
  text-transform:uppercase;
  color:rgba(232,237,246,.85);
}

.ffm-field input,
.ffm-field select{
  width:100%;
  margin:0;
  padding:6px 8px;
  border-radius:8px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(0,0,0,.28);
  color:var(--text);
  font-size:13px;
  line-height:1.1;
}

.ffm-field input:focus,
.ffm-field select:focus{
  border-color:var(--gold);
  box-shadow:0 0 0 2px rgba(202,162,70,.15);
}

/* Blocks */
.ffm-block{
  border:1px solid rgba(255,255,255,.10);
  background:rgba(0,0,0,.18);
  border-radius:10px;
  padding:8px;
  margin-top:6px;
}

.ffm-blockLabel{
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.06em;
  font-size:9px;
  margin:0 0 4px;
}

.ffm-checkboxGroup{
  display:grid;
  gap:3px;
}

.ffm-check{
  display:flex;
  align-items:center;
  gap:6px;
  font-size:12px;
}

.ffm-check input{
  width:13px;
  height:13px;
  accent-color:var(--gold);
}

/* Button */
.ffm-actions{
  margin-top:8px;
  text-align:center;
}

.ffm-btn{
  padding:10px 18px;
  border-radius:10px;
  font-weight:900;
  text-transform:uppercase;
  font-size:12px;
  letter-spacing:.05em;
  background:linear-gradient(180deg,rgba(202,162,70,.95),rgba(202,162,70,.80));
  color:#0a0f18;
  border:none;
  cursor:pointer;
}

.ffm-btn:hover{filter:brightness(1.05);}

.ffm-fine{
  margin-top:6px;
  font-size:11px;
  color:rgba(169,179,199,.8);
}
</style>

<div class="ffm-register">
  <div class="ffm-container">

    <header class="ffm-hero">
      <h1>Step Into <span class="ffm-gold">The Fight</span></h1>
      <div class="ffm-subline">
        Ten weeks. Brotherhood. Responsibility. Growth in the light.
      </div>
    </header>

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
            <label>Name</label>
            <input name="name" type="text" required />
          </div>

          <div class="ffm-field">
            <label>Email</label>
            <input name="email" type="email" required />
          </div>

          <div class="ffm-field">
            <label>Phone</label>
            <input name="phone" type="tel" required />
          </div>

          <div class="ffm-field">
            <label>Church attended (if any)</label>
            <input name="church" type="text" />
          </div>

          <div class="ffm-field">
            <label>Who invited you</label>
            <input name="invited" type="text" />
          </div>

          <div class="ffm-field">
            <label>Marital Status</label>
            <select name="marital" required>
              <option value="">Select…</option>
              <option>Single</option>
              <option>Married</option>
              <option>Engaged</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>
          </div>

        </div>

        <div class="ffm-actions">
          <button class="ffm-btn" type="submit">Step Into the Fight</button>
          <div class="ffm-fine">Confidential. Men only. No cost.</div>
        </div>

      </form>

    </section>

  </div>
</div>
