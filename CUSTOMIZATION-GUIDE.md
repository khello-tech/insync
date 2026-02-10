# Quick Customization Guide

This guide helps you customize your website in **under 30 minutes**.

## Step-by-Step Checklist

### ✅ Step 1: Update Contact Information (5 minutes)

Open `index.html` and search for these placeholders. Replace them with your actual information:

#### WhatsApp Number
- **Search for**: `971XXXXXXXXX`
- **Replace with**: Your WhatsApp number (format: `971501234567` - no + or spaces)
- **Locations**: Multiple buttons throughout the page

#### Email Address
- **Search for**: `contact@yousef-automation.com`
- **Replace with**: Your actual email
- **Locations**: Footer, contact buttons

#### Phone Number
- **Search for**: `+971 XXX XXX XXX`
- **Replace with**: Your phone number with proper formatting
- **Locations**: Footer contact section

#### LinkedIn Profile
- **Search for**: `linkedin.com/in/yourprofile`
- **Replace with**: Your actual LinkedIn URL
- **Locations**: About section, footer

---

### ✅ Step 2: Customize Your Brand Colors (3 minutes)

Open `styles.css` and edit the top section (lines 11-16):

```css
:root {
    --primary-color: #25D366;   /* Main color - Change this! */
    --secondary-color: #6366F1; /* Accent color - Change this! */
    --accent-color: #F59E0B;    /* Highlight color - Change this! */
}
```

**Popular Color Schemes:**

**Option 1: Professional Blue**
```css
--primary-color: #2563EB; /* Blue */
--secondary-color: #7C3AED; /* Purple */
--accent-color: #F59E0B; /* Orange */
```

**Option 2: Modern Green (Keep WhatsApp theme)**
```css
--primary-color: #25D366; /* WhatsApp Green */
--secondary-color: #059669; /* Emerald */
--accent-color: #FBBF24; /* Yellow */
```

**Option 3: Elegant Dark**
```css
--primary-color: #7C3AED; /* Purple */
--secondary-color: #EC4899; /* Pink */
--accent-color: #F59E0B; /* Amber */
```

