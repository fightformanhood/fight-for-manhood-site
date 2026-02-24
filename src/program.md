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
  padding:clamp(24px,4vw,56px) 18px 90px;
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
  padding:9px 16px;
  border-radius:999px;
  font-size:13px;
  letter-spacing:.16em;
  text-transform:uppercase;
  margin-bottom:18px;
}

.ffm-hero h1{
  font-size:clamp(44px,5.4vw,70px);
  font-weight:900;
  letter-spacing:-0.02em;
  margin:0 0 10px;
}
.ffm-hero p{
  max-width:900px;
  margin:0 auto;
  font-size:20px;
  line-height:1.65;
  color:rgba(232,237,246,.92);
}
.ffm-hero .subline{
  margin-top:12px;
  font-size:15px;
  color:rgba(232,237,246,.74);
}

.ffm-ctaRow{
  display:flex;
  justify-content:center;
  gap:14px;
  flex-wrap:wrap;
  margin-top:24px;
}

.ffm-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:16px 26px;
  border-radius:12px;
  font-weight:900;
  text-transform:uppercase;
  font-size:14px;
  text-decoration:none;
  min-width:240px;
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

.ffm-sectionTitle{
  margin:0;
  font-size:28px;
  letter-spacing:.12em;
  text-transform:uppercase;
  font-weight:900;
  text-align:center;
}
.ffm-lead{
  margin:12px auto 0;
  max-width:920px;
  text-align:center;
  color:rgba(169,179,199,.94);
  line-height:1.7;
  font-size:18px;
}

/* ===== BIGGER + TIGHTER 10 WEEK FLOW ===== */

.ffm-schedule{
  display:grid;
  gap:10px;
  margin-top:26px;
}

.ffm-item{
  border:1px solid rgba(255,255,255,.09);
  background:rgba(0,0,0,.24);
  border-radius:14px;
  padding:20px 22px;
  transition:all .15s ease;
}

.ffm-item:hover{
  border-color:rgba(202,162,70,.48);
  background:rgba(0,0,0,.30);
}

.ffm-item .top{
  display:flex;
  justify-content:space-between;
  gap:14px;
  flex-wrap:wrap;
  align-items:baseline;
}

.ffm-item .wk{
  font-weight:900;
  letter-spacing:.18em;
  text-transform:uppercase;
  font-size:24px;
  color:rgba(202,162,70,.98);
}

.ffm-item .name{
  font-weight:900;
  font-size:22px;
  letter-spacing:.03em;
  color:rgba(232,237,246,.96);
}

.ffm-item .desc{
  margin-top:8px;
  color:rgba(232,237,246,.88);
  line-height:1.55;
  font-size:19px;
}

/* ======================================= */

@media(max-width:900px){
  .ffm-btn{width:100%;max-width:420px;}
  .ffm-item{padding:18px 18px;}
  .ffm-item .wk{font-size:22px;}
  .ffm-item .name{font-size:20px;}
  .ffm-item .desc{font-size:18px;}
}
</style>

<div class="ffm-page">
  <div class="ffm-container">

    <div class="ffm-hero ffm-center">
      <div class="ffm-kicker">10 weeks • Wednesdays • 6:00 PM • Knoxville • No cost</div>
      <h1>The Fight for Manhood</h1>
      <p>
        This is not a lecture series. It’s a <span class="ffm-gold">crucible</span>.
        Ten weeks to stop hiding, stop negotiating, and step into the light with a clean heart and a steady hand.
        We go after the places men drift — and we rebuild a man to lead without fear, ego, or collapse.
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
      Each week is a strike against drift, shame, and fear.
      We don’t worship “being right.” We fight for relationship with God, integrity in the dark, and leadership that protects.
      When the fight is real, you don’t posture — you obey.
    </p>

    <div class="ffm-schedule">

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 1</div>
          <div class="name">The Alarm</div>
        </div>
        <div class="desc">
          Identify the drift. Name the cost. Draw the line in the sand. This is where excuses die and movement starts.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 2</div>
          <div class="name">Expose the Wound</div>
        </div>
        <div class="desc">
          Shame thrives in secrecy. We pull the real story into the light, break agreements with hiding, and regain ground.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 3</div>
          <div class="name">The Father Line</div>
        </div>
        <div class="desc">
          What shaped you matters. What you received. What you didn’t. You face it with truth — and decide what stops with you.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 4</div>
          <div class="name">Sever & Stand</div>
        </div>
        <div class="desc">
          A man leaves childish dependency — emotionally and spiritually. You transfer allegiance, take your place, and stand under God.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 5</div>
          <div class="name">Reclaim Ground</div>
        </div>
        <div class="desc">
          Healing is not denial — it’s confrontation with hope. You face your story, pursue understanding, forgive, and walk free.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 6</div>
          <div class="name">Define the Man</div>
        </div>
        <div class="desc">
          Reject cultural caricatures. Step into ordered strength: humility with backbone, truth with love, courage with restraint.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 7</div>
          <div class="name">Break Performance</div>
        </div>
        <div class="desc">
          A man who fears punishment stays small. We sever fear-based obedience and step into sonship — courage rooted in the Father’s goodness.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 8</div>
          <div class="name">Advance by Faith</div>
        </div>
        <div class="desc">
          Faith moves. It doesn’t freeze. You learn to obey without panic, confront without arrogance, and lead without needing approval.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 9</div>
          <div class="name">Control the Fire</div>
        </div>
        <div class="desc">
          “When angry, do not sin.” Anger becomes a weapon against your home when it’s fed by pride and fear.
          You learn restraint, confession, repair — and you leave no foothold for darkness.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 10</div>
          <div class="name">A Real Man</div>
        </div>
        <div class="desc">
          The standard is Jesus: no hiding, no passivity, no double life. You trust the Father, speak truth, take responsibility, and lead from the light.
          Commissioned, not congratulated.
        </div>
      </div>

    </div>

    <div class="ffm-divider"></div>

    <div class="ffm-center">
      <h2 class="ffm-sectionTitle">Ready?</h2>
      <p class="ffm-lead">
        Stop making deals with drift. Stop letting shame run your life.
        Step into the light, take responsibility, and fight like a man who belongs to God.
      </p>
      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/apply/">Apply for the next cohort</a>
        <a class="ffm-btn" href="/contact/">Talk to us first</a>
      </div>
      <p class="ffm-muted" style="margin-top:14px;font-size:13px;">Men wait. Leaders move.</p>
    </div>

  </div>
</div>
