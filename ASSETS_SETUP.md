# Assets Setup Guide

## Profile Images Configuration

The website now uses local asset images instead of placeholder URLs. You need to add your actual profile images to make them display correctly.

---

## Required Images

### 1. **Codegai Profile Image** (Main Profile)
- **Filename:** `codegai-profile.jpg`
- **Location:** `assets/codegai-profile.jpg`
- **Used in:**
  - Main profile page (top section)
  - Share Profile modal preview
- **Recommended specs:**
  - Size: 400x400 pixels (square)
  - Format: JPG or PNG
  - File size: < 200KB (optimized)
  - Quality: High resolution for retina displays

### 2. **Sumanth Profile Image** (About Me / Creator)
- **Filename:** `sumanth-profile.jpg`
- **Location:** `assets/sumanth-profile.jpg`
- **Used in:**
  - About Me page header
  - Explore page creator section
- **Recommended specs:**
  - Size: 400x400 pixels (square)
  - Format: JPG or PNG
  - File size: < 200KB (optimized)
  - Quality: High resolution for retina displays

---

## Folder Structure

Create this folder structure in your project:

```
your-project/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── codegai-profile.jpg    ← Add this image
│   └── sumanth-profile.jpg    ← Add this image
└── README.md
```

---

## Step-by-Step Setup

### Step 1: Create Assets Folder
```bash
mkdir assets
```

### Step 2: Add Your Images
1. Prepare your profile images (400x400px recommended)
2. Name them exactly as specified:
   - `codegai-profile.jpg` (for main profile/Codegai brand)
   - `sumanth-profile.jpg` (for About Me/creator section)
3. Copy them to the `assets/` folder

### Step 3: Optimize Images (Optional but Recommended)
Use an image optimizer to reduce file size:
- Online tools: TinyPNG, Squoosh, ImageOptim
- Target: < 200KB per image
- Maintain quality for retina displays

### Step 4: Verify
1. Open `index.html` in browser
2. Check main profile image displays
3. Open "About Me" page
4. Check creator image displays
5. Open "Explore" page
6. Check creator card image displays

---

## Image Usage Map

### Main Profile Page
```html
<img src="assets/codegai-profile.jpg" alt="Codegai Profile">
```
**Purpose:** Brand identity for Codegai platform

### Share Profile Modal
```html
<img src="assets/codegai-profile.jpg" alt="Codegai Profile">
```
**Purpose:** Preview when sharing profile

### About Me Page
```html
<img src="assets/sumanth-profile.jpg" alt="Gangaram Sumanth Reddy">
```
**Purpose:** Personal profile for creator

### Explore Page - Creator Section
```html
<img src="assets/sumanth-profile.jpg" alt="Gangaram Sumanth Reddy">
```
**Purpose:** About the creator information

---

## Image Specifications

### Technical Requirements
- **Format:** JPG (preferred) or PNG
- **Dimensions:** 400x400 pixels (1:1 aspect ratio)
- **Color Space:** RGB
- **Resolution:** 72-144 DPI (for web)
- **File Size:** < 200KB (optimized)

### Visual Guidelines
- **Background:** Clean, professional
- **Lighting:** Well-lit, clear visibility
- **Framing:** Centered, head and shoulders
- **Expression:** Professional, approachable
- **Quality:** Sharp, high resolution

### Optimization Tips
1. **Resize:** Scale to exactly 400x400px
2. **Compress:** Use tools like TinyPNG
3. **Format:** JPG for photos, PNG for graphics
4. **Quality:** 80-90% compression is ideal
5. **Test:** Check on retina displays

---

## Alternative: Using Different Formats

### If you want to use PNG instead of JPG:

**Option 1: Rename your files**
```
codegai-profile.png
sumanth-profile.png
```