Need help choosing colors? Use [Coolors.co](https://coolors.co/generate)

---

### ✅ Step 3: Update Business Name (2 minutes)

If your business name is different from "Yousef Automation":

Open `index.html` and search/replace:
- **Search for**: `Yousef Automation`
- **Replace with**: Your business name

---

### ✅ Step 4: Update Pricing (3 minutes)

In `index.html`, find the Services section and update these amounts:

**Basic Package (around line 360):**
```html
<span class="price-setup">3,000 AED setup</span>
<span class="price-monthly">+ 500 AED/month</span>
```

**Smart Order Package (around line 390):**
```html
<span class="price-setup">5,000 AED setup</span>
<span class="price-monthly">+ 700 AED/month</span>
```

**LS Central Package (around line 420):**
```html
<span class="price-setup">12,000 AED setup</span>
<span class="price-monthly">+ 1,500 AED/month</span>
```

---

### ✅ Step 5: Add Your Logo (5 minutes)

1. **Save your logo** to `assets/images/` folder
   - Recommended format: SVG or PNG
   - Recommended size: 200x60px

2. **Open `index.html`**, find line 44:

```html
<!-- CURRENT (text logo) -->
<span class="logo-text">Yousef Automation</span>

<!-- REPLACE WITH (image logo) -->
<img src="assets/images/your-logo.png" alt="Your Business Name" style="height: 40px;">
```

3. **Update footer logo** too (around line 920)

---

### ✅ Step 6: Update About Section (5 minutes)

In `index.html`, find the About section (around line 700) and update:

**Your Bio:**
```html
<p class="about-bio">
    <!-- Replace with your actual background -->
    Your years of experience and expertise description here.
</p>
```

**Your Credentials:**
```html
<div class="credential-item">
    <i class="fas fa-check-circle"></i>
    <span>Your certification or credential</span>
</div>
```

**Add Your Photo:**
1. Add your headshot to `assets/images/headshot.jpg`
2. Replace the placeholder div with:
```html
<img src="assets/images/headshot.jpg" alt="Your Name"
     style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">
```

---

### ✅ Step 7: Customize Services (Optional - 5 minutes)

Update service features to match what you actually offer:

In `index.html`, find each pricing card and edit:

```html
<ul class="card-features">
    <li><i class="fas fa-check"></i> Feature 1</li>
    <li><i class="fas fa-check"></i> Feature 2</li>
    <li><i class="fas fa-check"></i> Feature 3</li>
</ul>
```

---

### ✅ Step 8: Test Everything (5 minutes)

1. **Open `index.html` in your browser**
   - Right-click the file → Open with → Chrome/Firefox

2. **Test all buttons:**
   - Click WhatsApp buttons (should open WhatsApp with your number)
   - Click email links (should open email client)
   - Click navigation menu items (should scroll smoothly)

3. **Test mobile view:**
   - Press F12 in browser
   - Click device icon (mobile view)
   - Test mobile menu
   - Check that everything looks good

4. **Check for placeholders:**
   - Search page for "XXX" - should find nothing
   - Search for "yourprofile" - should find nothing
   - Search for "example.com" - should find nothing

---

## Optional Customizations

### Add Google Analytics (2 minutes)

1. Get your tracking ID from [analytics.google.com](https://analytics.google.com)
2. In `index.html` (line 25), uncomment and add your ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); <!-- Your ID here -->
</script>
```

### Add Your Demo Video (3 minutes)

1. Upload demo video to YouTube
2. Click "Share" → "Embed"
3. Copy the embed code
4. In `index.html`, find the Demo section (around line 650)
5. Replace the placeholder with YouTube embed code

### Update FAQ Questions

Add questions your customers actually ask:

```html
<div class="faq-item fade-in">
    <button class="faq-question" aria-expanded="false">
        <span>Your customer's question?</span>
        <i class="fas fa-chevron-down"></i>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

---

## Quick Reference: Where to Find Things

| What to Change | File | Approximate Line |
|---------------|------|------------------|
| Contact Info | index.html | Multiple (search for "971X") |
| Colors | styles.css | Lines 11-16 |
| Pricing | index.html | Lines 360-420 |
| Logo | index.html | Line 44 |
| About/Bio | index.html | Lines 700-750 |
| Services | index.html | Lines 340-450 |
| FAQ | index.html | Lines 780-850 |

---

## Need Help?

**Common Issues:**

**Q: I changed the color but nothing happened**
- A: Hard refresh: Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

**Q: WhatsApp button not working**
- A: Check number format: `971501234567` (no +, no spaces, no dashes)
- A: Test on actual phone (works better than desktop)

**Q: My logo is too big/small**
- A: Adjust the `height` value in the img tag: `style="height: 40px;"`

**Q: How do I change fonts?**
- A: In `styles.css`, search for `--font-primary` and change the font family

---

## Deployment Checklist

Before going live:

- [ ] All contact information updated
- [ ] Logo added and looks good
- [ ] Colors match your brand
- [ ] Pricing is correct
- [ ] About section is personalized
- [ ] No "XXX" or placeholder text remains
- [ ] Tested on mobile (F12 → device view)
- [ ] All WhatsApp buttons tested
- [ ] All navigation links work

---

## Final Step: Deploy!

See [README.md](README.md) for detailed deployment instructions:
- GitHub Pages (free, easy)
- Netlify (free, drag-and-drop)
- Vercel (free, fast)

Choose one and your site will be live in minutes!

---

**Need More Help?**

Check the full [README.md](README.md) for:
- Detailed deployment instructions
- SEO optimization
- Advanced customization
- Troubleshooting

---

**Estimated Total Time: 30 minutes** ⏱️

You've got this! 🚀
