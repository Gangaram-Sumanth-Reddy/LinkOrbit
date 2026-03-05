// ============================================
// THEME TOGGLE
// ============================================

const themeToggleBtn = document.getElementById('themeToggleBtn');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add rotation animation
    themeToggleBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggleBtn.style.transform = 'rotate(0deg)';
    }, 300);
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// ============================================
// MODAL ELEMENTS
// ============================================

// Modal Elements
const linkShareModal = document.getElementById('linkShareModal');
const profileShareModal = document.getElementById('profileShareModal');
const linkModalClose = document.getElementById('linkModalClose');
const profileModalClose = document.getElementById('profileModalClose');
const profileShareBtn = document.getElementById('profileShareBtn');
const menuButtons = document.querySelectorAll('.menu-btn');
const toast = document.getElementById('toast');

// Current link data
let currentLinkData = {
    url: '',
    title: '',
    description: '',
    thumbnail: ''
};

// Profile data
const profileData = {
    url: window.location.href,
    name: 'Gangaram Sumanth Reddy',
    handle: '@codegai'
};

// Open Link Share Modal
menuButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const wrapper = btn.closest('.link-card-wrapper');
        const linkCard = wrapper.querySelector('.link-card');
        const thumbnail = wrapper.querySelector('.link-thumbnail img');
        
        currentLinkData = {
            url: linkCard.getAttribute('data-link-url'),
            title: linkCard.getAttribute('data-link-title'),
            description: linkCard.getAttribute('data-link-description'),
            thumbnail: thumbnail ? thumbnail.src : ''
        };
        
        updateLinkPreview();
        openModal(linkShareModal);
        
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
});

// Update Link Preview
function updateLinkPreview() {
    document.getElementById('linkPreviewTitle').textContent = currentLinkData.title;
    document.getElementById('linkPreviewUrl').textContent = formatUrl(currentLinkData.url);
    document.getElementById('linkPreviewDescription').textContent = currentLinkData.description;
    
    const thumbImg = document.querySelector('#linkPreviewThumb img');
    if (thumbImg && currentLinkData.thumbnail) {
        thumbImg.src = currentLinkData.thumbnail;
    }
}

