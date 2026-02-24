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
  --stroke: rgba(255,255,255,.10);
  --stroke2: rgba(255,255,255,.14);
}

.ffm-page{
  min-height:100vh;
  background:
    radial-gradient(900px 650px at 50% -10%, rgba(255,255,255,.10), transparent 60%),
    radial-gradient(800px 650px at 50% 20%, rgba(202,162,70,.10), transparent 65%),
    linear-gradient(180deg, var(--bg0) 0%, var(--bg1) 55%, var(--bg0) 100%);
  color:var(--text);
  padding:clamp(24px,4vw,56px) 18px 100px;
}

.ffm-container{max-width:1000px;margin:0 auto;}
.ffm-center{text-align:center;}
.ffm-gold{color:var(--gold);}
.ffm-muted{color:var(--muted);}

.ffm-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,var(--line),transparent);
  margin:46px auto;
  width:min(820px,92%);
}

.ffm-kicker{
  display:inline-block;
  border:1px solid rgba(202,162,70,.35);
  background:rgba(0,0,0,.22);
  padding:10px 18px;
  border-radius:999px;
  font-size:14px;
  letter-spacing:.16em;
  text-transform:uppercase;
  margin-bottom:18px;
}

.ffm-hero h1{
  font-size:clamp(48px,5.8vw,78px);
  font-weight:900;
  letter-spacing:-0.02em;
  margin:0 0 14px;
}
.ffm-hero p{
  max-width:960px;
  margin:0 auto;
  font-size:23px;
  line-height:1.6;
  color:rgba(232,237,246,.95);
}

.ffm-hero .subline{
  margin-top:14px;
  font-size:17px;
  color:rgba(232,237,246,.78);
}

.ffm-ctaRow{
  display:flex;
  justify-content:center;
  gap:16px;
  flex-wrap:wrap;
  margin-top:28px;
}

.ffm-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:18px 30px;
  border-radius:12px;
  font-weight:900;
  text-transform:uppercase;
  font-size:15px;
  text-decoration:none;
  min-width:260px;
  border:1px solid var(--stroke2);
  color:var(--text);
  background:rgba(0,0,0,.18);
}
.ffm-btn.primary{
  background:linear-gradient(180deg,rgba(202,162,70,.95),rgba(202,162,70,.80));
  color:#0a0f18;
  border-color: rgba(202,162,70,.55);
}
.ffm-btn:hover{filter:brightness(1.06);transform:translateY(-1px);}

.ffm-sectionTitle{
  margin:0;
  font-size:32px;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-weight:900;
  text-align:center;
}
.ffm-lead{
  margin:14px auto 0;
  max-width:960px;
  text-align:center;
  color:rgba(169,179,199,.96);
  line-height:1.7;
  font-size:21px;
}

/* ===== TIGHTER WEEK FLOW ===== */

.ffm-schedule{
  display:grid;
  gap:6px; /* reduced spacing between weeks */
  margin-top:26px;
}

.ffm-item{
  border:1px solid rgba(255,255,255,.12);
  background:rgba(0,0,0,.28);
  border-radius:14px;
  padding:20px 22px; /* slightly tighter */
  transition:all .15s ease;
}

.ffm-item:hover{
  border-color:rgba(202,162,70,.55);
  background:rgba(0,0,0,.34);
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
  font-size:26px;
  color:rgba(202,162,70,1);
}

.ffm-item .name{
  font-weight:900;
  font-size:23px;
  letter-spacing:.03em;
  color:rgba(232,237,246,.98);
}

.ffm-item .desc{
  margin-top:6px;
  color:rgba(232,237,246,.92);
  line-height:1.55;
  font-size:20px;
}

@media(max-width:900px){
  .ffm-btn{width:100%;max-width:480px;}
  .ffm-item{padding:18px;}
  .ffm-item .wk{font-size:24px;}
  .ffm-item .name{font-size:21px;}
  .ffm-item .desc{font-size:19px;}
  .ffm-hero p{font-size:21px;}
  .ffm-lead{font-size:19px;}
}
</style>

<div class="ffm-page">
  <div class="ffm-container">

    <div class="ffm-hero ffm-center">
      <div class="ffm-kicker">10 weeks • Wednesdays • 6:00 PM • Knoxville • No cost</div>
      <h1>The Fight for Manhood</h1>
      <p>
        This is not a lecture series. It’s a crucible.
        Ten weeks to confront drift, expose shame, break fear-based obedience,
        and step into the light as a son who leads without hiding.
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
      Each week dismantles drift and builds ordered strength.
      We expose. We rebuild. We advance.
    </p>

    <div class="ffm-schedule">

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 1</div>
          <div class="name">Sound the Alarm: How Did We Get Here</div>
        </div>
        <div class="desc">
          Identify drift. Name the cost. Refuse cultural confusion. Decide to fight.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 2</div>
          <div class="name">Expose the Wound: Breaking Shame</div>
        </div>
        <div class="desc">
          Drag secrecy into the light. Crush the lie that says “I am wrong.” Begin freedom.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 3</div>
          <div class="name">Restore the Father Line</div>
        </div>
        <div class="desc">
          Face what shaped you. Break destructive cycles. Decide what stops with you.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 4</div>
          <div class="name">Raised in a Feminine Culture: Reclaiming God’s Order</div>
        </div>
        <div class="desc">
          Transfer allegiance. Reject passivity. Stand as a man under God’s design.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 5</div>
          <div class="name">Reclaim Lost Ground: Finding Healing</div>
        </div>
        <div class="desc">
          Confront the story. Forgive. Release. Take back territory shame stole.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 6</div>
          <div class="name">Forge the Man: Biblical Manhood</div>
        </div>
        <div class="desc">
          Reject caricatures. Embrace ordered strength—truth, courage, restraint, integrity.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 7</div>
          <div class="name">Crush Performance Religion: Law vs. Grace</div>
        </div>
        <div class="desc">
          Move from condemnation to sonship. Obey from relationship, not fear.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 8</div>
          <div class="name">Advance by Faith: Faith & Fear</div>
        </div>
        <div class="desc">
          Break fear-based paralysis. Step forward in trust and decisive obedience.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 9</div>
          <div class="name">Master the Fire: Relationships & Rage</div>
        </div>
        <div class="desc">
          Harness anger. Repair instead of erupt. Lead your home with strength under control.
        </div>
      </div>

      <div class="ffm-item">
        <div class="top">
          <div class="wk">Week 10</div>
          <div class="name">The Final Measure: Am I a Real Man, How to Know for Sure</div>
        </div>
        <div class="desc">
          Measure your life against Jesus. No hiding. No passivity. Trust the Father. Lead from the light.
        </div>
      </div>

    </div>

    <div class="ffm-divider"></div>

    <div class="ffm-center">
      <h2 class="ffm-sectionTitle">Ready?</h2>
      <p class="ffm-lead">
        Stop drifting. Stop negotiating with shame.
        Step into the light and fight like a man who belongs to God.
      </p>
      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/apply/">Apply for the next cohort</a>
        <a class="ffm-btn" href="/contact/">Talk to us first</a>
      </div>
      <p class="ffm-muted" style="margin-top:16px;font-size:14px;">Men wait. Leaders move.</p>
    </div>

  </div>
</div>
