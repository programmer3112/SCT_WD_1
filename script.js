/**
 * TechNova Solutions Landing Page JavaScript
 * Handles navigation, animations, and interactive features
 */

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll background change
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Handle scroll direction for additional effects
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector('textarea').value.trim();
        
        if (name && email && message) {
            // Simulate form submission
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Scroll animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation for cards
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe cards for scroll animations
document.querySelectorAll('.service-card, .project-card').forEach(card => {
    observer.observe(card);
});

// Add animation classes via CSS
document.querySelectorAll('.service-card, .project-card').forEach(card => {
    card.classList.add('animate-ready');
});

// Navbar scroll up behavior reset
window.addEventListener('scroll', () => {
    if (window.scrollY < 100) {
        navbar.style.transform = 'translateY(0)';
    }
}, { passive: true });

// Preload animations for better performance
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
