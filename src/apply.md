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
  --muted:#a9b3c7;
  --gold:#caa246;
  --line: rgba(202,162,70,.28);
  --stroke: rgba(255,255,255,.10);
}

.ffm-register{
  min-height:100vh;
  background:
    radial-gradient(1000px 700px at 50% -10%, rgba(255,255,255,.10), transparent 60%),
    radial-gradient(900px 700px at 50% 15%, rgba(202,162,70,.10), transparent 65%),
    linear-gradient(180deg, var(--bg0) 0%, var(--bg1) 55%, var(--bg0) 100%);
  color:var(--text);
  padding:clamp(24px,4vw,56px) 18px 96px;
}

.ffm-container{max-width:900px;margin:0 auto;}
.ffm-gold{color:var(--gold);}

.ffm-pills{
  display:flex;
  justify-content:center;
  gap:10px;
  flex-wrap:wrap;
  margin-bottom:24px;
}

.ffm-pill{
  border:1px solid rgba(202,162,70,.35);
  padding:9px 16px;
  border-radius:999px;
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.16em;
  background:rgba(0,0,0,.22);
}

.ffm-hero{
  text-align:center;
  margin-bottom:30px;
}

.ffm-hero h1{
  font-size:clamp(42px,5vw,68px);
  font-weight:900;
  margin:0 0 12px;
}

.ffm-hero p{
  font-size:19px;
  line-height:1.65;
  max-width:760px;
  margin:0 auto;
  color:rgba(232,237,246,.92);
}

.ffm-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,var(--line),transparent);
  margin:36px auto;
  width:100%;
}

.ffm-card{
  border:1px solid var(--stroke);
  border-radius:16px;
  padding:26px;
  background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02));
}

.ffm-sectionTitle{
  margin:22px 0 10px;
  font-size:13px;
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:900;
  color:rgba(202,162,70,.92);
}

.ffm-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:14px;
}

.ffm-field label{
  display:block;
  font-weight:800;
  font-size:12px;
  letter-spacing:.08em;
  text-transform:uppercase;
  margin-bottom:6px;
}

.ffm-field input,
.ffm-field select{
  width:100%;
  padding:14px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(0,0,0,.26);
  color:var(--text);
  font-size:15px;
}

.ffm-field input:focus,
.ffm-field select:focus{
  border-color:rgba(202,162,70,.7);
  box-shadow:0 0 0 3px rgba(202,162,70,.12);
}

.ffm-checkboxGroup{
  display:grid;
  gap:6px; /* tightened */
  margin-top:4px;
}

.ffm-check{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:14px;
}

.ffm-check input{
  width:16px;
  height:16px;
  accent-color:var(--gold);
}

.ffm-actions{
  margin-top:24px;
  text-align:center;
}

.ffm-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:16px 30px;
  border-radius:14px;
  font-weight:900;
  text-transform:uppercase;
  font-size:14px;
  background:linear-gradient(180deg,rgba(202,162,70,.95),rgba(202,162,70,.80));
  color:#0a0f18;
  border:none;
  cursor:pointer;
}

.ffm-btn:hover{filter:brightness(1.06);transform:translateY(-1px);}

.ffm-fine{
  margin-top:12px;
  font-size:13px;
  color:rgba(169,179,199,.85);
}

@media (max-width:720px){
  .ffm-card{padding:20px;}
}
</style>

<div class="ffm-register">
  <div class="ffm-container">

    <div class="ffm-pills">
      <div class="ffm-pill">Knoxville • Wednesdays • 6:00 PM • No cost</div>
      <div class="ffm-pill">10 Weeks • 2 Hours/Night</div>
    </div>

    <header class="ffm-hero">
      <h1>Step Into <span class="ffm-gold">The Fight</span></h1>
      <p>
        This is not casual. It is a decision.
        Brotherhood. Responsibility. Growth in the light.
      </p>
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

        <div class="ffm-sectionTitle">Identity</div>

        <div class="ffm-grid">
          <div class="ffm-field">
            <label>Full Name</label>
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
            <label>Church Attended (if any)</label>
            <input name="church" type="text" />
          </div>

          <div class="ffm-field">
            <label>Who Invited You?</label>
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

        <div class="ffm-sectionTitle">Prior Involvement</div>

        <div class="ffm-checkboxGroup">
          <label class="ffm-check">
            <input type="checkbox" name="past_graduate" value="Yes">
            Past Graduate
          </label>

          <label class="ffm-check">
            <input type="checkbox" name="attended_before" value="Yes">
            Attended Before
          </label>
        </div>

        <div class="ffm-sectionTitle">Commitment</div>

        <div class="ffm-checkboxGroup">
          <label class="ffm-check">
            <input type="checkbox" name="commitment_attendance" value="Yes" required>
            I understand this is a 10-week commitment and will prioritize attendance.
          </label>

          <label class="ffm-check">
            <input type="checkbox" name="commitment_confidential" value="Yes" required>
            I understand this requires honesty and confidentiality.
          </label>
        </div>

        <div class="ffm-actions">
          <button class="ffm-btn" type="submit">Step Into the Fight</button>
          <p class="ffm-fine">
            Confidential. Men only. No cost. 20 seats.
          </p>
        </div>

      </form>
    </section>

  </div>
</div>
