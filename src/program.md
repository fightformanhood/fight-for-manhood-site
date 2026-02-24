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

/* 🔥 UPDATED WEEK SIZE HERE */
.ffm-item .wk{
  font-weight:900;
  letter-spacing:.14em;
  text-transform:uppercase;
  font-size:clamp(16px, 2vw, 22px);
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
