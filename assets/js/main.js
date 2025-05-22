document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate menu icon
        const spans = mobileMenu.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu?.contains(e.target) && !navLinks?.contains(e.target)) {
            navLinks?.classList.remove('active');
            
            // Also reset menu icon animation when closing
            const spans = mobileMenu?.querySelectorAll('span');
            spans?.forEach(span => span.classList.remove('active'));
        }
    });

    // NEW FEATURE: Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    // NEW FEATURE: Update scroll indicator width
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
    });

    // NEW FEATURE: Smooth reveal animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '20px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // NEW FEATURE: Observe all cards for animation
    document.querySelectorAll('.card, .blog-card, .skill-card, .work-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Form submission handler (preserved from your version)
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
});
