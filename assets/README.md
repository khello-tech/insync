# Assets Folder

This folder contains all images, icons, and media files for your website.

## Folder Structure

```
assets/
├── images/          # Photos, logos, illustrations, screenshots
└── icons/           # Custom icon files (optional)
```

## What to Add Here

### images/

**Required Files:**

1. **Your Logo**
   - Format: SVG (preferred) or PNG
   - Recommended size: 200x60px or similar
   - File name: `logo.svg` or `logo.png`
   - Current placeholder: `logo-placeholder.svg`

2. **Favicon**
   - Format: ICO, PNG, or SVG
   - Size: 32x32px or 16x16px
   - File name: `favicon.ico` or `favicon.svg`
   - Current placeholder: `favicon.svg`

3. **Your Photo/Headshot**
   - Format: JPG or PNG
   - Recommended size: 600x600px (square)
   - File name: `headshot.jpg` or `profile-photo.jpg`
   - Used in: About section

**Optional Files:**

4. **Hero Background Image**
   - Format: JPG or PNG
   - Recommended size: 1920x1080px
   - File name: `hero-bg.jpg`
   - Currently using: CSS gradient (no image needed)

5. **Demo Screenshots**
   - Format: PNG or JPG
   - Recommended size: 1200x800px
   - File name: `demo-screenshot-1.png`, etc.

6. **Client Logos** (if adding testimonials)
   - Format: PNG or SVG
   - Size: 150x150px or similar
   - File names: `client-1.png`, `client-2.png`, etc.

### icons/

Only add files here if you're using custom icon files instead of Font Awesome.

## Image Optimization Tips

Before adding images:

1. **Compress images**: Use [TinyPNG.com](https://tinypng.com) or [Squoosh.app](https://squoosh.app)
2. **Resize appropriately**: Don't upload 4000x3000px images if you only display them at 600x400px
3. **Use correct formats**:
   - **Photos**: JPG (smaller file size)
   - **Graphics/Logos**: PNG or SVG (better quality, transparency support)
   - **Icons**: SVG (scalable, small file size)

## File Naming Conventions

Use lowercase, hyphen-separated names:

- ✅ Good: `my-company-logo.png`, `profile-photo.jpg`, `hero-background.jpg`
- ❌ Bad: `My Company Logo.PNG`, `ProfilePhoto.jpg`, `Hero Background.JPG`

## Current Placeholder Files

- `logo-placeholder.svg` - Sample logo (replace with yours)
- `favicon.svg` - Sample favicon (replace with yours)

## How to Replace Placeholder Images

### 1. Replace Logo

1. Add your logo to this folder: `assets/images/your-logo.png`
2. Open `index.html`
3. Find line 44 (logo section)
4. Replace:
   ```html
   <span class="logo-text">Yousef Automation</span>
   ```
   With:
   ```html
   <img src="assets/images/your-logo.png" alt="Yousef Automation" style="height: 40px;">
   ```

### 2. Add Your Photo

1. Add your photo to this folder: `assets/images/headshot.jpg`
2. Open `index.html`
3. Find the About section (around line 700)
4. Replace the placeholder div with:
   ```html
   <img src="assets/images/headshot.jpg" alt="Yousef" class="about-photo">
   ```
5. Add CSS in `styles.css`:
   ```css
   .about-photo {
       width: 300px;
       height: 300px;
       border-radius: 50%;
       object-fit: cover;
       box-shadow: var(--shadow-xl);
   }
   ```

### 3. Update Favicon

1. Replace `favicon.svg` with your favicon
2. Or add `favicon.ico` to this folder
3. Update line 16 in `index.html` if needed

## Need Help?

See the main [README.md](../README.md) file in the root folder for more detailed instructions.
