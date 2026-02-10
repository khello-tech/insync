# Yousef Automation Website

A professional single-page website for WhatsApp automation and Microsoft Dynamics LS Central integration services.

## Quick Start

### 1. Customize Your Content

Before deploying, replace these placeholder values in `index.html`:

#### Contact Information
Search for and replace the following in `index.html`:

- **WhatsApp Number**: `971XXXXXXXXX` → Your actual WhatsApp number (without +)
- **Email**: `contact@yousef-automation.com` → Your actual email
- **Phone**: `+971 XXX XXX XXX` → Your actual phone number
- **LinkedIn**: `linkedin.com/in/yourprofile` → Your LinkedIn profile URL

#### Logo
- Replace the text logo in the header with your actual logo
- Update the logo placeholder in the footer
- Add your logo file to `assets/images/` folder

#### Photos
- Add your professional headshot to `assets/images/headshot.jpg`
- Update the image reference in the About section

#### Demo Video
- Upload your demo video to YouTube
- Replace the video placeholder in the Demo section with the YouTube embed code

### 2. Customize Colors & Branding

Edit the CSS variables at the top of `styles.css` (lines 11-26):

```css
:root {
    --primary-color: #25D366; /* Change to your brand color */
    --secondary-color: #6366F1; /* Change to your accent color */
    /* ... other colors */
}
```

### 3. Test Locally

Open `index.html` in your web browser to preview the site locally.

- **Right-click** on `index.html` → **Open with** → Your browser
- Or drag and drop the file into your browser window

### 4. Deploy Online

Choose one of these free hosting options:

---

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free & Easy)

#### Steps:

1. **Create a GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for a free account

2. **Create a New Repository**
   - Click the "+" icon in the top right → "New repository"
   - Name it: `yousef-automation-website` (or any name)
   - Set it to **Public**
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all your files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
     - `assets/` folder
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to **Settings** → **Pages** (in left sidebar)
   - Under "Source", select **main** branch
   - Click **Save**
   - Wait 1-2 minutes

5. **Access Your Website**
   - Your site will be live at: `https://yourusername.github.io/yousef-automation-website/`
   - Copy this URL and share it!

#### Custom Domain (Optional)

To use your own domain (e.g., `yousefautomation.com`):

1. **In GitHub Pages Settings**:
   - Enter your domain in "Custom domain" field
   - Click Save

2. **In Your Domain Registrar** (GoDaddy, Namecheap, etc.):
   - Add a **CNAME record**:
     - Host: `www`
     - Points to: `yourusername.github.io`
   - Add **A records** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. Wait 24-48 hours for DNS to propagate

---

### Option 2: Netlify (Free - Drag & Drop)

#### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up for free

2. **Deploy Your Site**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire project folder
   - Wait 30 seconds - your site is live!

3. **Custom Domain** (Optional)
   - Go to **Domain settings**
   - Click "Add custom domain"
   - Follow the DNS configuration instructions

**Netlify Benefits**:
- Automatic HTTPS
- Contact form handling (built-in)
- Instant deploys
- Free SSL certificate

---

### Option 3: Vercel (Free - For Developers)

#### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Click "Deploy"

3. Your site is live in seconds!

---

### Option 4: Traditional Web Hosting (Paid)

If you already have web hosting (GoDaddy, Bluehost, HostGator, etc.):

1. **Access your cPanel or FTP**
2. **Upload all files** to `public_html` or `www` folder
3. Your site is live at your domain

---

## File Structure

```
yousef-automation-website/
│
├── index.html          # Main HTML file (all content)
├── styles.css          # All styling (colors, layout, responsive design)
├── script.js           # Interactive features (FAQ, animations, mobile menu)
├── README.md           # This file (instructions)
│
└── assets/             # Images and media files
    ├── images/         # Your photos, logo, illustrations
    └── icons/          # Icon files (if you add custom icons)
```

---

## Customization Guide

### Update Pricing

