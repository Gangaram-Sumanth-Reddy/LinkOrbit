# Header Background Image Guide

## Overview
The header decoration area now supports custom background images that automatically fit and fill the space with proper object-fit properties.

## Features

✅ **Automatic Fit & Fill** - Images automatically cover the entire header area  
✅ **Center Positioning** - Images are centered for best visual appearance  
✅ **Responsive** - Works on all screen sizes  
✅ **Easy to Use** - Simple JavaScript functions to set/remove images  
✅ **Fallback** - Gradient background if no image is set  
✅ **Error Handling** - Gracefully handles failed image loads  

## How to Use

### Method 1: Direct URL (Easiest)

**In Browser Console:**
```javascript
setHeaderBackground('your-image.jpg');
```

**Or in HTML:**
```html
<div class="header-decoration" id="headerDecoration">
    <img src="your-image.jpg" alt="Header background" class="header-decoration-image">
    <!-- confetti elements -->
</div>
```

### Method 2: Using JavaScript Function

**Set Background:**
```javascript
// Local image
setHeaderBackground('asserts/header-bg.jpg');

// External URL
setHeaderBackground('https://images.unsplash.com/photo-1557683316-973673baf926?w=800');
```

**Remove Background:**
```javascript
removeHeaderBackground();
```

### Method 3: File Upload (Advanced)

**HTML:**
```html
<input type="file" id="headerImageInput" accept="image/*">
```

**JavaScript:**
```javascript
document.getElementById('headerImageInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        uploadHeaderBackground(file);
    }
});
```

## Image Specifications

### Recommended Dimensions
- **Width**: 800px - 1920px
- **Height**: 400px - 1080px
- **Aspect Ratio**: 16:9 or wider
- **Format**: JPG, PNG, WebP
- **File Size**: < 500KB for best performance

### Optimal Settings
```
Resolution: 1200 x 400px
Format: JPG (optimized)
Quality: 80-85%
File Size: 100-300KB
```

## CSS Properties

### Object-Fit Behavior
```css
.header-decoration-image {
    object-fit: cover;      /* Fills entire area */
    object-position: center; /* Centers the image */
}
```

### Available Options

**Cover (Default):**
- Fills entire area
- Maintains aspect ratio
- May crop edges

**Contain:**
```css
object-fit: contain; /* Shows entire image, may have gaps */
```

**Fill:**
```css
object-fit: fill; /* Stretches to fill, may distort */
```

## Examples

### Example 1: Gradient Background (Default)
```html
<div class="header-decoration">
    <!-- No image, shows gradient -->
</div>
```

### Example 2: Photo Background
```html
<div class="header-decoration has-image">
    <img src="beach.jpg" class="header-decoration-image">
</div>
```

### Example 3: Pattern Background
```html
<div class="header-decoration has-image">
    <img src="pattern.png" class="header-decoration-image">
</div>
```

## JavaScript API

### setHeaderBackground(imageUrl)
Sets a custom header background image.

**Parameters:**
- `imageUrl` (string) - URL or path to the image

**Returns:** void

**Example:**
```javascript
setHeaderBackground('header-bg.jpg');
```

### removeHeaderBackground()
Removes the custom header background and restores gradient.

**Parameters:** None

**Returns:** void

**Example:**
```javascript
removeHeaderBackground();
```

### uploadHeaderBackground(file)
Uploads and sets header background from a file input.

**Parameters:**
- `file` (File) - Image file from input element

**Returns:** void

**Example:**
```javascript
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', (e) => {
    uploadHeaderBackground(e.target.files[0]);
});
```

## Styling Options

### Add Overlay for Better Text Visibility
```css
.header-decoration::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3));
}
```

### Darken Background
```css
.header-decoration::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
}
```

### Blur Effect
```css
.header-decoration-image {
    filter: blur(2px);
}
```

## Responsive Behavior

### Mobile (< 480px)
- Height: 180px
- Image scales proportionally
- Center crop maintained

### Tablet (480px - 768px)
- Height: 180px
- Full width coverage
- Optimized positioning

### Desktop (> 768px)
- Height: 180px
- Full width coverage
- Best quality display

## Performance Tips

### 1. Optimize Images
```bash
# Using ImageMagick
convert input.jpg -resize 1200x400^ -gravity center -extent 1200x400 -quality 85 output.jpg
```

### 2. Use WebP Format
```html
<picture>
    <source srcset="header.webp" type="image/webp">
    <img src="header.jpg" class="header-decoration-image">
</picture>
```

### 3. Lazy Loading
```html
<img src="header.jpg" loading="lazy" class="header-decoration-image">
```

### 4. Preload Critical Images
```html
<link rel="preload" as="image" href="header.jpg">
```

## Common Use Cases

### 1. Personal Brand
```javascript
setHeaderBackground('brand-banner.jpg');
```

### 2. Seasonal Themes
```javascript
// Summer
setHeaderBackground('summer-beach.jpg');

// Winter
setHeaderBackground('winter-snow.jpg');
```

### 3. Event Promotion
```javascript
setHeaderBackground('event-banner.jpg');
```

### 4. Product Showcase
```javascript
setHeaderBackground('product-hero.jpg');
```

## Troubleshooting

### Issue: Image doesn't show
**Solution:**
1. Check image path is correct
2. Verify image file exists
3. Check browser console for errors
4. Ensure `.has-image` class is added

### Issue: Image is stretched/distorted
**Solution:**
```css
.header-decoration-image {
    object-fit: cover; /* Use cover instead of fill */
}
```

### Issue: Image is too dark/light
**Solution:**
```css
.header-decoration-image {
    filter: brightness(1.1); /* Adjust brightness */
}
```

### Issue: Profile image not visible
**Solution:**
```css
.profile-image {
    position: relative;
    z-index: 10; /* Ensure it's above header */
}
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

## Accessibility

### Alt Text
Always provide descriptive alt text:
```html
<img src="header.jpg" alt="Sunset over mountains" class="header-decoration-image">
```

### Contrast
Ensure text remains readable:
```css
.header-decoration::after {
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));
}
```

## Quick Start

### Step 1: Add Your Image
Place your image in the `asserts` folder:
```
asserts/
  ├── header-bg.jpg
  ├── Codegai.png
  └── Sumanth.jpeg
```

### Step 2: Set Background
Open browser console and run:
```javascript
setHeaderBackground('asserts/header-bg.jpg');
```

### Step 3: Verify
Refresh the page and check if the image appears.

## Advanced Customization

### Multiple Images (Slideshow)
```javascript
const images = [
    'header1.jpg',
    'header2.jpg',
    'header3.jpg'
];

let currentIndex = 0;

setInterval(() => {
    setHeaderBackground(images[currentIndex]);
    currentIndex = (currentIndex + 1) % images.length;
}, 5000); // Change every 5 seconds
```

### Random Image
```javascript
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
const randomImage = images[Math.floor(Math.random() * images.length)];
setHeaderBackground(randomImage);
```

### Time-based Background
```javascript
const hour = new Date().getHours();

if (hour < 12) {
    setHeaderBackground('morning.jpg');
} else if (hour < 18) {
    setHeaderBackground('afternoon.jpg');
} else {
    setHeaderBackground('evening.jpg');
}
```

## Summary

Your header decoration area now supports custom background images with:

- ✅ Automatic fit and fill
- ✅ Center positioning
- ✅ Responsive design
- ✅ Easy JavaScript API
- ✅ Error handling
- ✅ Performance optimized

Simply use `setHeaderBackground('your-image.jpg')` to set any image as your header background!
