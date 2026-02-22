---
layout: base.njk
title: Apply
---

<section class="hero">
  <h2>Apply</h2>
  <p style="color:#c9a227; font-weight:700; letter-spacing:.3px;">
    Take the first step. Show up. Do the work.
  </p>
  <p class="muted">
    10 weeks • Wednesday nights • Knoxville, TN • No cost
  </p>
</section>

<section class="section">
  <h3>Application</h3>
  <p class="muted">
    This isn’t a “sign up.” It’s an application — because we want men who are ready.
    Fill this out and a leader will reach out with next steps.
  </p>

  <!-- Netlify Forms (works automatically when deployed) -->
  <form name="ffm-apply" method="POST" data-netlify="true" netlify-honeypot="bot-field" style="margin-top:22px;">
    <input type="hidden" name="form-name" value="ffm-apply" />
    <p style="display:none;">
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>

    <div style="display:grid; gap:14px; max-width:720px;">
      <div>
        <label>Full Name</label><br/>
        <input name="name" type="text" required style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;">
      </div>

      <div>
        <label>Phone</label><br/>
        <input name="phone" type="tel" required style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;">
      </div>

      <div>
        <label>Email</label><br/>
        <input name="email" type="email" required style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;">
      </div>

      <div>
        <label>Age</label><br/>
        <input name="age" type="number" min="16" max="110" style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;">
      </div>

      <div>
        <label>City</label><br/>
        <input name="city" type="text" style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;">
      </div>

      <div>
        <label>Marital Status</label><br/>
        <select name="marital_status" style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;">
          <option value="">Select…</option>
          <option>Single</option>
          <option>Married</option>
          <option>Separated</option>
          <option>Divorced</option>
          <option>Widowed</option>
        </select>
      </div>

      <div>
        <label>What made you apply?</label><br/>
        <textarea name="why_apply" rows="5" required style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;"></textarea>
      </div>

      <div>
        <label>What do you want to be different 10 weeks from now?</label><br/>
        <textarea name="what_change" rows="5" style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;"></textarea>
      </div>

      <div>
        <label>How did you hear about Fight for Manhood?</label><br/>
        <input name="referral" type="text" style="width:100%; padding:12px; border-radius:8px; border:1px solid #222; background:#0f0f0f; color:#fff;">
      </div>

      <button class="button" type="submit" style="border:none; cursor:pointer;">
        Submit Application
      </button>

      <p class="muted" style="margin-top:6px;">
        By submitting, you agree to be contacted about next steps.
      </p>
    </div>
  </form>
</section>

<section class="section" style="padding-top:0;">
  <h3>What Happens Next</h3>
  <div style="border:1px solid #222; padding:18px; border-radius:12px; background:#111; max-width:720px;">
    <p style="margin:0 0 10px 0;"><strong style="color:#c9a227;">1) We review your application</strong></p>
    <p class="muted" style="margin:0 0 14px 0;">A leader will reach out to confirm details and answer questions.</p>

    <p style="margin:0 0 10px 0;"><strong style="color:#c9a227;">2) You get the start details</strong></p>
    <p class="muted" style="margin:0 0 14px 0;">Location, time, what to expect, and what to bring.</p>

    <p style="margin:0 0 10px 0;"><strong style="color:#c9a227;">3) You show up and fight</strong></p>
    <p class="muted" style="margin:0;">No performance. No hiding. No excuses.</p>
  </div>
</section>

<style>
  .muted { color:#b7b7b7; }
  label { font-weight:700; }
</style>
