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
  padding:clamp(22px,3.2vw,44px) 18px 78px;
}

.ffm-container{max-width:1000px;margin:0 auto;}
.ffm-center{text-align:center;}
.ffm-gold{color:var(--gold);}
.ffm-muted{color:var(--muted);}

.ffm-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,var(--line),transparent);
  margin:30px auto;
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
  margin-bottom:14px;
}

.ffm-hero h1{
  font-size:clamp(48px,5.8vw,78px);
  font-weight:900;
  letter-spacing:-0.02em;
  margin:0 0 10px;
}
.ffm-hero p{
  max-width:960px;
  margin:0 auto;
  font-size:23px;
  line-height:1.6;
  color:rgba(232,237,246,.95);
}

.ffm-hero .subline{
  margin-top:10px;
  font-size:17px;
  color:rgba(232,237,246,.78);
}

.ffm-ctaRow{
  display:flex;
  justify-content:center;
  gap:16px;
  flex-wrap:wrap;
  margin-top:18px;
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
  margin:10px auto 0;
  max-width:960px;
  text-align:center;
  color:rgba(169,179,199,.96);
  line-height:1.7;
  font-size:21px;
}

/* ===== ULTRA DENSE STACK MODE WITH GOLD DIVIDER ===== */

.ffm-schedule{
  display:block;
  margin-top:10px;
}

.ffm-item{
  background:rgba(0,0,0,.34);
  padding:10px 14px;
  border-radius:0;
  border:0;
}

/* Gold glowing divider */
.ffm-item:not(:first-child){
  border-top:2px solid rgba(202,162,70,.85);
  box-shadow:
    inset 0 1px 8px rgba(202,162,70,.45),
    inset 0 0 18px rgba(202,162,70,.25);
  margin-top:14px;
}

.ffm-item:hover{
  background:rgba(0,0,0,.42);
}

.ffm-item .top{
  display:flex;
  justify-content:space-between;
  gap:8px;
  flex-wrap:wrap;
  align-items:baseline;
}

.ffm-item .wk{
  font-weight:900;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-size:20px;
  color:rgba(202,162,70,1);
}

.ffm-item .name{
  font-weight:900;
  font-size:18px;
  letter-spacing:.01em;
  color:rgba(232,237,246,.98);
}

.ffm-item .desc{
  margin-top:3px;
  color:rgba(232,237,246,.88);
  line-height:1.35;
  font-size:17px;
}

/* Closing emphasis */
.ffm-closing{
  margin-top:18px;
  font-size:15px;
  letter-spacing:.22em;
  text-transform:uppercase;
  font-weight:900;
  color:rgba(202,162,70,.95);
  text-align:center;
}

@media(max-width:900px){
  .ffm-btn{width:100%;max-width:480px;}
  .ffm-item{padding:10px 12px;}
  .ffm-item .wk{font-size:18px;}
  .ffm-item .name{font-size:17px;}
  .ffm-item .desc{font-size:16px;}
  .ffm-hero p{font-size:21px;}
  .ffm-lead{font-size:19px;}
}
@media(max-width:520px){
  .ffm-page{ padding:20px 14px 74px; }
}
</style>

<div class="ffm-page">
  <div class="ffm-container">

    <div class="ffm-hero ffm-center">
      <div class="ffm-kicker">10 weeks • Wednesdays • 6:00 PM • Knoxville • No cost</div>
      <h1>The Fight for Manhood</h1>
      <p>
        This is not a lecture series. It’s a crucible.
        Ten weeks to confront compromise, expose hidden strongholds, crush cowardly surrender, and stand in the light as a son who leads without retreat.
      </p>
      <div class="subline">High challenge. High support. Confidential. Men only.</div>

      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/register/">Apply now</a>
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
          <div class="name">Expose the Wound: Breaking Patterns</div>
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
          Confront the story. Forgive. Release. Take back territory patterns stole.
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
        Stop negotiating with weakness.
        Stop surrendering ground that was never meant to be lost.
        Step into the light and fight like a man who belongs to God.
      </p>
      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/register/">Apply for the next cohort</a>
        <a class="ffm-btn" href="/contact/">Talk to us first</a>
      </div>
      <p class="ffm-closing">Men wait. Leaders move.</p>
    </div>

  </div>
</div>