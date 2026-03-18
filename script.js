window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Menu Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const menuContents = document.querySelectorAll('.menu-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        
        // Remove active classes
        tabBtns.forEach(b => b.classList.remove('active'));
        menuContents.forEach(c => c.classList.remove('active'));
        
        // Add active classes
        btn.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Reservation Form
const reservationForm = document.querySelector('.reservation-form');
reservationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Booking Confirmed! 🎉';
    submitBtn.style.background = 'var(--saffron)';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        this.reset();
    }, 3000);
    
    console.log('Reservation submitted!');
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe food cards and stats
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.food-card, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// *** UPDATED initMap FUNCTION (Lines 140-170) ***
function initMap() {
    // Exact coordinates for Daddy's Kitchen Pokhara - Lakeside Road, Pokhara-6
    const daddysKitchen = { lat: 28.2164, lng: 83.9171 }; // Lakeside, Pokhara-6
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: daddysKitchen,
        styles: [
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#1a1a1a' }]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [{ color: '#2F4F2F' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text',
                stylers: [{ color: '#FF9933' }]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: daddysKitchen,
        map: map,
        title: "Daddy's Kitchen Pokhara - Lakeside Rd, Pokhara-6",
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="45" height="55" viewBox="0 0 45 55" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 0C13.5 11 0 27.5 0 38.5a11 11 0 0 0 22 0c0-11-13.5-27.5 0-38.5z" fill="%23FF9933"/>
                    <circle cx="22.5" cy="22" r="9" fill="%23FFD700"/>
                    <circle cx="22.5" cy="22" r="4" fill="%23FFFFFF"/>
                    <text x="22.5" y="26" text-anchor="middle" fill="%23FF9933" font-size="8" font-weight="bold">DK</text>
                </svg>
            `)
        }
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: '<div style="padding: 10px;"><h3>🍽️ Daddy\'s Kitchen</h3><p>Lakeside Road<br>Pokhara-6, Kaski<br>📞 061-457967</p></div>'
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Form floating labels effect
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    hero.style.transform = `translateY(${speed}px)`;
});

// Counter animation for stats
function animateCounters() {
    const statsSection = document.querySelector('.about-section');
    const counters = document.querySelectorAll('.stat h3');
    let hasAnimated = statsSection.dataset.animated === 'true';
    
    // Only animate ONCE when section is visible
    if (!hasAnimated && window.scrollY > 1500) {
        statsSection.dataset.animated = 'true';
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + (target === 5 ? '★' : '+');
                }
            };
            updateCounter();
        });
    }
}

// Only check when scrolling past about section
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            animateCounters();
            ticking = false;
        });
        ticking = true;
    }
});

// WhatsApp button pulse animation
setInterval(() => {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    whatsappBtn.style.transform = 'scale(1.05)';
    setTimeout(() => {
        whatsappBtn.style.transform = 'scale(1)';
    }, 500);
}, 3000);
