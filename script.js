// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// CTA button scroll to menu section
document.querySelector('.cta-button').addEventListener('click', function() {
    // Assuming the menu section has an ID 'menu' or similar
    const menuSection = document.querySelector('.menu'); 
    if (menuSection) {
        menuSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked (for single-page navigation)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// Fade-in animation using Intersection Observer API
document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.section-padding, .menu-item, .info-card, .form-section');

    const appearOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Adjust when element is 50px from bottom of viewport
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.classList.add('fade-in'); // Add initial fade-in class
        appearOnScroll.observe(fader);
    });
});
