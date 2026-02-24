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
  --stroke2: rgba(255,255,255,.14);
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

.ffm-container{max-width:1000px;margin:0 auto;}
.ffm-center{text-align:center;}
.ffm-gold{color:var(--gold);}
.ffm-muted{color:var(--muted);}

.ffm-pills{
  display:flex;
  justify-content:center;
  gap:10px;
  flex-wrap:wrap;
  margin-bottom:22px;
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
  max-width:960px;
  margin:0 auto;
}

.ffm-hero h1{
  font-size:clamp(44px,5.4vw,72px);
  font-weight:900;
  letter-spacing:-0.02em;
  margin:0 0 12px;
}

.ffm-hero p{
  margin:0 auto;
  max-width:900px;
  font-size:20px;
  line-height:1.65;
  color:rgba(232,237,246,.92);
}

.ffm-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,var(--line),transparent);
  margin:40px auto;
  width:min(820px,92%);
}

.ffm-card{
  max-width:900px;
  margin:0 auto;
  border:1px solid var(--stroke);
  border-radius:18px;
  padding:24px;
  background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02));
  box-shadow:0 14px 36px rgba(0,0,0,.28);
}

.ffm-sectionTitle{
  margin:24px 0 12px;
  font-size:14px;
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:900;
  color:rgba(202,162,70,.92);
}

.ffm-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:16px;
}

.ffm-field.full{grid-column:1 / -1;}

.ffm-field label{
  display:block;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.08em;
  font-size:12px;
  color:rgba(232,237,246,.86);
  margin:0 0 8px;
}

.ffm-field input,
.ffm-field select{
  width:100%;
  padding:14px 14px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(0,0,0,.26);
  color:var(--text);
  outline:none;
  font-size:16px;
}

.ffm-field input:focus,
.ffm-field select:focus{
  border-color: rgba(202,162,70,.65);
  box-shadow: 0 0 0 4px rgba(202,162,70,.12);
}

.ffm-checkboxGroup{
  display:grid;
  gap:8px;
  margin-top:6px;
}

.ffm-check{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:15px;
}

.ffm-check input{
  width:18px;
  height:18px;
  accent-color: var(--gold);
}

.ffm-actions{
  margin-top:28px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:14px;
}

.ffm-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:16px 28px;
  border-radius:14px;
  font-weight:900;
  text-transform:uppercase;
  font-size:14px;
  letter-spacing:.08em;
  border:1px solid var(--stroke2);
  color:#0a0f18;
  background:linear-gradient(180deg,rgba(202,162,70,.95),rgba(202,162,70,.80));
  min-width:280px;
  cursor:pointer;
}

.ffm-btn:hover{filter:brightness(1.06);transform:translateY(-1px);}

.ffm-fine{
  font-size:14px;
  color:rgba(169,179,199,.92);
  text-align:center;
  max-width:700px;
  line-height:1.55;
}

@media (max-width: 820px){
  .ffm-grid{grid-template-columns:1fr;}
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
        This is not a casual sign-up. It is a decision.
        Ten weeks. Brotherhood. Responsibility. Growth in the light.
      </p>
    </header>

    <div class="ffm-divider"></div>

    <section class="ffm-card">

      <!-- Netlify Forms -->
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
            <label for="name">Full Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div class="ffm-field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div class="ffm-field">
            <label for="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required />
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

        <div class="ffm-sectionTitle">Connection & Family</div>

        <div class="ffm-grid">
          <div class="ffm-field">
            <label for="church">Church Attended (if any)</label>
            <input id="church" name="church" type="text" />
          </div>

          <div class="ffm-field">
            <label for="invited">Who Invited You?</label>
            <input id="invited" name="invited" type="text" />
          </div>

          <div class="ffm-field full">
            <label>Children (check all that apply)</label>
            <div class="ffm-checkboxGroup">
              <label class="ffm-check"><input type="checkbox" name="children" value="Young Children"> Young Children</label>
              <label class="ffm-check"><input type="checkbox" name="children" value="Teenagers"> Teenagers</label>
              <label class="ffm-check"><input type="checkbox" name="children" value="College Age"> College Age</label>
              <label class="ffm-check"><input type="checkbox" name="children" value="Adult Children"> Adult Children</label>
              <label class="ffm-check"><input type="checkbox" name="children" value="No Children"> No Children</label>
            </div>
          </div>
        </div>

        <div class="ffm-sectionTitle">Prior Involvement</div>

        <div class="ffm-checkboxGroup">
          <label class="ffm-check">
            <input type="checkbox" name="past_graduate" value="Yes">
            I am a past graduate
          </label>

          <label class="ffm-check">
            <input type="checkbox" name="attended_before" value="Yes">
            I have attended The Fight before
          </label>
        </div>

        <div class="ffm-sectionTitle">Commitment</div>

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

        <div class="ffm-actions">
          <button class="ffm-btn" type="submit">Step Into the Fight</button>
          <p class="ffm-fine">
            Confidential. Men only. No cost.
            We cap this at 20 men. When seats are filled, registration closes.
          </p>
        </div>

      </form>
    </section>

  </div>
</div>
