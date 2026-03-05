# Premium Link-in-Bio Website

A modern, mobile-first link-in-bio website with premium UI, clean design, and professional interfaces - better than Linktree.

## Features

- **Mobile-First Design**: Optimized for Instagram bio traffic with 420px max width
- **Natural Page Scrolling**: Entire page scrolls smoothly like a modern mobile app
- **Fixed Theme Toggle**: Dark/Light mode toggle button (top-left) with localStorage persistence
- **Fixed Share Button**: Always-visible share button (top-right) with glassmorphism effect
- **Premium UI**: Glassmorphism effects, smooth gradients, and modern aesthetics
- **Scalable Card System**: Support for unlimited link cards without performance issues
- **Share Functionality**: Native share API with clipboard fallback
- **Professional Interfaces**: Book Call and About Me pages with smooth animations
- **Smooth Animations**: Fade-in, hover effects, and floating decorations
- **Social Icons**: Instagram, Facebook, X (Twitter), Discord
- **Fully Responsive**: Works perfectly on all devices
- **Accessibility**: Reduced motion support and semantic HTML
- **Performance**: Minimal JavaScript, optimized CSS

## New Professional Features

### Share Profile Modal
- Updated to promote your own website instead of Linktree
- "Work with Me" section with two call-to-action buttons
- Share options: Copy Link, X, Facebook, WhatsApp, LinkedIn, Messenger, Snapchat

### Book a Call Interface
- Animated full-page interface with gradient background
- Floating decorative circles for visual appeal
- Two booking options:
  - Schedule via Cal.com
  - Send email directly
- Smooth transitions and card hover animations
- Mobile-optimized layout with full-width cards
- Browser back button support

### About Me Interface
- Professional profile presentation with large circular image
- About section with bio paragraph
- **Connect Section**: Social links to Instagram, LinkedIn, GitHub, and Discord with hover animations
- **Technologies & Tools Section**: Organized by categories
  - Frontend Technologies (HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Next.js)
  - Backend Technologies (Node.js, Python)
  - Databases (MongoDB, MySQL, Firebase)
  - Developer Tools (VS Code, Git, GitHub, Docker, Linux)
- Clean, minimal design with tech icons and hover effects
- Smooth scroll and section fade-in animations
- Browser back button support

### Browser History Navigation
- Uses HTML5 History API (pushState/popstate)
- Mobile back gesture support
- Android back button support
- Browser back button returns to previous page instead of exiting
- Smooth transitions between pages

### Custom Footer
- Clean, minimal design
- "Built with ❤️ by [Your Name]" text
- Navigation links: Privacy, Contact, Explore
- Subtle top border and proper spacing

### Additional Link Cards
- 15 additional pre-made cards (commented out)
- Ready to uncomment and use
- Includes: GitHub, Frontend Projects, UI Resources, JavaScript Learning, AI Tools, Developer Toolkit, Startup Ideas, Tech Blog, Free Resources, Design Inspiration, LinkedIn, Book a Call, Contact, Web Dev Course, Design Portfolio

## Customization

### Profile Information
Edit `index.html` to update:
- Profile image (line 48)
- Name and bio (lines 50-51)
- Social media links (lines 55-82)
- Cal.com booking link (Book Call interface)
- Email address (Book Call interface)

### Link Cards
Modify the link cards in `index.html` (lines 88-149):
- Change URLs in `href` attributes
- Update thumbnails
- Edit link titles and descriptions

### About Me Content
Customize in `index.html`:
- Profile image and tagline
- About Me text
- Skills badges
- Project cards with images and descriptions

### Colors & Theme
Customize in `styles.css`:
- Light theme colors (lines 1-9)
- Dark theme colors (lines 11-19)
- Gradient backgrounds
- Accent colors

### Font
Currently using Inter from Google Fonts. Change in `index.html` (line 9) and `styles.css` (line 23).

## Dynamic Card System

Add cards programmatically using JavaScript:

```javascript
// Add a single card
addLinkCard({
    url: 'https://example.com/new-link',
    title: 'New Dynamic Card',
    description: 'This card was added dynamically!',
    thumbnail: 'https://example.com/image.jpg',
    type: 'image' // 'image', 'pdf', or 'doc'
});

// Add multiple cards
addMultipleCards([
    { url: '...', title: '...', description: '...', thumbnail: '...' },
    { url: '...', title: '...', description: '...', type: 'pdf' }
]);
```

See `CARD_SYSTEM.md` for complete documentation.

## Usage

1. Open `index.html` in a browser
2. Customize content, links, and personal information
3. Update Cal.com link and email address
4. Deploy to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
├── CARD_SYSTEM.md      # Card system documentation
└── README.md           # This file
```

## License

Free to use and modify for personal and commercial projects.
