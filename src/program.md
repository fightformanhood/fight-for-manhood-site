---
layout: base.njk
title: The Program
permalink: /program/
---

<style>
:root{
  --bg0:#070b12;
  --bg1:#0b1324;
  --text:#e8edf6;
  --muted:#a9b3c7;
  --gold:#caa246;
  --line: rgba(202,162,70,.28);
  --stroke: rgba(255,255,255,.08);
  --stroke2: rgba(255,255,255,.12);
}

.ffm-page{
  min-height:100vh;
  background:
    radial-gradient(900px 650px at 50% -10%, rgba(255,255,255,.10), transparent 60%),
    radial-gradient(800px 650px at 50% 20%, rgba(202,162,70,.10), transparent 65%),
    linear-gradient(180deg, var(--bg0) 0%, var(--bg1) 55%, var(--bg0) 100%);
  color:var(--text);
  padding:clamp(24px,4vw,56px) 18px 80px;
}

.ffm-container{max-width:980px;margin:0 auto;}
.ffm-center{text-align:center;}
.ffm-gold{color:var(--gold);}
.ffm-muted{color:var(--muted);}

.ffm-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,var(--line),transparent);
  margin:40px auto;
  width:min(720px,92%);
}

.ffm-kicker{
  display:inline-block;
  border:1px solid rgba(202,162,70,.35);
  background:rgba(0,0,0,.20);
  padding:8px 14px;
  border-radius:999px;
  font-size:12px;
  letter-spacing:.16em;
  text-transform:uppercase;
  margin-bottom:18px;
}

.ffm-hero h1{
  font-size:clamp(42px,5.2vw,66px);
  font-weight:900;
  letter-spacing:-0.02em;
  margin:0 0 10px;
}
.ffm-hero p{
  max-width:820px;
  margin:0 auto;
  font-size:18px;
  line-height:1.65;
  color:rgba(232,237,246,.90);
}

.ffm-hero .subline{
  margin-top:12px;
  font-size:14px;
  color:rgba(232,237,246,.72);
}

.ffm-ctaRow{
  display:flex;
  justify-content:center;
  gap:14px;
  flex-wrap:wrap;
  margin-top:22px;
}

.ffm-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:15px 24px;
  border-radius:12px;
  font-weight:800;
  text-transform:uppercase;
  font-size:13px;
  text-decoration:none;
  min-width:220px;
  border:1px solid var(--stroke2);
  color:var(--text);
  background:rgba(0,0,0,.18);
}
.ffm-btn.primary{
  background:linear-gradient(180deg,rgba(202,162,70,.95),rgba(202,162,70,.80));
  color:#0a0f18;
  border-color: rgba(202,162,70,.55);
}
.ffm-btn:hover{filter:brightness(1.05);transform:translateY(-1px);}

.ffm-grid2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
  margin-top:22px;
}
.ffm-grid3{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
  margin-top:22px;
}

.ffm-card{
  border:1px solid var(--stroke);
  border-radius:14px;
  padding:18px;
  background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02));
  box-shadow:0 10px 28px rgba(0,0,0,.25);
}

.ffm-card h3{
  margin:0 0 8px;
  font-size:14px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:rgba(202,162,70,.92);
  font-weight:900;
}
.ffm-card p{
  margin:0;
  color:rgba(232,237,246,.88);
  line-height:1.65;
  font-size:15px;
}

.ffm-sectionTitle{
  margin:0;
  font-size:26px;
  letter-spacing:.1em;
  text-transform:uppercase;
  font-weight:900;
  text-align:center;
}
.ffm-lead{
  margin:10px auto 0;
  max-width:860px;
  text-align:center;
  color:rgba(169,179,199,.92);
  line-height:1.7;
}

/* ===== UPDATED 10 WEEK FLOW STYLING ===== */

.ffm-schedule{
  display:grid;
  gap:8px; /* tighter */
  margin-top:22px;
}

.ffm-item{
  border:1px solid rgba(255,255,255,.08);
  background:rgba(0,0,0,.22);
  border-radius:12px;
  padding:16px 18px;
  transition:all .15s ease;
}

