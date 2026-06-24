# InSync Lead Landing Page

Bilingual (Arabic/English) lead-capture landing page for the TikTok ad campaign. Static site, no backend — built to run on GitHub Pages.

## Files
- `index.html` — page markup + form
- `styles.css` — styling
- `i18n.js` — Arabic/English text strings
- `script.js` — language switching + form submission logic
- `assets/logo.png` — InSync logo

## Required setup before going live

### 1. Get a Web3Forms access key
1. Go to https://web3forms.com
2. Enter the email that should receive submissions (use `y.elkhalili@outlook.com`)
3. Confirm the verification email Web3Forms sends you
4. Copy the **Access Key** they give you

### 2. Add the key to the form
Open `index.html`, find this line:
```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```
Replace `YOUR_WEB3FORMS_ACCESS_KEY` with the key from step 1.

The manager's email (`diegoisme25@gmail.com`) is already wired up as a `cc` recipient on every submission — no extra setup needed for that part.

### 3. Test it
Open `index.html` locally (or via a local server) and submit a test entry. Check both inboxes (and spam folders) for the notification email.

## Deploying to GitHub Pages
1. Push this `marketing` folder's contents to a GitHub repo (e.g. `insync-landing`)
2. In the repo: **Settings → Pages → Source** → select the branch (e.g. `main`) and root folder
3. Your page will be live at `https://<username>.github.io/<repo-name>/`
4. Once you have a custom domain, add a `CNAME` file with the domain name and update DNS

## Notes
- Default language on load is Arabic (RTL); the toggle button switches to English (LTR) and remembers the choice via `localStorage`.
- The WhatsApp CTA after a successful submission points to: https://wa.me/message/52IYPYDN5BQ6E1
- Required fields: Name, Phone, Company name, Job title. Email is optional.
- There's a hidden honeypot field (`botcheck`) for basic spam protection — leave it as is.
