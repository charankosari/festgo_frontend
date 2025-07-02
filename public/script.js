// FestGo Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    const heroSection = document.querySelector('#home');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        
        if (scrollPosition > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.service-card, .feature-item, .contact-info, .contact-form');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.innerHTML = `
                <span class="loading-spinner mr-2"></span>
                Sending...
            `;
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
                successMessage.textContent = 'Thank you! Your message has been sent successfully.';
                
                this.insertBefore(successMessage, this.firstChild);
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 2000);
        });
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const newsletterInput = newsletterForm.querySelector('input[type="email"]');
        const newsletterBtn = newsletterForm.querySelector('button');
        
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            if (!email) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show loading state
            const originalHTML = this.innerHTML;
            this.innerHTML = '<span class="loading-spinner"></span>';
            this.disabled = true;
            
            // Simulate subscription
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                newsletterInput.value = '';
                this.innerHTML = originalHTML;
                this.disabled = false;
            }, 1500);
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Counter animation for statistics (if added)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.disabled && !this.classList.contains('no-loading')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    // Typing effect for hero title (optional)
    function typeWriter(element, text, speed = 100) {
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

    // Initialize typing effect for hero title
    const heroTitle = document.querySelector('h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }

    // Add hover effect to footer links
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
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

    // Apply debounce to scroll events
    const debouncedScrollHandler = debounce(function() {
        // Add any additional scroll-based animations here
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // Add CSS class for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduce-motion');
    }

    console.log('FestGo landing page initialized successfully!');
});

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for potential use in other scripts
window.FestGo = {
    animateCounter,
    typeWriter,
    debounce
};
