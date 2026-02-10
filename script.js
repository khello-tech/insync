/* ============================================
   YOUSEF AUTOMATION WEBSITE - JAVASCRIPT
   Interactive features and animations
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       MOBILE MENU TOGGLE
       ============================================ */
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    /* ============================================
       SMOOTH SCROLLING FOR ANCHOR LINKS
       ============================================ */
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(href);

            if (targetElement) {
                e.preventDefault();

                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ============================================
       HEADER SCROLL EFFECT
       ============================================ */
    const header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    /* ============================================
       FAQ ACCORDION
       ============================================ */
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current FAQ item
            if (isActive) {
                faqItem.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
            } else {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ============================================
       SCROLL ANIMATIONS (FADE IN ON SCROLL)
       ============================================ */
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation to improve performance
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    /* ============================================
       BACK TO TOP BUTTON
       ============================================ */
    const backToTopButton = document.getElementById('backToTop');

    function toggleBackToTopButton() {
        if (window.scrollY > 500) {
            backToTopButton?.classList.add('visible');
        } else {
            backToTopButton?.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleBackToTopButton);

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ============================================
       FORM VALIDATION (If you add a contact form)
       ============================================ */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const formData = new FormData(this);
            let isValid = true;

            // Check required fields
            for (let [key, value] of formData.entries()) {
                if (!value.trim()) {
                    isValid = false;
                    const input = this.querySelector(`[name="${key}"]`);
                    input.classList.add('error');
                }
            }

            if (isValid) {
                // Submit form (you would add your form submission logic here)
                console.log('Form submitted successfully');

                // Show success message (you would customize this)
                alert('Thank you! Your message has been sent.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });

        // Remove error class on input
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }

    /* ============================================
       LAZY LOADING IMAGES (If you add images)
       ============================================ */
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    /* ============================================
       TYPING EFFECT FOR HERO (Optional Enhancement)
       ============================================ */
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Uncomment to enable typing effect on hero subtitle
    // const heroSubtitle = document.querySelector('.hero-subtitle');
    // if (heroSubtitle) {
    //     const originalText = heroSubtitle.textContent;
    //     typeWriter(heroSubtitle, originalText, 30);
    // }

    /* ============================================
       WHATSAPP BUTTON ANALYTICS (Optional)
       ============================================ */
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track WhatsApp button clicks
            // You can integrate with Google Analytics or other analytics tools
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'WhatsApp',
                    'event_label': this.textContent.trim()
                });
            }

            console.log('WhatsApp button clicked:', this.textContent.trim());
        });
    });

    /* ============================================
       PRICING CARD HOVER EFFECT ENHANCEMENT
       ============================================ */
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle scale effect
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    /* ============================================
       PERFORMANCE: DEBOUNCE SCROLL EVENTS
       ============================================ */
    function debounce(func, wait = 10) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll-heavy functions
    const debouncedScroll = debounce(function() {
        handleScroll();
        toggleBackToTopButton();
    }, 10);

    window.addEventListener('scroll', debouncedScroll);

    /* ============================================
       INITIALIZE ON PAGE LOAD
       ============================================ */
    window.addEventListener('DOMContentLoaded', function() {
        // Initial checks
        handleScroll();
        toggleBackToTopButton();

        // Add visible class to elements already in viewport on load
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });

        console.log('Website loaded successfully!');
    });

    /* ============================================
       SERVICE WORKER FOR PWA (Optional Enhancement)
       ============================================ */
    // Uncomment to enable Progressive Web App features
    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', function() {
    //         navigator.serviceWorker.register('/service-worker.js')
    //             .then(function(registration) {
    //                 console.log('ServiceWorker registered:', registration);
    //             })
    //             .catch(function(error) {
    //                 console.log('ServiceWorker registration failed:', error);
    //             });
    //     });
    // }

    /* ============================================
       KEYBOARD ACCESSIBILITY ENHANCEMENTS
       ============================================ */
    // Add keyboard navigation for FAQ
    faqQuestions.forEach(question => {
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Trap focus in mobile menu when open
    if (navMenu) {
        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && this.classList.contains('active')) {
                this.classList.remove('active');
                mobileMenuToggle?.focus();
            }
        });
    }

})();

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Smooth scroll to element by ID
function scrollToElement(elementId, offset = 100) {
    const element = document.getElementById(elementId);
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Example: Scroll to specific section from URL parameter
// Usage: yourwebsite.com?section=services
const sectionParam = getQueryParam('section');
if (sectionParam) {
    setTimeout(() => {
        scrollToElement(sectionParam);
    }, 500);
}
