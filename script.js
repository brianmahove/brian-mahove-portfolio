// Replace 'YOUR_FORM_ID' with your Formspree form ID from https://formspree.io
// Sign up free → New Form → copy the ID from the endpoint URL
const FORMSPREE_ID = 'YOUR_FORM_ID';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --- AOS INITIALIZATION ---
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // --- NAVBAR & HAMBURGER MENU ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- STICKY HEADER ---
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 50);
    });

    // --- ACTIVE NAV LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    function navHighlighter() {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
            if (!link) return;
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    window.addEventListener('scroll', navHighlighter);

    // --- DARK/LIGHT MODE TOGGLE ---
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggle.checked = currentTheme !== 'dark-mode';
    } else {
        document.body.classList.add('dark-mode');
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // --- TYPEWRITER EFFECT ---
    new Typed('.typewriter', {
        strings: ['Code.', 'AI.', 'Machine Learning.', 'App Dev.'],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
        smartBackspace: true
    });

    // --- PARTICLES.JS ---
    particlesJS('particles-js', {
        "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": false }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false } },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 } } },
        "retina_detect": true
    });

    // --- CUSTOM CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursorDot, { duration: 0.1, x: e.clientX, y: e.clientY });
        gsap.to(cursorOutline, { duration: 0.3, x: e.clientX, y: e.clientY });
    });

    document.querySelectorAll('a, button, .magnetic, .skill-card, .social-icon').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorOutline, { duration: 0.3, scale: 1.8, background: 'rgba(79, 70, 229, 0.4)' });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursorOutline, { duration: 0.3, scale: 1, background: 'rgba(79, 70, 229, 0.2)' });
        });
    });

    // --- 3D PROJECT CARD TILT EFFECT ---
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.setProperty('--rotateX', `${-y / 20}deg`);
            card.style.setProperty('--rotateY', `${x / 20}deg`);
        });
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotateX', '0deg');
            card.style.setProperty('--rotateY', '0deg');
        });
    });

    // --- SCROLL TO TOP BUTTON ---
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
    });

    // --- SCROLL PROGRESS BAR ---
    const progressBar = document.getElementById('scrollProgressBar');
    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / scrollTotal) * 100;
        if (progressBar) progressBar.style.width = progress + '%';
    });

    // --- MAGNETIC BUTTON EFFECT ---
    document.querySelectorAll('.magnetic').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0) scale(1)';
        });
    });

    // --- STATS COUNTER ANIMATION ---
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 2000;
        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
        }
        requestAnimationFrame(update);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    const statsSection = document.querySelector('.stats.section');
    if (statsSection) statsObserver.observe(statsSection);

    // --- PROJECT FILTER TABS (with smooth animation) ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-card-link[data-category]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category') || '';
                const shouldShow = filter === 'all' || categories.includes(filter);

                if (shouldShow) {
                    item.classList.remove('hidden');
                    // Force reflow so the animation triggers
                    void item.offsetWidth;
                    item.classList.add('filter-appear');
                    item.addEventListener('animationend', () => {
                        item.classList.remove('filter-appear');
                    }, { once: true });
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // --- TOAST NOTIFICATION ---
    function showToast(message, isError = false) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        const icon = toast.querySelector('.toast-icon i');
        const msg = toast.querySelector('.toast-message');
        if (isError) {
            toast.style.background = '#ef4444';
            if (icon) icon.className = 'fas fa-times-circle';
        } else {
            toast.style.background = '#10b981';
            if (icon) icon.className = 'fas fa-check-circle';
        }
        if (msg) msg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    }

    // --- CONTACT FORM ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

        const reset = () => {
            btn.disabled = false;
            btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        };

        if (FORMSPREE_ID === 'YOUR_FORM_ID') {
            // Simulation mode — set FORMSPREE_ID at the top of this file
            setTimeout(() => {
                showToast("Message sent! I'll get back to you soon.");
                contactForm.reset();
                reset();
            }, 1200);
        } else {
            fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            })
            .then(res => {
                if (res.ok) {
                    showToast("Message sent! I'll get back to you soon.");
                    contactForm.reset();
                } else {
                    showToast("Something went wrong. Please try again.", true);
                }
            })
            .catch(() => showToast("Network error. Please try again.", true))
            .finally(reset);
        }
    });
});

console.warn("Developed by Brian Mahove. Unauthorized use is prohibited.");
