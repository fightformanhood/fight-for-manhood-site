---
layout: base.njk
title: Register
---

<section class="section">
  <h3>Register</h3>
  <p class="muted" style="max-width:820px;">
    Fill this out and we’ll contact you with the location and start details.
  </p>

  <div style="max-width:820px; margin-top:18px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.02); border-radius:14px; padding:22px;">
    <form name="ffm-registration" method="POST" data-netlify="true" action="/success/">
      <input type="hidden" name="form-name" value="ffm-registration" />

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <label>
          <div style="font-weight:800; margin-bottom:6px;">First Name</div>
          <input name="first_name" required style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
        </label>

        <label>
          <div style="font-weight:800; margin-bottom:6px;">Last Name</div>
          <input name="last_name" required style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
        </label>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:14px;">
        <label>
          <div style="font-weight:800; margin-bottom:6px;">Email</div>
          <input type="email" name="email" required style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
        </label>

        <label>
          <div style="font-weight:800; margin-bottom:6px;">Phone</div>
          <input name="phone" required style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
        </label>
      </div>

      <label style="display:block; margin-top:14px;">
        <div style="font-weight:800; margin-bottom:6px;">Age Range</div>
        <select name="age_range" style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;">
          <option>18–25</option>
          <option>26–35</option>
          <option>36–45</option>
          <option>46–55</option>
          <option>56–65</option>
          <option>66+</option>
        </select>
      </label>

      <label style="display:block; margin-top:14px;">
        <div style="font-weight:800; margin-bottom:6px;">Why are you joining?</div>
        <textarea name="why_join" rows="5" style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;"></textarea>
      </label>

      <label style="display:block; margin-top:14px;">
        <div style="font-weight:800; margin-bottom:6px;">How did you hear about us?</div>
        <input name="referral" style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.18); background:rgba(0,0,0,.18); color:#fff;" />
      </label>

      <div style="margin-top:18px; display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
        <button class="button" type="submit">Submit Registration</button>
        <span class="muted" style="font-size:14px;">We’ll follow up with details.</span>
      </div>
    </form>
  </div>
</section>

<style>
  @media (max-width: 900px) {
    form div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns: 1fr !important; }
  }
</style>