**Option 2: Update HTML references**
Change `.jpg` to `.png` in `index.html`:
```html
<!-- Find and replace -->
assets/codegai-profile.jpg  →  assets/codegai-profile.png
assets/sumanth-profile.jpg  →  assets/sumanth-profile.png
```

### If you want to use WebP (modern format):
```html
<picture>
  <source srcset="assets/codegai-profile.webp" type="image/webp">
  <img src="assets/codegai-profile.jpg" alt="Codegai Profile">
</picture>
```

---

## Troubleshooting

### Image Not Displaying
**Problem:** Broken image icon appears

**Solutions:**
1. Check file path is correct: `assets/codegai-profile.jpg`
2. Verify file exists in assets folder
3. Check filename spelling (case-sensitive)
4. Ensure file extension matches (.jpg vs .png)
5. Clear browser cache (Ctrl+Shift+R)

### Image Too Large
**Problem:** Slow page load

**Solutions:**
1. Compress image using TinyPNG
2. Resize to 400x400px
3. Reduce quality to 80-90%
4. Convert to WebP format

### Image Looks Blurry
**Problem:** Low quality on retina displays

**Solutions:**
1. Use higher resolution source (800x800px)
2. Save at higher quality setting
3. Use PNG for better quality
4. Ensure proper compression

### Wrong Image Showing
**Problem:** Same image appears everywhere

**Solutions:**
1. Check you have both images in assets folder
2. Verify filenames are different
3. Clear browser cache
4. Check HTML references are correct

---

## Responsive Image Handling

The CSS already handles responsive display:

```css
.profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

**Features:**
- ✅ Circular crop
- ✅ Maintains aspect ratio
- ✅ Scales responsively
- ✅ Covers container
- ✅ Smooth loading

---

## Performance Optimization

### Lazy Loading (Optional)
Add `loading="lazy"` attribute:
```html
<img src="assets/codegai-profile.jpg" 
     alt="Codegai Profile" 
     loading="lazy">
```

### Preload Critical Images (Optional)
Add to `<head>` section:
```html
<link rel="preload" 
      href="assets/codegai-profile.jpg" 
      as="image">
```

### Responsive Images (Advanced)
Use srcset for different screen sizes:
```html
<img src="assets/codegai-profile.jpg"
     srcset="assets/codegai-profile-400.jpg 400w,
             assets/codegai-profile-800.jpg 800w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Codegai Profile">
```

---

## Image Branding Strategy

### Codegai Profile (Brand)
**Use for:**
- Platform branding
- Main profile identity
- Share previews
- Social media links

**Style:** Professional, brand-focused

### Sumanth Profile (Personal)
**Use for:**
- Creator information
- About sections
- Personal bio
- Professional background

**Style:** Professional, approachable

---

## Quick Checklist

- [ ] Create `assets/` folder
- [ ] Add `codegai-profile.jpg` (400x400px)
- [ ] Add `sumanth-profile.jpg` (400x400px)
- [ ] Optimize images (< 200KB each)
- [ ] Test main profile page
- [ ] Test About Me page
- [ ] Test Explore page
- [ ] Test Share Profile modal
- [ ] Verify on mobile devices
- [ ] Check on retina displays

---

## Example Images

### Codegai Profile
- **Purpose:** Brand identity
- **Style:** Logo or brand mascot
- **Background:** Brand colors or clean
- **Format:** Can be graphic or photo

### Sumanth Profile
- **Purpose:** Personal identity
- **Style:** Professional headshot
- **Background:** Neutral or professional
- **Format:** Professional photo

---

## Summary

**Current Setup:**
- ✅ HTML updated to use local assets
- ✅ Image paths configured
- ✅ Responsive CSS in place
- ✅ Alt text added for accessibility

**Your Action Required:**
1. Create `assets/` folder
2. Add `codegai-profile.jpg` (400x400px)
3. Add `sumanth-profile.jpg` (400x400px)
4. Optimize images
5. Test in browser

Once you add the images, they will automatically display throughout the website!
