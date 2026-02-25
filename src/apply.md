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
  padding:40px 20px 90px;
}

.ffm-container{ max-width:900px; margin:0 auto; }
.ffm-gold{ color:var(--gold); }

/* Pills */
.ffm-pills{
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
  margin-bottom:20px;
}

.ffm-pill{
  border:1px solid rgba(202,162,70,.35);
  padding:12px 20px;
  border-radius:999px;
  font-size:22px;  /* 3x bigger */
  text-transform:uppercase;
  letter-spacing:.14em;
  background:rgba(0,0,0,.22);
}

/* HERO */
.ffm-hero{
  text-align:center;
  margin-bottom:16px;
}

.ffm-hero h1{
  margin:0;
  font-size:clamp(44px,5vw,70px); /* unchanged */
  font-weight:900;
  letter-spacing:-0.02em;
  text-transform:uppercase;
}

.ffm-hero .subline{
  margin-top:10px;
  font-size:36px; /* 3x bigger */
  line-height:1.2;
  color:rgba(232,237,246,.9);
}

.ffm-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,var(--line),transparent);
  margin:20px auto;
  width:90%;
}

.ffm-card{
  border:1px solid var(--stroke);
  border-radius:18px;
  padding:30px;
  background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02));
  box-shadow:0 14px 36px rgba(0,0,0,.28);
}

.ffm-sectionTitle{
  margin:20px 0 14px;
  font-size:30px; /* 3x bigger */
  letter-spacing:.18em;
  text-transform:uppercase;
  font-weight:900;
  color:var(--gold);
}

/* CORE INFO (tight spacing, large text) */
.ffm-core{
  display:flex;
  flex-direction:column;
  gap:8px;
}

.ffm-field{
  display:flex;
  flex-direction:column;
}

.ffm-field label{
  margin-bottom:6px;
  font-weight:900;
  text-transform:uppercase;
  font-size:24px; /* 3x bigger */
}

.ffm-field input,
.ffm-field select{
  padding:14px 16px;
  height:60px;
  font-size:26px; /* 3x bigger */
  border-radius:14px;
  border:1px solid rgba(255,255,255,.18);
  background:rgba(0,0,0,.28);
  color:var(--text);
}

.ffm-field input:focus,
.ffm-field select:focus{
  border-color:var(--gold);
  box-shadow:0 0 0 3px rgba(202,162,70,.15);
}

.ffm-block{
  border:1px solid rgba(255,255,255,.12);
  background:rgba(0,0,0,.20);
  border-radius:18px;
  padding:20px;
  margin-top:16px;
}

.ffm-blockLabel{
  font-size:26px; /* 3x bigger */
  font-weight:900;
  margin-bottom:12px;
}

.ffm-checkboxGroup{
  display:grid;
  gap:12px;
}

.ffm-check{
  display:flex;
  align-items:center;
  gap:12px;
  font-size:24px; /* 3x bigger */
}

.ffm-check input{
  width:26px;
  height:26px;
  accent-color:var(--gold);
}

.ffm-actions{
  margin-top:30px;
  text-align:center;
}

.ffm-btn{
  padding:22px 40px;
  border-radius:20px;
  font-weight:900;
  text-transform:uppercase;
  font-size:26px; /* 3x bigger */
  letter-spacing:.06em;
  border:1px solid var(--stroke2);
  color:#0a0f18;
  background:linear-gradient(180deg,rgba(202,162,70,.95),rgba(202,162,70,.80));
  min-width:360px;
  cursor:pointer;
}

.ffm-btn:hover{ transform:translateY(-2px); }

.ffm-fine{
  margin-top:16px;
  font-size:22px; /* 3x bigger */
  color:rgba(169,179,199,.9);
  text-align:center;
}

@media(max-width:720px){
  .ffm-btn{ width:100%; }
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