In `index.html`, find the Services section (around line 350):

```html
<div class="card-price">
    <span class="price-setup">3,000 AED setup</span>
    <span class="price-monthly">+ 500 AED/month</span>
</div>
```

Change the numbers to your actual pricing.

### Add/Remove Sections

Each section is clearly marked in `index.html` with comments:

```html
<!-- ============================================
     SECTION NAME
     ============================================ -->
```

To remove a section:
1. Find the section in `index.html`
2. Delete everything between the opening `<section>` and closing `</section>` tags
3. Remove the corresponding link from the navigation menu

### Change Colors

All colors are controlled by CSS variables in `styles.css` (top of file):

```css
:root {
    --primary-color: #25D366;    /* Main brand color */
    --secondary-color: #6366F1;  /* Accent color */
    --accent-color: #F59E0B;     /* Highlight color */
}
```

Change these hex codes to your preferred colors.

**Color Picker Tools**:
- [Coolors.co](https://coolors.co) - Color palette generator
- [Adobe Color](https://color.adobe.com) - Color wheel

### Add Google Analytics

In `index.html` (around line 25), uncomment and add your tracking ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); <!-- Replace with your ID -->
</script>
```

Get your tracking ID:
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a property
3. Copy your Measurement ID (starts with G-)

### Add Your Logo

1. **Save your logo** as `logo.svg` or `logo.png` in `assets/images/`

2. **Replace the text logo** in `index.html` (around line 44):

```html
<!-- OLD -->
<span class="logo-text">Yousef Automation</span>

<!-- NEW -->
<img src="assets/images/logo.png" alt="Yousef Automation" class="logo-img">
```

3. **Add CSS** for logo sizing in `styles.css`:

```css
.logo-img {
    height: 40px;
    width: auto;
}
```

### Update FAQ Questions

In `index.html`, find the FAQ section (around line 800).

To add a new question:

```html
<div class="faq-item fade-in">
    <button class="faq-question" aria-expanded="false">
        <span>Your question here?</span>
        <i class="fas fa-chevron-down"></i>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

---

## Testing Checklist

Before going live, test these:

- [ ] All WhatsApp buttons open with correct number
- [ ] Email links work (clicking opens email client)
- [ ] All navigation links scroll to correct sections
- [ ] Mobile menu opens and closes properly
- [ ] FAQ accordion expands/collapses
- [ ] Site looks good on mobile phone (test in browser DevTools)
- [ ] All contact information is updated
- [ ] Pricing is correct
- [ ] No placeholder text remains (search for "XXX" and "yourprofile")

### Mobile Testing

Test on actual devices or use browser DevTools:

- **Chrome**: Press F12 → Click device icon → Choose device
- **Firefox**: Press F12 → Click device icon → Choose device

Test these screen sizes:
- iPhone (375px width)
- iPad (768px width)
- Desktop (1200px+ width)

---

## Performance Optimization

### Optimize Images

Before uploading images:

1. **Compress images**: Use [TinyPNG.com](https://tinypng.com)
2. **Resize images**: Headshot should be max 600x600px, hero images max 1200px wide
3. **Use correct formats**:
   - Photos: JPG
   - Logos/icons: PNG or SVG
   - Screenshots: PNG

### Enable Caching

If using traditional hosting, add this to `.htaccess` file:

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access 1 year"
    ExpiresByType image/jpeg "access 1 year"
    ExpiresByType image/png "access 1 year"
    ExpiresByType text/css "access 1 month"
    ExpiresByType application/javascript "access 1 month"
</IfModule>
```

---

## SEO Optimization

### Update Meta Tags

In `index.html` (lines 5-13), customize:

```html
<meta name="description" content="Your custom description here (155 characters max)">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:url" content="https://yourwebsite.com">
```

### Add Favicon

1. Create a favicon (32x32px icon):
   - Use [Favicon.io](https://favicon.io) to generate
2. Save as `favicon.ico` in root folder
3. Update line 16 in `index.html`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Submit to Google

After deployment:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your website URL)
3. Verify ownership
4. Submit your sitemap (optional, for larger sites)

---

## Adding a Contact Form

The site currently uses WhatsApp and email for contact. To add a form:

### Option 1: Netlify Forms (Free, Easy)

If deployed on Netlify:

1. Add this form in `index.html` (in Final CTA or new section):

```html
<form name="contact" method="POST" data-netlify="true">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <input type="tel" name="phone" placeholder="Your Phone">
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

2. Forms are automatically processed by Netlify
3. You'll receive submissions in your Netlify dashboard

### Option 2: Formspree (Free Tier Available)

1. Sign up at [Formspree.io](https://formspree.io)
2. Get your form endpoint
3. Add form with action pointing to Formspree

### Option 3: EmailJS (JavaScript-based)

For client-side email sending without backend.

---

## Troubleshooting

### Site Not Loading After Deploy

- **GitHub Pages**: Wait 2-5 minutes after enabling Pages
- **Check URL**: Make sure you're using the correct URL
- **Clear cache**: Press Ctrl+F5 (or Cmd+Shift+R on Mac)

### WhatsApp Buttons Not Working

- Make sure the number format is correct: `971XXXXXXXXX` (no + or spaces)
- Test on actual mobile device (works better than desktop)

### Mobile Menu Not Working

- Check that `script.js` is loading (look for errors in browser console: F12)
- Verify the file path is correct

### Images Not Showing

- Check file paths are correct (case-sensitive on Linux servers)
- Verify images are in the `assets/images/` folder
- Use forward slashes `/` not backslashes `\`

### CSS Not Applying

- Hard refresh the page: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Check that `styles.css` is in the same folder as `index.html`
- View page source and click on CSS link to verify it loads

---

## Browser Support

This website works on:

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Internet Explorer: Not supported (deprecated browser)

---

## Accessibility

This site follows WCAG 2.1 Level AA guidelines:

- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Sufficient color contrast
- ✅ Semantic HTML structure
- ✅ ARIA labels for interactive elements

---

## Updates & Maintenance

### How to Update Content

1. **Edit `index.html`** with any text editor (Notepad, VS Code, Sublime Text)
2. **Save the file**
3. **Re-upload** to your hosting:
   - GitHub: Commit and push changes
   - Netlify/Vercel: Drag and drop or push to connected repo
   - Traditional hosting: Upload via FTP/cPanel

### Regular Updates

- Update pricing if it changes
- Add new FAQ questions based on customer inquiries
- Update the "About" section with new credentials
- Add testimonials (create a new section if needed)

---

## Need Help?

### Resources

- **HTML/CSS Help**: [W3Schools](https://www.w3schools.com)
- **Web Hosting Guides**: [YouTube tutorials](https://www.youtube.com)
- **GitHub Pages Guide**: [GitHub Pages Docs](https://docs.github.com/en/pages)

### Validation Tools

- **HTML Validator**: [validator.w3.org](https://validator.w3.org)
- **Mobile-Friendly Test**: [Google Mobile Test](https://search.google.com/test/mobile-friendly)
- **Page Speed**: [PageSpeed Insights](https://pagespeed.web.dev)

---

## Credits

**Design & Development**: Custom single-page website for Yousef Automation Services

**Technologies Used**:
- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0 (icons)

**Fonts**: System font stack for optimal performance

---

## License

This website is proprietary and created for Yousef Automation Services.

---

## Version History

- **v1.0** (2024) - Initial release
  - Single-page design
  - Mobile-first responsive layout
  - 11 content sections
  - WhatsApp integration
  - FAQ accordion
  - Scroll animations

---

## Support

For technical questions or assistance with this website:

- 📧 Email: contact@yousef-automation.com
- 💬 WhatsApp: +971 XXX XXX XXX
- 🔗 LinkedIn: [Your LinkedIn Profile]

---

**Made with ❤️ in Dubai**
