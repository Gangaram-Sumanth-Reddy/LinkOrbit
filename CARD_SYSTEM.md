# Scalable Link Card System Documentation

## Overview

This link-in-bio page uses a scalable, reusable card component system that supports unlimited cards without breaking the layout or affecting performance.

## Card Structure

Each card consists of three main components:

```html
<div class="link-card-wrapper">
    <a href="URL" class="link-card" data-link-url="URL" data-link-title="TITLE" data-link-description="DESC">
        <div class="link-thumbnail">
            <img src="IMAGE_URL" alt="ALT_TEXT">
        </div>
        <span class="link-title">CARD TITLE</span>
    </a>
    <button class="menu-btn" aria-label="Share link">
        <!-- Three-dot icon SVG -->
    </button>
</div>
```

## Component Breakdown

### 1. Link Card Wrapper (`.link-card-wrapper`)
- Container for the card and menu button
- Uses flexbox for horizontal layout
- Gap: 10px between card and button

### 2. Link Card (`.link-card`)
- Main clickable card element
- Padding: 16px
- Border-radius: 17px
- Gap: 12px between thumbnail and title
- Supports hover and active states

### 3. Link Thumbnail (`.link-thumbnail`)
- Size: 48px × 48px
- Border-radius: 11px
- Supports three types:
  - **Image**: Regular thumbnail with `<img>` tag
  - **PDF**: Red gradient background with document icon
  - **Document**: Blue gradient background with document icon

### 4. Link Title (`.link-title`)
- Font-size: 15px
- Font-weight: 600
- Supports multi-line text (max 2 lines)
- Automatic ellipsis for overflow
- Word-break for long words

### 5. Menu Button (`.menu-btn`)
- Size: 40px × 40px
- Circular shape
- Three-dot vertical icon
- Opens share modal on click

## Adding Cards Manually (HTML)

### Basic Card with Image
```html
<div class="link-card-wrapper">
    <a href="https://example.com/link" class="link-card" 
       data-link-url="https://example.com/link" 
       data-link-title="Card Title" 
       data-link-description="Card description">
        <div class="link-thumbnail">
            <img src="https://example.com/image.jpg" alt="Card">
        </div>
        <span class="link-title">Card Title</span>
    </a>
    <button class="menu-btn" aria-label="Share link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2"></circle>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="12" cy="19" r="2"></circle>
        </svg>
    </button>
</div>
```

### PDF Card
```html
<div class="link-card-wrapper">
    <a href="https://example.com/document.pdf" class="link-card" 
       data-link-url="https://example.com/document.pdf" 
       data-link-title="PDF Document" 
       data-link-description="Download PDF file">
        <div class="link-thumbnail pdf-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                <path d="M14 2v6h6"></path>
            </svg>
        </div>
        <span class="link-title">PDF Document</span>
    </a>
    <button class="menu-btn" aria-label="Share link">
        <!-- Menu icon SVG -->
    </button>
</div>
```

### Document Card
```html
<div class="link-card-wrapper">
    <a href="https://example.com/guide.doc" class="link-card" 
       data-link-url="https://example.com/guide.doc" 
       data-link-title="Document Guide" 
       data-link-description="Download guide document">
        <div class="link-thumbnail doc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                <path d="M14 2v6h6"></path>
                <path d="M9 13h6M9 17h6"></path>
            </svg>
        </div>
        <span class="link-title">Document Guide</span>
    </a>
    <button class="menu-btn" aria-label="Share link">
        <!-- Menu icon SVG -->
    </button>
</div>
```

## Adding Cards Dynamically (JavaScript)

### Single Card
```javascript
addLinkCard({
    url: 'https://example.com/new-link',
    title: 'New Dynamic Card',
    description: 'This card was added dynamically!',
    thumbnail: 'https://example.com/image.jpg',
    type: 'image' // 'image', 'pdf', or 'doc'
});
```

