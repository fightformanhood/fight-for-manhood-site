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

.ffm-list{
  margin:14px 0 0;
  padding-left:18px;
  color:rgba(232,237,246,.88);
  line-height:1.75;
}
.ffm-list li{ margin:6px 0; }

.ffm-schedule{
  display:grid;
  gap:12px;
  margin-top:18px;
}
.ffm-item{
  border:1px solid rgba(255,255,255,.08);
  background:rgba(0,0,0,.16);
  border-radius:14px;
  padding:14px 16px;
}
.ffm-item .top{
  display:flex;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
}
.ffm-item .wk{
  font-weight:900;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-size:18px;
  color:rgba(202,162,70,.95);
}
.ffm-item .name{
  font-weight:900;
  font-size:15px;
}
.ffm-item .desc{
  margin-top:8px;
  color:rgba(169,179,199,.92);
  line-height:1.65;
  font-size:14px;
}

.ffm-faq details{
  border:1px solid rgba(255,255,255,.08);
  background:rgba(0,0,0,.16);
  border-radius:14px;
  padding:14px 16px;
}
.ffm-faq details + details{ margin-top:12px; }
.ffm-faq summary{
  cursor:pointer;
  font-weight:900;
  letter-spacing:.06em;
  text-transform:uppercase;
  font-size:12px;
  color:rgba(232,237,246,.92);
  list-style:none;
}
.ffm-faq summary::-webkit-details-marker{ display:none; }
.ffm-faq summary::after{
  content:"▾";
  float:right;
  color:rgba(202,162,70,.95);
}
.ffm-faq details[open] summary::after{ content:"▴"; }
.ffm-faq .ans{
  margin-top:10px;
  color:rgba(169,179,199,.92);
  line-height:1.7;
}

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
        We’re not polishing your image. We’re pulling you into the light—into identity, responsibility, and real brotherhood.
      </p>
      <div class="subline">High challenge. High support. Confidential. Men only.</div>

      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/apply/">Apply now</a>
        <a class="ffm-btn" href="/contact/">Ask a question</a>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">What This Is</h2>
    <p class="ffm-lead">
      Most men aren’t avoiding God. They’re avoiding shame. This program is built to break that cycle.
      We confront wounds, expose hiding, dismantle performance religion, and rebuild men as sons who live with integrity when no one is watching.
    </p>

    <div class="ffm-grid3">
      <div class="ffm-card">
        <h3>Exposure</h3>
        <p>Shame dies in the light. No posturing. No pretending. You bring the real story into the open and stop living split.</p>
      </div>
      <div class="ffm-card">
        <h3>Formation</h3>
        <p>Not behavior management. Heart formation. The shift from rule-keeping to relationship—sonship instead of condemnation.</p>
      </div>
      <div class="ffm-card">
        <h3>Brotherhood</h3>
        <p>Men walking together in honesty. You don’t heal in isolation. You don’t win alone. Two are better than one.</p>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">Who This Is For</h2>
    <p class="ffm-lead">
      Men 18+ who are done making excuses. If you’re tired of drift, tired of hiding, tired of acting strong while bleeding inside—this is for you.
      If you want comfort, stay home.
    </p>

    <div class="ffm-grid2">
      <div class="ffm-card">
        <h3>You’ll Fit Here If…</h3>
        <ul class="ffm-list" style="margin-top:10px;">
          <li>You’re ready to tell the truth—about God, yourself, your past, your patterns.</li>
          <li>You want strength without swagger and leadership without control.</li>
          <li>You want brotherhood that doesn’t play games.</li>
          <li>You’re willing to show up and do the work.</li>
        </ul>
      </div>
      <div class="ffm-card">
        <h3>You Won’t Like This If…</h3>
        <ul class="ffm-list" style="margin-top:10px;">
          <li>You need to protect your image.</li>
          <li>You want a “tip of the week” instead of repentance and repair.</li>
          <li>You want to stay passive and call it “busy.”</li>
          <li>You want to blame everyone else and stay the same.</li>
        </ul>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">What A Typical Night Looks Like</h2>
    <p class="ffm-lead">
      Every week is consistent. No circus. No hype. Just truth, brotherhood, and action.
    </p>

    <div class="ffm-grid2">
      <div class="ffm-card">
        <h3>1) Teaching</h3>
        <p>Clear, Scripture-rooted instruction (30–45 minutes). Direct. Practical. Built to cut through fog and excuses.</p>
      </div>
      <div class="ffm-card">
        <h3>2) Table Talk</h3>
        <p>Confidential discussion. Real men, real issues. You’re not punished for honesty—you’re strengthened by it.</p>
      </div>
      <div class="ffm-card">
        <h3>3) Assignment</h3>
        <p>A specific move for the week: a decision, a conversation, an apology, a boundary, a repair. Momentum over emotion.</p>
      </div>
      <div class="ffm-card">
        <h3>4) Prayer</h3>
        <p>Not religious performance—alignment. Asking, listening, trusting. Learning to be led from within, not driven by fear.</p>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">What You’ll Walk Away With</h2>
    <p class="ffm-lead">
      Not inspiration. Clarity. Freedom. A backbone. A path.
    </p>

    <ul class="ffm-list">
      <li><strong>Freedom from shame:</strong> guilt says “I did wrong.” shame says “I am wrong.” we cut that lie at the root.</li>
      <li><strong>Identity as a son:</strong> you stop striving to measure up and start living from what God already declared true.</li>
      <li><strong>Clean responsibility:</strong> you stop blaming and start carrying what is yours—without pride, passivity, or control.</li>
      <li><strong>Strength in relationships:</strong> you learn repair, truth-telling, boundaries, and leadership that protects instead of postures.</li>
      <li><strong>Brotherhood:</strong> men who know you, sharpen you, and won’t let you disappear.</li>
    </ul>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">10-Week Flow</h2>
    <p class="ffm-lead">
      This is the roadmap. It’s progressive on purpose. Each week builds pressure, then builds strength.
    </p>

    <div class="ffm-schedule">
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 1</div><div class="name">How Did We Get Here</div></div>
        <div class="desc">Why so many men drift. What happened to masculine formation—and what it costs when men stay passive.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 2</div><div class="name">Wounds & Shame</div></div>
        <div class="desc">Shame isn’t guilt. It’s identity poison. We expose hiding, blame, fig leaves, and the isolation that kills men.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 3</div><div class="name">Father Figures</div></div>
        <div class="desc">The father wound shapes everything. What every son needed, what went missing, and how God restores identity and initiation.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 4</div><div class="name">Momma’s Boy</div></div>
        <div class="desc">A man must leave—physically and emotionally. We confront over-attachment, blurred roles, and the “transfer of allegiance” into manhood.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 5</div><div class="name">Finding Healing</div></div>
        <div class="desc">You can’t redeem what you refuse to examine. We face the story with honesty, gain understanding, and learn release that brings freedom.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 6</div><div class="name">Biblical Manhood</div></div>
        <div class="desc">Masculinity isn’t aggression or charisma. It’s ordered strength: truth, courage, protection, provision, and integrity under God.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 7</div><div class="name">Law vs. Grace</div></div>
        <div class="desc">The shift from performance to sonship. No condemnation. Relationship before regulation. Confession before correction. Freedom begins here.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 8</div><div class="name">Faith & Fear</div></div>
        <div class="desc">Fear-based obedience produces paralysis. Faith-based obedience produces courage. We learn to trust the Father and move anyway.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 9</div><div class="name">Relationships & Rage</div></div>
        <div class="desc">Anger is often a cover for pain and fear. We confront conflict patterns, learn restraint, and become men who repair instead of erupt.</div>
      </div>

      <div class="ffm-item">
        <div class="top"><div class="wk">Week 10</div><div class="name">A Real Man</div></div>
        <div class="desc">The standard is Jesus: trusts the Father, rejects passivity, speaks truth, stops hiding, accepts responsibility, leads, and trusts God for reward.</div>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">FAQ</h2>
    <p class="ffm-lead">Kill excuses before they become exits.</p>

    <div class="ffm-faq">
      <details>
        <summary>Is this really free?</summary>
        <div class="ans">Yes. No cost. The requirement is commitment and honesty.</div>
      </details>

      <details>
        <summary>Is this a Bible study?</summary>
        <div class="ans">It’s Scripture-rooted, but it’s not academic. This is formation—truth, repentance, repair, and action.</div>
      </details>

      <details>
        <summary>What if I miss a week?</summary>
        <div class="ans">Life happens. But men who change show up. If you miss, you re-engage immediately. No disappearing.</div>
      </details>

      <details>
        <summary>What happens after I apply?</summary>
        <div class="ans">We’ll confirm your spot and send the location details, expectations, and what to bring for Week 1.</div>
      </details>

      <details>
        <summary>How does registration closing work?</summary>
        <div class="ans">
          We cap this at 20 men. When it’s full, it’s full.
          If seats remain, applications close <strong>the Sunday before Week 1 at 11:59 PM</strong>.
          Men procrastinate. Leaders decide early.
        </div>
      </details>

      <details>
        <summary>Is this confidential?</summary>
        <div class="ans">Yes. What’s shared in the room stays in the room. No gossip. No leaks. Brotherhood requires trust.</div>
      </details>
    </div>

    <div class="ffm-divider"></div>

    <div class="ffm-center">
      <h2 class="ffm-sectionTitle">Ready?</h2>
      <p class="ffm-lead">
        If you’re tired of drift, stop negotiating.
        Step into the light. Take responsibility. Join the fight.
      </p>
      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/apply/">Apply for the next cohort</a>
        <a class="ffm-btn" href="/contact/">Talk to us first</a>
      </div>
      <p class="ffm-muted" style="margin-top:14px;font-size:13px;">Men wait. Leaders move.</p>
    </div>

  </div>
</div>
