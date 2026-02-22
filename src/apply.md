---
layout: base.njk
title: Register
---

<section class="section">
  <h3>Register</h3>
  <p class="muted" style="max-width:860px;">
    The next cohort <strong style="color:var(--gold);">{% cohortCountdown %}</strong> — <strong style="color:var(--gold);">{% cohortStartLabel %}</strong> (Knoxville).
    Fill this out and we’ll contact you with the location and start details.
  </p>

  <div style="max-width:860px; margin-top:18px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.02); border-radius:16px; padding:24px;">
    <form name="ffm-registration" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success/">
      <input type="hidden" name="form-name" value="ffm-registration" />

      <p style="display:none;">
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <label>
          <div style="font-weight:900; letter-spacing:.2px; margin-bottom:6px;">First Name</div>
          <input name="first_name" required
            style="width:100%; padding:13px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
        </label>

        <label>
          <div style="font-weight:900; letter-spacing:.2px; margin-bottom:6px;">Last Name</div>
          <input name="last_name" required
            style="width:100%; padding:13px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
        </label>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:14px;">
        <label>
          <div style="font-weight:900; letter-spacing:.2px; margin-bottom:6px;">Email</div>
          <input type="email" name="email" required
            style="width:100%; padding:13px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
        </label>

        <label>
          <div style="font-weight:900; letter-spacing:.2px; margin-bottom:6px;">Phone</div>
          <input name="phone" required
            style="width:100%; padding:13px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
        </label>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:14px;">
        <label>
          <div style="font-weight:900; letter-spacing:.2px; margin-bottom:6px;">Age Range</div>
          <select name="age_range" required
            style="width:100%; padding:13px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;">
            <option value="" selected disabled>Select…</option>
            <option>18–25</option>
            <option>26–35</option>
            <option>36–45</option>
            <option>46–55</option>
            <option>56–65</option>
            <option>66+</option>
          </select>
        </label>

        <label>
          <div style="font-weight:900; letter-spacing:.2px; margin-bottom:6px;">Can you commit to 10 Wednesdays at 6:00 PM?</div>
          <select name="commitment" required
            style="width:100%; padding:13px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;">
            <option value="" selected disabled>Select…</option>
            <option>Yes — I can commit</option>
            <option>Probably — I’ll prioritize it</option>
            <option>Not sure — schedule is tough</option>
          </select>
        </label>
      </div>

      <label style="display:block; margin-top:14px;">
        <div style="font-weight:900; letter-spacing:.2px; margin-bottom:6px;">What are you hoping God changes in you through this?</div>
        <textarea name="hope_change" rows="5" required
          placeholder="Be straight. No perfect answers."
          style="width:100%; padding:13px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;"></textarea>
      </label>

      <label style="display:block; margin-top:14px;">
        <div style="font-weight:900; letter-spacing:.2px; margin-bottom:6px;">How did you hear about Fight for Manhood?</div>
        <input name="referral"
          placeholder="Name / church / friend / social"
          style="width:100%; padding:13px 12px; border-radius:12px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
      </label>

      <label style="display:block; margin-top:14px;">
        <input type="checkbox" name="text_ok" value="yes" />
        <span class="muted" style="margin-left:8px; font-size:14px;">
          You can text me program details and reminders.
        </span>
      </label>

      <div style="margin-top:18px; display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
        <button class="button" type="submit">Submit Registration</button>
        <span class="muted" style="font-size:14px;">
          We’ll follow up with details. Your info stays private.
        </span>
      </div>

      <div style="margin-top:18px; border-top:1px solid rgba(212,175,55,.22); padding-top:14px;">
        <p class="muted" style="margin:0; font-size:14px;">
          <strong style="color:var(--gold);">Starts:</strong> {% cohortStartLabel %}.
          <strong style="color:var(--gold); margin-left:8px;">Countdown:</strong> {% cohortCountdown %}.
        </p>
      </div>
    </form>
  </div>
</section>

<style>
  @media (max-width: 900px) {
    form div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns: 1fr !important; }
  }
</style>
