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
  font-size:12px;
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
      <h1>The Fight for Manhood Program</h1>
      <p>
        This is a 10-week crucible for men who refuse to stay the same.
        We’re not building spectators. We’re building sons, leaders, husbands, fathers, and men who live in the light.
      </p>
      <div class="subline">High challenge. High support. Confidential. Men only.</div>

      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/register/">Register now</a>
        <a class="ffm-btn" href="/contact/">Ask a question</a>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">What This Is</h2>
    <p class="ffm-lead">
      The Fight is a structured, spiritual leadership process designed to expose drift, break shame, restore identity,
      and build men who take responsibility without posturing.
    </p>

    <div class="ffm-grid3">
      <div class="ffm-card">
        <h3>Truth</h3>
        <p>Clear teaching that cuts through fog. No fluff. No performance. Straight lines.</p>
      </div>
      <div class="ffm-card">
        <h3>Brotherhood</h3>
        <p>Men walking together in honesty. Confidential conversation that produces real change.</p>
      </div>
      <div class="ffm-card">
        <h3>Action</h3>
        <p>Not inspiration. Decisions. Repentance. Repair. A man stepping into the light without shame.</p>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">What A Typical Night Looks Like</h2>
    <p class="ffm-lead">
      Every week is simple, consistent, and built for real transformation — not information overload.
    </p>

    <div class="ffm-grid2">
      <div class="ffm-card">
        <h3>1) Teaching</h3>
        <p>Direct instruction (about 30–45 minutes). Biblical. Practical. Masculine. Clear.</p>
      </div>
      <div class="ffm-card">
        <h3>2) Discussion</h3>
        <p>Confidential conversation in the room. Real men. Real issues. No shame games.</p>
      </div>
      <div class="ffm-card">
        <h3>3) Application</h3>
        <p>Specific decisions for the week. What you’ll do, what you’ll say, what you’ll repair.</p>
      </div>
      <div class="ffm-card">
        <h3>4) Prayer</h3>
        <p>Not religious performance — alignment. Asking, listening, responding, trusting.</p>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">What You’ll Walk Away With</h2>
    <p class="ffm-lead">
      Men don’t need more content. They need clarity, courage, and a path forward.
    </p>

    <ul class="ffm-list">
      <li><strong>Identity:</strong> You’ll know who you are as a son — and you’ll stop living in confusion.</li>
      <li><strong>Freedom:</strong> You’ll bring hidden things into the light and cut agreements with shame.</li>
      <li><strong>Leadership:</strong> You’ll take responsibility without control, passivity, or performance.</li>
      <li><strong>Relationships:</strong> You’ll strengthen your marriage, your family, and your brotherhood.</li>
      <li><strong>Momentum:</strong> You’ll leave with a plan — not a feeling.</li>
    </ul>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">10-Week Flow</h2>
    <p class="ffm-lead">
      Here’s the structure. Titles are written in a way that makes sense on a website — we can rename them to match your exact curriculum.
    </p>

    <div class="ffm-schedule">
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 1</div><div class="name">The Call</div></div>
        <div class="desc">A man’s identity, authority, and why drift is so normal.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 2</div><div class="name">The Battle Within</div></div>
        <div class="desc">Where men lose momentum: agreements, patterns, and hidden compromises.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 3</div><div class="name">The Father Wound</div></div>
        <div class="desc">How the past shapes leadership — and how to break the cycle.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 4</div><div class="name">Shame & The Light</div></div>
        <div class="desc">When a man brings his whole life into the light, he becomes free.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 5</div><div class="name">Truth & Alignment</div></div>
        <div class="desc">Not compliance — relationship. Learning to hear and respond.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 6</div><div class="name">Responsibility</div></div>
        <div class="desc">Taking ownership without control, pride, or passivity.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 7</div><div class="name">Marriage & Brotherhood</div></div>
        <div class="desc">How real men repair, communicate, and fight for unity.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 8</div><div class="name">Courage</div></div>
        <div class="desc">Confrontation, honesty, and stepping forward when it’s uncomfortable.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 9</div><div class="name">Mission</div></div>
        <div class="desc">A man’s calling, direction, and building something that lasts.</div>
      </div>
      <div class="ffm-item">
        <div class="top"><div class="wk">Week 10</div><div class="name">The Line in the Sand</div></div>
        <div class="desc">Commitment, next steps, and how to keep momentum after the program ends.</div>
      </div>
    </div>

    <div class="ffm-divider"></div>

    <h2 class="ffm-sectionTitle">FAQ</h2>
    <p class="ffm-lead">Answer the objections before they become excuses.</p>

    <div class="ffm-faq">
      <details>
        <summary>Is this really free?</summary>
        <div class="ans">Yes. There’s no cost. The only requirement is commitment and honesty.</div>
      </details>

      <details>
        <summary>What if I miss a week?</summary>
        <div class="ans">Life happens. But men who change show up. If you miss, you re-engage and get back in.</div>
      </details>

      <details>
        <summary>Is this a Bible study?</summary>
        <div class="ans">It’s biblical, but it’s not academic. This is leadership formation — truth, repentance, and action.</div>
      </details>

      <details>
        <summary>Who is this for?</summary>
        <div class="ans">Men 18+ who are ready to grow. If you’re comfortable where you are, this isn’t for you.</div>
      </details>

      <details>
        <summary>What happens after I register?</summary>
        <div class="ans">You’ll receive details for location, what to bring, and how to prepare for Week 1.</div>
      </details>
    </div>

    <div class="ffm-divider"></div>

    <div class="ffm-center">
      <h2 class="ffm-sectionTitle">Ready?</h2>
      <p class="ffm-lead">
        We cap this at 20 men. When the seats are filled, registration closes.
      </p>
      <div class="ffm-ctaRow">
        <a class="ffm-btn primary" href="/register/">Register for the next cohort</a>
        <a class="ffm-btn" href="/contact/">Talk to us first</a>
      </div>
      <p class="ffm-muted" style="margin-top:14px;font-size:13px;">Men wait. Leaders decide.</p>
    </div>

  </div>
</div>
