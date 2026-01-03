// ============================================
// FoodFolio - Ultimate Food Portfolio Platform
// Interactive JavaScript Features
// ============================================

// ========== Utility Functions ==========
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ========== Navigation Scroll Effect ==========
const navbar = $('#navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========== Mobile Menu Toggle ==========
const mobileMenuToggle = $('#mobileMenuToggle');
const navMenu = $('#navMenu');

mobileMenuToggle?.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking nav links
$$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// ========== Smooth Scrolling for Navigation Links ==========
$$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = $(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Active Navigation Link ==========
const sections = $$('section[id]');
const navLinks = $$('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== Counter Animation for Hero Stats ==========
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
};

// Trigger counter animation when hero section is in view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = $$('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroSection = $('#home');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ========== Search Functionality ==========
const searchBtn = $('.search-btn');
const locationInput = $('.location-input');
const foodInput = $('.food-input');

searchBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const location = locationInput.value.trim();
    const food = foodInput.value.trim();
    
    if (!location && !food) {
        showNotification('Please enter a location or food item to search', 'warning');
        return;
    }
    
    // Simulate search
    showNotification(`Searching for "${food || 'all items'}" in "${location || 'your area'}"...`, 'info');
    
    // In a real application, this would trigger a search API call
    setTimeout(() => {
        showNotification('Search functionality is ready for integration!', 'success');
    }, 1500);
});

// ========== Like Button Functionality ==========
$$('.like-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('liked');
        
        const icon = this.querySelector('i');
        if (this.classList.contains('liked')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            
            // Increment like count if span exists
            const countSpan = this.querySelector('span');
            if (countSpan) {
                const currentCount = parseInt(countSpan.textContent);
                countSpan.textContent = currentCount + 1;
            }
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            
            // Decrement like count if span exists
            const countSpan = this.querySelector('span');
            if (countSpan) {
                const currentCount = parseInt(countSpan.textContent);
                countSpan.textContent = currentCount - 1;
            }
        }
    });
});

// ========== Category Filter ==========
const filterBtns = $$('.filter-btn');
const categoryCards = $$('.category-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        categoryCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========== Testimonials Slider ==========
const testimonialsTrack = $('#testimonialsTrack');
const prevBtn = $('#prevBtn');
const nextBtn = $('#nextBtn');

if (testimonialsTrack && prevBtn && nextBtn) {
    let currentSlide = 0;
    const testimonialCards = $$('.testimonial-card');
    const totalSlides = testimonialCards.length;
    
    // Calculate slides per view based on screen size
    const getSlidesPerView = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    };
    
    let slidesPerView = getSlidesPerView();
    const maxSlide = Math.max(0, totalSlides - slidesPerView);
    
    const updateSlider = () => {
        const cardWidth = testimonialCards[0]?.offsetWidth || 0;
        const gap = 24; // var(--spacing-lg)
        const offset = -(currentSlide * (cardWidth + gap));
        testimonialsTrack.style.transform = `translateX(${offset}px)`;
        
        // Update button states
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide >= maxSlide;
    };
    
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentSlide < maxSlide) {
            currentSlide++;
            updateSlider();
        }
    });
    
    // Auto-play slider
    let autoPlayInterval = setInterval(() => {
        if (currentSlide < maxSlide) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    }, 5000);
    
    // Pause auto-play on hover
    testimonialsTrack.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    testimonialsTrack.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(() => {
            if (currentSlide < maxSlide) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateSlider();
        }, 5000);
    });
    
    // Update on window resize
    window.addEventListener('resize', () => {
        const newSlidesPerView = getSlidesPerView();
        if (newSlidesPerView !== slidesPerView) {
            slidesPerView = newSlidesPerView;
            currentSlide = 0;
            updateSlider();
        }
    });
    
    // Initial update
    updateSlider();
}

// ========== Newsletter Form ==========
const newsletterForm = $('#newsletterForm');

newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!email) {
        showNotification('Please enter your email address', 'warning');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate API call
    showNotification('Subscribing...', 'info');
    
    setTimeout(() => {
        showNotification('Thank you for subscribing! Check your inbox for confirmation.', 'success');
        emailInput.value = '';
    }, 1500);
});

// Email validation
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// ========== Scroll to Top Button ==========
const scrollToTopBtn = $('#scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn?.classList.add('visible');
    } else {
        scrollToTopBtn?.classList.remove('visible');
    }
});

scrollToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== Notification System ==========
const showNotification = (message, type = 'info') => {
    // Remove existing notification if any
    const existingNotification = $('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already added
    if (!$('#notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'notification-styles';
        notificationStyles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 1rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                display: flex;
                align-items: center;
                gap: 1rem;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                max-width: 400px;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            .notification-info {
                border-left: 4px solid #3B82F6;
            }
            
            .notification-info i {
                color: #3B82F6;
            }
            
            .notification-success {
                border-left: 4px solid #4CAF50;
            }
            
            .notification-success i {
                color: #4CAF50;
            }
            
            .notification-warning {
                border-left: 4px solid #FFB800;
            }
            
            .notification-warning i {
                color: #FFB800;
            }
            
            .notification-error {
                border-left: 4px solid #E23744;
            }
            
            .notification-error i {
                color: #E23744;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #9CA3AF;
                cursor: pointer;
                padding: 0.25rem;
                transition: color 0.3s ease;
            }
            
            .notification-close:hover {
                color: #E23744;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(notificationStyles);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
};

const getNotificationIcon = (type) => {
    const icons = {
        info: 'fa-info-circle',
        success: 'fa-check-circle',
        warning: 'fa-exclamation-triangle',
        error: 'fa-times-circle'
    };
    return icons[type] || icons.info;
};

// ========== Quick View Modal ==========
$$('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.popular-card');
        const title = card.querySelector('.popular-title').textContent;
        const description = card.querySelector('.popular-description').textContent;
        const rating = card.querySelector('.popular-rating span').textContent;
        const image = card.querySelector('.popular-image img').src;
        
        showQuickView({ title, description, rating, image });
    });
});

const showQuickView = (data) => {
    // Remove existing modal if any
    const existingModal = $('.quick-view-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.quick-view-modal').remove()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-image">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <div class="modal-info">
                <div class="modal-rating">
                    <i class="fas fa-star"></i>
                    <span>${data.rating}</span>
                </div>
                <h2 class="modal-title">${data.title}</h2>
                <p class="modal-description">${data.description}</p>
                <button class="btn-primary" onclick="this.closest('.quick-view-modal').remove(); showNotification('View Details functionality ready for integration!', 'info')">
                    View Full Details
                </button>
            </div>
        </div>
    `;
    
    // Add modal styles if not already added
    if (!$('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .quick-view-modal {
                position: fixed;
                inset: 0;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
            }
            
            .modal-overlay {
                position: absolute;
                inset: 0;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(10px);
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                position: relative;
                background: white;
                border-radius: 1.5rem;
                overflow: hidden;
                max-width: 800px;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
                animation: zoomIn 0.3s ease;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            }
            
            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 40px;
                height: 40px;
                background: white;
                border: none;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;
                color: #4B5563;
            }
            
            .modal-close:hover {
                background: #E23744;
                color: white;
                transform: rotate(90deg);
            }
            
            .modal-image {
                height: 500px;
            }
            
            .modal-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .modal-info {
                padding: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .modal-rating {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 1rem;
                background: #F3F4F6;
                border-radius: 9999px;
                font-weight: 600;
                width: fit-content;
                margin-bottom: 1rem;
            }
            
            .modal-rating i {
                color: #FFB800;
            }
            
            .modal-title {
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 1rem;
                color: #111827;
            }
            
            .modal-description {
                color: #6B7280;
                line-height: 1.8;
                margin-bottom: 2rem;
                font-size: 1.125rem;
            }
            
            @keyframes zoomIn {
                from {
                    transform: scale(0.8);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .modal-content {
                    grid-template-columns: 1fr;
                }
                
                .modal-image {
                    height: 300px;
                }
                
                .modal-info {
                    padding: 1.5rem;
                }
                
                .modal-title {
                    font-size: 1.5rem;
                }
            }
        `;
        document.head.appendChild(modalStyles);
    }
    
    document.body.appendChild(modal);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Restore body scroll when modal is closed
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close')) {
            document.body.style.overflow = '';
        }
    });
};

// ========== Simple AOS (Animate On Scroll) Implementation ==========
const observeElements = () => {
    const elements = $$('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
});

// ========== Loading Animation ==========
window.addEventListener('load', () => {
    // Add fade-in animation to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========== Parallax Effect for Hero Section ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = $('#home');
    
    if (hero && scrolled < window.innerHeight) {
        const parallaxElements = hero.querySelectorAll('.floating-shapes .shape');
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// ========== Console Welcome Message ==========
console.log('%c🍕 Welcome to FoodFolio! ', 'background: linear-gradient(135deg, #E23744 0%, #FF4D5A 100%); color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 10px;');
console.log('%cUltimate Food Portfolio Platform', 'color: #E23744; font-size: 14px; font-weight: 600;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #6B7280; font-size: 12px;');

// ========== Performance Optimization ==========
// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = $$('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========== Keyboard Accessibility ==========
document.addEventListener('keydown', (e) => {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const modal = $('.quick-view-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
        
        const notification = $('.notification');
        if (notification) {
            notification.remove();
        }
    }
    
    // Toggle mobile menu with keyboard
    if (e.key === 'Enter' && e.target === mobileMenuToggle) {
        mobileMenuToggle.click();
    }
});

// ========== Development Helper ==========
// Log when all interactive elements are ready
console.log('%c✅ All interactive features loaded successfully!', 'color: #4CAF50; font-weight: bold;');