// Open Profile Share Modal
profileShareBtn.addEventListener('click', () => {
    openModal(profileShareModal);
    pushNavigation('share-profile');
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Modal Functions
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close Modal Events
linkModalClose.addEventListener('click', () => {
    closeModal(linkShareModal);
    if (navigationStack[navigationStack.length - 1] === 'link-share') {
        history.back();
        popNavigation();
    }
});

profileModalClose.addEventListener('click', () => {
    closeModal(profileShareModal);
    if (navigationStack[navigationStack.length - 1] === 'share-profile') {
        history.back();
        popNavigation();
    }
});

// Close on overlay click
linkShareModal.addEventListener('click', (e) => {
    if (e.target === linkShareModal) {
        closeModal(linkShareModal);
    }
});

profileShareModal.addEventListener('click', (e) => {
    if (e.target === profileShareModal) {
        closeModal(profileShareModal);
    }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (linkShareModal.classList.contains('active')) {
            closeModal(linkShareModal);
        }
        if (profileShareModal.classList.contains('active')) {
            closeModal(profileShareModal);
        }
    }
});

// Share Actions
const shareOptions = document.querySelectorAll('.share-option');

shareOptions.forEach(option => {
    option.addEventListener('click', () => {
        const action = option.getAttribute('data-action');
        const modal = option.closest('.modal-overlay');
        
        if (modal.id === 'linkShareModal') {
            handleLinkShare(action);
        } else {
            handleProfileShare(action);
        }
        
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
});

// Handle Link Share
function handleLinkShare(action) {
    const url = encodeURIComponent(currentLinkData.url);
    const title = encodeURIComponent(currentLinkData.title);
    const description = encodeURIComponent(currentLinkData.description);
    
    try {
        switch(action) {
            case 'copy-link':
                copyToClipboard(currentLinkData.url);
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                break;
            case 'whatsapp':
                window.open(`https://wa.me/?text=${title}%20${url}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                break;
            case 'messenger':
                window.open(`https://www.facebook.com/dialog/send?link=${url}&app_id=YOUR_APP_ID&redirect_uri=${url}`, '_blank');
                break;
            case 'snapchat':
                window.open(`https://www.snapchat.com/scan?attachmentUrl=${url}`, '_blank');
                break;
        }
    } catch (error) {
        console.error('Share error:', error);
        showError('Something went wrong. Please try again.');
    }
}

// Handle Profile Share
function handleProfileShare(action) {
    const url = encodeURIComponent(profileData.url);
    const text = encodeURIComponent(`Check out ${profileData.name}'s profile`);
    
    switch(action) {
        case 'copy-profile':
            copyToClipboard(profileData.url);
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            break;
        case 'whatsapp':
            window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
            break;
        case 'linkedin':
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
            break;
        case 'messenger':
            window.open(`https://www.facebook.com/dialog/send?link=${url}&app_id=YOUR_APP_ID&redirect_uri=${url}`, '_blank');
            break;
        case 'snapchat':
            window.open(`https://www.snapchat.com/scan?attachmentUrl=${url}`, '_blank');
            break;
    }
}

// ============================================
// NAVIGATION STATE MANAGEMENT
// ============================================

let navigationStack = ['main'];
let currentInterface = null;

// Initialize navigation
function initNavigation() {
    // Set initial state
    history.replaceState({ page: 'main' }, '', window.location.pathname);
}

// Push new state to navigation stack
function pushNavigation(pageName) {
    navigationStack.push(pageName);
    history.pushState({ page: pageName }, '', `#${pageName}`);
}

// Pop from navigation stack
function popNavigation() {
    if (navigationStack.length > 1) {
        navigationStack.pop();
        return navigationStack[navigationStack.length - 1];
    }
    return 'main';
}

// ============================================
// INTERFACE PAGES - Book Call & About Me
// ============================================

const bookCallInterface = document.getElementById('bookCallInterface');
const aboutMeInterface = document.getElementById('aboutMeInterface');
const bookCallBtn = document.getElementById('bookCallBtn');
const aboutMeBtn = document.getElementById('aboutMeBtn');
const bookCallBackBtn = document.getElementById('bookCallBackBtn');
const aboutMeBackBtn = document.getElementById('aboutMeBackBtn');

// Open Book Call Interface
bookCallBtn.addEventListener('click', () => {
    // Don't close modal immediately, let it transition
    setTimeout(() => {
        closeModal(profileShareModal);
        openInterface(bookCallInterface, 'book-call');
    }, 100);
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Open About Me Interface
aboutMeBtn.addEventListener('click', () => {
    setTimeout(() => {
        closeModal(profileShareModal);
        openInterface(aboutMeInterface, 'about-me');
    }, 100);
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Interface Functions with History API
function openInterface(interfacePage, pageName) {
    interfacePage.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentInterface = interfacePage;
    
    // Push state to browser history
    pushNavigation(pageName);
}

function closeInterface(interfacePage) {
    interfacePage.classList.remove('active');
    document.body.style.overflow = '';
    currentInterface = null;
}

// Back Button Events
bookCallBackBtn.addEventListener('click', () => {
    handleBackNavigation();
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

aboutMeBackBtn.addEventListener('click', () => {
    handleBackNavigation();
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Handle browser back button and mobile back gesture
window.addEventListener('popstate', (event) => {
    const state = event.state;
    
    if (!state || state.page === 'main') {
        // Close any open interface
        if (bookCallInterface.classList.contains('active')) {
            closeInterface(bookCallInterface);
        }
        if (aboutMeInterface.classList.contains('active')) {
            closeInterface(aboutMeInterface);
        }
        if (profileShareModal.classList.contains('active')) {
            closeModal(profileShareModal);
        }
        navigationStack = ['main'];
    } else if (state.page === 'share-profile') {
        // Close interfaces, open share modal
        if (bookCallInterface.classList.contains('active')) {
            closeInterface(bookCallInterface);
        }
        if (aboutMeInterface.classList.contains('active')) {
            closeInterface(aboutMeInterface);
        }
        setTimeout(() => {
            openModal(profileShareModal);
        }, 300);
    } else if (state.page === 'book-call') {
        // Open book call interface
        if (aboutMeInterface.classList.contains('active')) {
            closeInterface(aboutMeInterface);
        }
        openInterface(bookCallInterface, 'book-call');
    } else if (state.page === 'about-me') {
        // Open about me interface
        if (bookCallInterface.classList.contains('active')) {
            closeInterface(bookCallInterface);
        }
        openInterface(aboutMeInterface, 'about-me');
    }
});

// Handle back navigation
function handleBackNavigation() {
    const previousPage = popNavigation();
    
    if (previousPage === 'main') {
        // Close all interfaces
        if (bookCallInterface.classList.contains('active')) {
            closeInterface(bookCallInterface);
        }
        if (aboutMeInterface.classList.contains('active')) {
            closeInterface(aboutMeInterface);
        }
        history.back();
    } else if (previousPage === 'share-profile') {
        // Close interfaces and open share modal
        if (bookCallInterface.classList.contains('active')) {
            closeInterface(bookCallInterface);
        }
        if (aboutMeInterface.classList.contains('active')) {
            closeInterface(aboutMeInterface);
        }
        setTimeout(() => {
            openModal(profileShareModal);
        }, 300);
        history.back();
    }
}

// Close interface on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (bookCallInterface.classList.contains('active') || aboutMeInterface.classList.contains('active')) {
            handleBackNavigation();
        }
    }
});

// Copy to Clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Link copied successfully! ✓');
    } catch (err) {
        console.error('Failed to copy:', err);
        showToast('Failed to copy link');
    }
}

// Show Toast with improved styling
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Show Error Message
function showError(message) {
    let errorEl = document.querySelector('.error-message');
    
    if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        document.body.appendChild(errorEl);
    }
    
    errorEl.textContent = message;
    errorEl.classList.add('show');
    
    setTimeout(() => {
        errorEl.classList.remove('show');
    }, 3000);
}

// Format URL
function formatUrl(url) {
    try {
        const urlObj = new URL(url);
        let formatted = urlObj.hostname + urlObj.pathname;
        if (formatted.length > 40) {
            formatted = formatted.substring(0, 40) + '...';
        }
        return formatted;
    } catch {
        return url.replace(/^https?:\/\//, '').substring(0, 40);
    }
}

// Swipe to Close Modal (Mobile)
let touchStartY = 0;
let touchEndY = 0;
let touchStartTime = 0;

function handleSwipeStart(e) {
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
}

function handleSwipeEnd(e) {
    touchEndY = e.changedTouches[0].clientY;
    const touchDuration = Date.now() - touchStartTime;
    const swipeDistance = touchEndY - touchStartY;
    
    // Swipe down to close (minimum 100px, maximum 500ms duration)
    if (swipeDistance > 100 && touchDuration < 500) {
        const modal = e.target.closest('.modal-overlay');
        if (modal) {
            closeModal(modal);
        }
    }
}

linkShareModal.addEventListener('touchstart', handleSwipeStart, { passive: true });
linkShareModal.addEventListener('touchend', handleSwipeEnd, { passive: true });
profileShareModal.addEventListener('touchstart', handleSwipeStart, { passive: true });
profileShareModal.addEventListener('touchend', handleSwipeEnd, { passive: true });

// Link Card Click Analytics
const linkCards = document.querySelectorAll('.link-card');
linkCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
        
        console.log(`Link ${index + 1} clicked:`, card.querySelector('.link-title').textContent);
    });
});

// Prevent body scroll when modal is open
function preventBodyScroll() {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
}

function allowBodyScroll() {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// Update modal open/close to use new scroll prevention
const originalOpenModal = openModal;
const originalCloseModal = closeModal;

openModal = function(modal) {
    originalOpenModal(modal);
    preventBodyScroll();
};

closeModal = function(modal) {
    originalCloseModal(modal);
    allowBodyScroll();
};

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    initNavigation();
});

console.log('🎉 Linktree clone loaded successfully!');
console.log('🧭 Navigation stack initialized');


// ============================================
// SCALABLE CARD SYSTEM - Dynamic Card Creation
// ============================================

/**
 * Creates a new link card element
 * @param {Object} cardData - Card configuration object
 * @param {string} cardData.url - Link URL
 * @param {string} cardData.title - Card title
 * @param {string} cardData.description - Card description
 * @param {string} cardData.thumbnail - Thumbnail image URL (optional)
 * @param {string} cardData.type - Card type: 'image', 'pdf', 'doc' (default: 'image')
 * @returns {HTMLElement} - Complete card wrapper element
 */
function createLinkCard(cardData) {
    const {
        url,
        title,
        description,
        thumbnail = '',
        type = 'image'
    } = cardData;

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'link-card-wrapper';

    // Create link card
    const card = document.createElement('a');
    card.href = url;
    card.className = 'link-card';
    card.setAttribute('data-link-url', url);
    card.setAttribute('data-link-title', title);
    card.setAttribute('data-link-description', description);

    // Create thumbnail
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'link-thumbnail';
    
    if (type === 'pdf') {
        thumbnailDiv.classList.add('pdf-icon');
        thumbnailDiv.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                <path d="M14 2v6h6"></path>
            </svg>
        `;
    } else if (type === 'doc') {
        thumbnailDiv.classList.add('doc-icon');
        thumbnailDiv.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                <path d="M14 2v6h6"></path>
                <path d="M9 13h6M9 17h6"></path>
            </svg>
        `;
    } else if (thumbnail) {
        const img = document.createElement('img');
        img.src = thumbnail;
        img.alt = title;
        thumbnailDiv.appendChild(img);
    }

    // Create title
    const titleSpan = document.createElement('span');
    titleSpan.className = 'link-title';
    titleSpan.textContent = title;

    // Assemble card
    card.appendChild(thumbnailDiv);
    card.appendChild(titleSpan);

    // Create menu button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.setAttribute('aria-label', 'Share link');
    menuBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2"></circle>
            <circle cx="12" cy="12" r="2"></circle>
            <circle cx="12" cy="19" r="2"></circle>
        </svg>
    `;

    // Add event listener to menu button
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        currentLinkData = {
            url: url,
            title: title,
            description: description,
            thumbnail: thumbnail
        };
        
        updateLinkPreview();
        openModal(linkShareModal);
        
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });

    // Add click event to card
    card.addEventListener('click', () => {
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
        console.log('Card clicked:', title);
    });

    // Assemble wrapper
    wrapper.appendChild(card);
    wrapper.appendChild(menuBtn);

    return wrapper;
}

/**
 * Adds a new card to the link list
 * @param {Object} cardData - Card configuration object
 * @param {string} position - 'start' or 'end' (default: 'end')
 */
function addLinkCard(cardData, position = 'end') {
    const cardList = document.querySelector('.link-card-list');
    const newCard = createLinkCard(cardData);
    
    if (position === 'start') {
        cardList.insertBefore(newCard, cardList.firstChild);
    } else {
        cardList.appendChild(newCard);
    }
}

/**
 * Adds multiple cards at once
 * @param {Array} cardsArray - Array of card configuration objects
 */
function addMultipleCards(cardsArray) {
    const cardList = document.querySelector('.link-card-list');
    const fragment = document.createDocumentFragment();
    
    cardsArray.forEach(cardData => {
        const card = createLinkCard(cardData);
        fragment.appendChild(card);
    });
    
    cardList.appendChild(fragment);
}

/**
 * Removes all cards from the list
 */
function clearAllCards() {
    const cardList = document.querySelector('.link-card-list');
    cardList.innerHTML = '';
}

/**
 * Gets the total number of cards
 * @returns {number} - Total card count
 */
function getCardCount() {
    return document.querySelectorAll('.link-card-wrapper').length;
}

// ============================================
// EXAMPLE USAGE (Uncomment to test)
// ============================================

/*
// Add a single card
addLinkCard({
    url: 'https://example.com/new-link',
    title: 'New Dynamic Card',
    description: 'This card was added dynamically!',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100&h=100&fit=crop',
    type: 'image'
});

// Add multiple cards at once
addMultipleCards([
    {
        url: 'https://example.com/card1',
        title: 'Batch Card 1',
        description: 'First card in batch',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop'
    },
    {
        url: 'https://example.com/card2',
        title: 'Batch Card 2',
        description: 'Second card in batch',
        type: 'pdf'
    },
    {
        url: 'https://example.com/card3',
        title: 'Batch Card 3',
        description: 'Third card in batch',
        type: 'doc'
    }
]);

// Check card count
console.log('Total cards:', getCardCount());
*/

// Log system ready
console.log('✅ Scalable card system ready!');
console.log('📦 Current card count:', getCardCount());
console.log('💡 Use addLinkCard() to add new cards dynamically');
console.log('🔙 Browser back button navigation enabled');
console.log('📱 Mobile-optimized with history API support');


// ============================================
// DOCUMENTATION PAGES - Privacy, Report, Explore
// ============================================

const privacyPage = document.getElementById('privacyPage');
const reportPage = document.getElementById('reportPage');
const explorePage = document.getElementById('explorePage');

const privacyLink = document.getElementById('privacyLink');
const reportLink = document.getElementById('reportLink');
const exploreLink = document.getElementById('exploreLink');

const privacyBackBtn = document.getElementById('privacyBackBtn');
const reportBackBtn = document.getElementById('reportBackBtn');
const exploreBackBtn = document.getElementById('exploreBackBtn');

// Open Privacy Page
privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    openDocPage(privacyPage, 'privacy');
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Open Report Page
reportLink.addEventListener('click', (e) => {
    e.preventDefault();
    openDocPage(reportPage, 'report');
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Open Explore Page
exploreLink.addEventListener('click', (e) => {
    e.preventDefault();
    openDocPage(explorePage, 'explore');
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Back button handlers
privacyBackBtn.addEventListener('click', () => {
    handleDocPageBack();
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

reportBackBtn.addEventListener('click', () => {
    handleDocPageBack();
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

exploreBackBtn.addEventListener('click', () => {
    handleDocPageBack();
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

// Open doc page function
function openDocPage(page, pageName) {
    page.classList.add('active');
    document.body.style.overflow = 'hidden';
    pushNavigation(pageName);
}

// Close doc page function
function closeDocPage(page) {
    page.classList.remove('active');
    document.body.style.overflow = '';
}

// Handle doc page back navigation
function handleDocPageBack() {
    const previousPage = popNavigation();
    
    if (privacyPage.classList.contains('active')) {
        closeDocPage(privacyPage);
    }
    if (reportPage.classList.contains('active')) {
        closeDocPage(reportPage);
    }
    if (explorePage.classList.contains('active')) {
        closeDocPage(explorePage);
    }
    
    history.back();
}

// Update popstate handler to include doc pages
const originalPopstateHandler = window.onpopstate;
window.addEventListener('popstate', (event) => {
    const state = event.state;
    
    // Close doc pages if open
    if (privacyPage.classList.contains('active')) {
        closeDocPage(privacyPage);
    }
    if (reportPage.classList.contains('active')) {
        closeDocPage(reportPage);
    }
    if (explorePage.classList.contains('active')) {
        closeDocPage(explorePage);
    }
    
    // Handle other navigation states
    if (!state || state.page === 'main') {
        if (bookCallInterface.classList.contains('active')) {
            closeInterface(bookCallInterface);
        }
        if (aboutMeInterface.classList.contains('active')) {
            closeInterface(aboutMeInterface);
        }
        if (profileShareModal.classList.contains('active')) {
            closeModal(profileShareModal);
        }
        navigationStack = ['main'];
    } else if (state.page === 'share-profile') {
        if (bookCallInterface.classList.contains('active')) {
            closeInterface(bookCallInterface);
        }
        if (aboutMeInterface.classList.contains('active')) {
            closeInterface(aboutMeInterface);
        }
        setTimeout(() => {
            openModal(profileShareModal);
        }, 300);
    } else if (state.page === 'book-call') {
        if (aboutMeInterface.classList.contains('active')) {
            closeInterface(aboutMeInterface);
        }
        openInterface(bookCallInterface, 'book-call');
    } else if (state.page === 'about-me') {
        if (bookCallInterface.classList.contains('active')) {
            closeInterface(bookCallInterface);
        }
        openInterface(aboutMeInterface, 'about-me');
    } else if (state.page === 'privacy') {
        openDocPage(privacyPage, 'privacy');
    } else if (state.page === 'report') {
        openDocPage(reportPage, 'report');
    } else if (state.page === 'explore') {
        openDocPage(explorePage, 'explore');
    }
});

// Close doc pages on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (privacyPage.classList.contains('active') || 
            reportPage.classList.contains('active') || 
            explorePage.classList.contains('active')) {
            handleDocPageBack();
        }
    }
});

// ============================================
// REPORT PAGE - FORM HANDLING
// ============================================

const showFormBtn = document.getElementById('showFormBtn');
const reportFormContainer = document.getElementById('reportFormContainer');
const reportForm = document.getElementById('reportForm');
const formSuccessMessage = document.getElementById('formSuccessMessage');
const formErrorMessage = document.getElementById('formErrorMessage');
const submitBtn = document.getElementById('submitBtn');
const retryBtn = document.getElementById('retryBtn');

showFormBtn.addEventListener('click', () => {
    reportFormContainer.style.display = 'block';
    reportFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
});

reportForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    btnText.style.display = 'none';
    btnLoader.style.display = 'flex';
    submitBtn.disabled = true;
    
    try {
        // Get form data
        const formData = new FormData(reportForm);
        
        // Submit to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Success - hide form and show success message
            reportForm.style.display = 'none';
            formSuccessMessage.style.display = 'block';
            formSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form
            reportForm.reset();
            
            if (navigator.vibrate) {
                navigator.vibrate([10, 50, 10]);
            }
            
            // Show toast
            showToast('Issue report submitted successfully! ✓');
            
            console.log('✅ Form submitted successfully:', data);
        } else {
            // Error from Web3Forms
            throw new Error(data.message || 'Submission failed');
        }
    } catch (error) {
        // Show error message
        console.error('❌ Form submission error:', error);
        reportForm.style.display = 'none';
        formErrorMessage.style.display = 'block';
        formErrorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        showToast('Failed to submit report. Please try again.');
    } finally {
        // Reset button state
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
    }
});

// Retry button handler
if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        formErrorMessage.style.display = 'none';
        reportForm.style.display = 'block';
        reportForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
}

console.log('📄 Documentation pages initialized');
console.log('🔒 Privacy Policy page ready');
console.log('🐛 Report Issue page ready');
console.log('🌟 Explore page ready');

// ============================================
// FOOTER BRAND LINK - REDIRECT TO ABOUT ME
// ============================================

const footerBrandLink = document.getElementById('footerBrandLink');

if (footerBrandLink) {
    footerBrandLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close any open doc pages
        if (privacyPage.classList.contains('active')) {
            closeDocPage(privacyPage);
        }
        if (reportPage.classList.contains('active')) {
            closeDocPage(reportPage);
        }
        if (explorePage.classList.contains('active')) {
            closeDocPage(explorePage);
        }
        
        // Close any open modals
        if (profileShareModal.classList.contains('active')) {
            closeModal(profileShareModal);
        }
        
        // Open About Me interface
        setTimeout(() => {
            openInterface(aboutMeInterface, 'about-me');
        }, 300);
        
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
}

