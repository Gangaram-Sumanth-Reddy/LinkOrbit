# Header Background - Quick Start

## 🚀 Quick Setup (30 seconds)

### Option 1: Direct HTML (Easiest)
Open `index.html` and uncomment this line:
```html
<div class="header-decoration" id="headerDecoration">
    <!-- Uncomment the line below and add your image -->
    <img src="your-image.jpg" alt="Header background" class="header-decoration-image">
    
    <div class="confetti confetti-1"></div>
    <!-- ... -->
</div>
```

### Option 2: JavaScript (Dynamic)
Open browser console (F12) and run:
```javascript
setHeaderBackground('your-image.jpg');
```

### Option 3: File Upload (Interactive)
```javascript
// Add this to your HTML
<input type="file" id="headerUpload" accept="image/*">

// Add this to your script
document.getElementById('headerUpload').addEventListener('change', (e) => {
    uploadHeaderBackground(e.target.files[0]);
});
```

## 📸 Recommended Image Specs

```
Size: 1200 x 400 pixels
Format: JPG (optimized)
Quality: 80-85%
File Size: < 300KB
```

## 🎨 Quick Examples

### Example 1: Local Image
```javascript
setHeaderBackground('asserts/header-bg.jpg');
```

### Example 2: External URL
```javascript
setHeaderBackground('https://images.unsplash.com/photo-1557683316-973673baf926?w=800');
```

### Example 3: Remove Background
```javascript
removeHeaderBackground();
```

## 🔧 Common Commands

| Command | Description |
|---------|-------------|
| `setHeaderBackground('url')` | Set custom background |
| `removeHeaderBackground()` | Remove background |
| `uploadHeaderBackground(file)` | Upload from file |

## 💡 Pro Tips

1. **Optimize images** before uploading (< 300KB)
2. **Use 16:9 aspect ratio** for best results
3. **Test on mobile** to ensure it looks good
4. **Add overlay** if text is hard to read

## 🎯 CSS Customization

### Darken Background
```css
.header-decoration::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
}
```

### Blur Effect
```css
.header-decoration-image {
    filter: blur(2px);
}
```

### Brightness Adjustment
```css
.header-decoration-image {
    filter: brightness(1.2);
}
```

## 📱 Mobile Optimization

The header automatically adjusts for mobile:
- Height: 180px (all devices)
- Image: Scales proportionally
- Position: Center crop
- Performance: Optimized loading

## ✅ Testing Checklist

- [ ] Image loads correctly
- [ ] Image fills entire header area
- [ ] Image is centered properly
- [ ] Profile image is visible
- [ ] Works on mobile
- [ ] No horizontal scrolling

## 🐛 Troubleshooting

### Image doesn't show?
1. Check file path is correct
2. Verify image exists
3. Check browser console for errors

### Image is stretched?
```css
.header-decoration-image {
    object-fit: cover; /* Use cover, not fill */
}
```

### Profile image hidden?
```css
.profile-image {
    z-index: 10; /* Increase z-index */
}
```

## 📚 Full Documentation

For complete documentation, see:
- `HEADER_BACKGROUND_GUIDE.md` - Full guide
- `HEADER_BACKGROUND_EXAMPLES.html` - Interactive examples

## 🎉 That's It!

Your header now supports custom background images with automatic fit and fill!

**Quick Test:**
```javascript
// Open browser console (F12) and run:
setHeaderBackground('https://images.unsplash.com/photo-1557683316-973673baf926?w=800');
```