.ffm-item:hover{
  border-color:rgba(202,162,70,.45);
  background:rgba(0,0,0,.28);
}

.ffm-item .top{
  display:flex;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
  align-items:baseline;
}

.ffm-item .wk{
  font-weight:900;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-size:20px;
  color:rgba(202,162,70,.95);
}

.ffm-item .name{
  font-weight:900;
  font-size:18px; /* bigger */
  letter-spacing:.04em;
}

.ffm-item .desc{
  margin-top:6px; /* tighter */
  color:rgba(169,179,199,.92);
  line-height:1.55;
  font-size:16px; /* bigger */
}

/* ========================================= */

@media(max-width:900px){
  .ffm-grid2{grid-template-columns:1fr;}
  .ffm-grid3{grid-template-columns:1fr;}
  .ffm-btn{width:100%;max-width:360px;}
}
</style>

<div class="ffm-page">
  <div class="ffm-container">

    <div class="ffm-hero ffm-center">
      <div class="ffm-kicker">10 weeks • Wednesdays • 6:00 PM • Knoxville • No cost</div>
      <h1>The Fight for Manhood</h1>
      <p>
        This is a 10-week crucible for men who refuse to drift.
        You don’t spectate. You step into the fight.
      </p>
      <div class="subline">High challenge. High support. Confidential. Men only.</div>

      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/apply/">Apply now</a>
        <a class="ffm-btn" href="/contact/">Ask a question</a>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">10-Week Battle Plan</h2>
    <p class="ffm-lead">
      This is progressive on purpose. Each week exposes weakness, then forges strength.
      No coasting. No hiding. No spectators.
    </p>

    <div class="ffm-schedule">

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 1</div>
          <div class="name">The Alarm</div>
        </div>
        <div class="desc">
          Expose drift. Confront passivity. Draw the line. You decide this is the moment everything changes.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 2</div>
          <div class="name">Expose the Wound</div>
        </div>
        <div class="desc">
          Shame thrives in secrecy. We drag it into the light and break its authority.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 3</div>
          <div class="name">The Father Line</div>
        </div>
        <div class="desc">
          Identify what shaped you. What you received. What you didn’t. Decide what stops with you.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 4</div>
          <div class="name">Sever & Stand</div>
        </div>
        <div class="desc">
          Break unhealthy attachments. Transfer allegiance. Stand as a man under God.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 5</div>
          <div class="name">Reclaim Ground</div>
        </div>
        <div class="desc">
          Face your story. Forgive. Release. Take back territory that shame and fear stole.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 6</div>
          <div class="name">Define the Man</div>
        </div>
        <div class="desc">
          Reject cultural caricatures. Embrace ordered strength—truth, courage, protection, integrity.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 7</div>
          <div class="name">Break Performance</div>
        </div>
        <div class="desc">
          Crush fear-based obedience. Step into sonship. Move from anxiety to confident trust.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 8</div>
          <div class="name">Advance by Faith</div>
        </div>
        <div class="desc">
          Courage is obedience in motion. You act before you feel ready.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 9</div>
          <div class="name">Control the Fire</div>
        </div>
        <div class="desc">
          Harness anger. Repair relationships. Become dangerous to darkness—not to your family.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 10</div>
          <div class="name">Commissioned</div>
        </div>
        <div class="desc">
          You leave with clarity, conviction, and a battle plan. No retreat. No return to hiding.
        </div>
      </div>

    </div>

    <div class="ffm-divider"></div>

    <div class="ffm-center">
      <h2 class="ffm-sectionTitle">Ready?</h2>
      <p class="ffm-lead">
        Stop observing. Step into the fight.
      </p>
      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/apply/">Apply for the next cohort</a>
        <a class="ffm-btn" href="/contact/">Talk to us first</a>
      </div>
      <p class="ffm-muted" style="margin-top:14px;font-size:13px;">Men wait. Leaders move.</p>
    </div>

  </div>
</div>