### Multiple Cards at Once
```javascript
addMultipleCards([
    {
        url: 'https://example.com/card1',
        title: 'Card 1',
        description: 'First card',
        thumbnail: 'https://example.com/img1.jpg'
    },
    {
        url: 'https://example.com/card2',
        title: 'Card 2',
        description: 'Second card',
        type: 'pdf'
    },
    {
        url: 'https://example.com/card3',
        title: 'Card 3',
        description: 'Third card',
        type: 'doc'
    }
]);
```

### Add Card at Start
```javascript
addLinkCard({
    url: 'https://example.com/priority',
    title: 'Priority Card',
    description: 'This appears first',
    thumbnail: 'https://example.com/priority.jpg'
}, 'start');
```

### Utility Functions
```javascript
// Get total card count
const count = getCardCount();
console.log('Total cards:', count);

// Clear all cards
clearAllCards();
```

## Card Types

### 1. Image Card
- Default type
- Displays custom thumbnail image
- Best for: Links, websites, social media

### 2. PDF Card
- Red gradient background
- Document icon
- Best for: PDF downloads, resumes, guides

### 3. Document Card
- Blue gradient background
- Document with lines icon
- Best for: Word docs, text files, guides

## Title Handling

The card system automatically handles long titles:

- **Short titles**: Display normally
- **Medium titles**: Wrap to 2 lines
- **Long titles**: Truncate with ellipsis (...)

Example long title:
```
"Infosys test & Interview preparation - Notes Cloud AI Free Certifications 700+ VACANCIES"
```

Displays as:
```
Infosys test & Interview preparation - 
Notes Cloud AI Free Certifications...
```

## Performance Optimization

The system is optimized for large card lists:

1. **CSS Performance**
   - Uses `will-change: scroll-position` for smooth scrolling
   - Hardware-accelerated transforms
   - Efficient flexbox layout

2. **JavaScript Performance**
   - Document fragments for batch operations
   - Event delegation for menu buttons
   - Minimal DOM manipulation

3. **Mobile Optimization**
   - Touch-friendly tap targets (40px minimum)
   - Smooth scroll with `-webkit-overflow-scrolling: touch`
   - Optimized animations for mobile devices

## Responsive Behavior

### Mobile (< 480px)
- Padding: 14px
- Thumbnail: 44px × 44px
- Title font-size: 14px
- Menu button: 38px × 38px

### Tablet/Desktop (≥ 481px)
- Padding: 16px
- Thumbnail: 48px × 48px
- Title font-size: 15px
- Menu button: 40px × 40px

### Large Screens (≥ 768px)
- Scrollable card list with custom scrollbar
- Max-height: calc(100vh - 400px)
- Styled scrollbar for better UX

## Styling Customization

### Change Card Colors
```css
.link-card {
    background: #ffffff; /* Card background */
    border: 1px solid #e5e7eb; /* Border color */
}

.link-card:hover {
    border-color: #d1d5db; /* Hover border */
}
```

### Change Thumbnail Size
```css
.link-thumbnail {
    width: 56px;  /* Increase from 48px */
    height: 56px;
}
```

### Change Card Spacing
```css
.link-card-list {
    gap: 16px; /* Increase from 12px */
}
```

### Change Border Radius
```css
.link-card {
    border-radius: 20px; /* Increase from 17px */
}

.link-thumbnail {
    border-radius: 14px; /* Increase from 11px */
}
```

## Best Practices

1. **Keep titles concise**: Aim for 40-60 characters
2. **Use high-quality thumbnails**: 100×100px minimum
3. **Optimize images**: Use WebP format when possible
4. **Limit initial cards**: Load 10-15 cards initially, lazy-load more
5. **Test with real data**: Use actual long titles to test truncation
6. **Maintain consistency**: Use similar thumbnail styles across cards

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with touch optimizations

## Accessibility

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Focus visible states
- Screen reader friendly

## Examples

The page includes 10 example cards demonstrating:
- Regular image cards
- Long title handling
- PDF document cards
- Document cards
- Various content types

You can add unlimited cards following the same pattern!
