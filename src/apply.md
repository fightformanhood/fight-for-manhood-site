---
layout: base.njk
title: Register
description: Register for the next Fight for Manhood cohort.
permalink: /apply/
---

<section class="section" style="text-align:center;">
  <h3>Register for the Next Cohort</h3>
  <p class="muted" style="max-width:820px; margin:0 auto; font-size:18px;">
    Wednesdays at 6:00 PM • Knoxville • No cost • 10 weeks
  </p>

  <div style="margin:28px auto 0; max-width:760px; text-align:left; border:1px solid rgba(212,175,55,.22); background:rgba(255,255,255,.02); border-radius:16px; padding:18px;">
    <form name="ffm-register" method="POST" data-netlify="true" action="/success/">
      <input type="hidden" name="form-name" value="ffm-register" />

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div>
          <label style="display:block; font-weight:800; margin-bottom:6px;">First name</label>
          <input name="firstName" required style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.14); background:rgba(0,0,0,.20); color:#fff;" />
        </div>
        <div>
          <label style="display:block; font-weight:800; margin-bottom:6px;">Last name</label>
          <input name="lastName" required style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.14); background:rgba(0,0,0,.20); color:#fff;" />
        </div>
      </div>

      <div style="margin-top:12px;">
        <label style="display:block; font-weight:800; margin-bottom:6px;">Email</label>
        <input type="email" name="email" required style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.14); background:rgba(0,0,0,.20); color:#fff;" />
      </div>

      <div style="margin-top:12px;">
        <label style="display:block; font-weight:800; margin-bottom:6px;">Phone</label>
        <input name="phone" required style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.14); background:rgba(0,0,0,.20); color:#fff;" />
      </div>

      <div style="margin-top:12px;">
        <label style="display:block; font-weight:800; margin-bottom:6px;">Anything we should know? (optional)</label>
        <textarea name="notes" rows="4" style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.14); background:rgba(0,0,0,.20); color:#fff;"></textarea>
      </div>

      <div style="margin-top:16px; border-top:1px solid rgba(212,175,55,.20); padding-top:16px; display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
        <button class="button" type="submit">Submit Registration</button>
        <div class="muted" style="font-size:14px;">
          You’ll get a confirmation message after you submit.
        </div>
      </div>
    </form>
  </div>

  <p class="muted" style="margin-top:16px; font-size:13px;">
    Confidential • Men only • High challenge, high support
  </p>
</section>

<style>
  @media (max-width: 800px) {
    form div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns:1fr !important; }
  }
</style>
