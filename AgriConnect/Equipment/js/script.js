/**
 * AgriConnect Data System - Main JavaScript
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }
    
    // Handle mobile menu closing when link is clicked
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    for (const link of navLinks) {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                navbarToggler.click();
            }
        });
    }
    
    // Add back-to-top button functionality
    if (document.querySelector('.back-to-top')) {
        window.addEventListener('scroll', toggleBackToTopButton);
        document.querySelector('.back-to-top').addEventListener('click', scrollToTop);
    }
    
    // Initialize equipment card animations
    initEquipmentAnimations();
});

/**
 * Initialize equipment card animations
 */
function initEquipmentAnimations() {
    // Fade in cards with a staggered delay
    const cards = document.querySelectorAll('.equipment-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
    });
    
    // Add hover effects to equipment cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.background = '#e67e22';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.background = '#ff9933';
        });
    });
}

/**
 * Smooth scroll function
 */
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetPosition = document.querySelector(targetId).offsetTop - 80;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

/**
 * Toggle back-to-top button visibility
 */
function toggleBackToTopButton() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

/**
 * Scroll to top function
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Display current year in footer copyright
 */
function displayCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Call the function to display current year
displayCurrentYear();

/**
 * Form validation helper
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    form.classList.add('was-validated');
    return form.checkValidity();
} 