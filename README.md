# Fight for Manhood — Program Website (Eleventy + Decap CMS)

This repo is a clean, fast, low-maintenance website that you can edit in a browser without touching code.

## 1) Local run (optional)
1. Install Node.js (LTS).
2. In this folder:
   - `npm install`
   - `npm run dev`
3. Open the local URL Eleventy prints.

## 2) Deploy (recommended: Netlify)
1. Create a GitHub repo and push this code.
2. Create a Netlify site from the repo.
3. In Netlify:
   - Build command: `npm run build`
   - Publish directory: `_site`

### Enable browser editing (Decap CMS)
Decap CMS lives at `/admin`.

To enable logins + editing on Netlify:
1. Netlify → **Identity** → Enable Identity.
2. Identity → **Registration**: set to “Invite only”.
3. Identity → **Services** → Enable **Git Gateway**.
4. (Optional) Identity → Add yourself as an invited user.

Then visit:
- `https://YOUR-SITE.netlify.app/admin`

## 3) What you can edit
- Pages: `src/*.md` (Home, About, Program, Events, Resources, Contact, Give)
- Posts: `src/posts/*.md` (blog / updates)

## 4) “On the fly” update workflow (the simple way)
When you have an idea, do one of these:
- Edit directly in `/admin` (best).
- Or paste text to ChatGPT and say: “Update the Programs page with this copy” — then copy/paste the updated Markdown into the CMS.

## 5) Content model
- Evergreen Fight for Manhood program story
- Ten-week curriculum and transformation pathway
- Graduate stories
- Current cohort details and registration
- Coming-soon cohort locations
- General questions, future-location interest, and community partnership inquiries

---
If you want *me* (ChatGPT) to “update the website” automatically, the clean path is connecting the CMS through an automation (API key + webhook). We can set that up later once you pick hosting and want secure access.
