// ================================================
// GSAP
// ================================================
gsap.registerPlugin(ScrollTrigger);

// ================================================
// CUSTOM CURSOR
// ================================================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 6 + 'px';
    cursor.style.top = e.clientY - 6 + 'px';
    follower.style.left = e.clientX - 20 + 'px';
    follower.style.top = e.clientY - 20 + 'px';
});

document.querySelectorAll('a, button, .project-card, .contact-btn, .lp-item, .review-card, .send-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        follower.style.transform = 'scale(1.5)';
        follower.style.borderColor = 'rgba(200,80,192,0.8)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
        follower.style.borderColor = 'rgba(255,255,255,0.5)';
    });
});

// ================================================
// 3D FACE MOUSE TRACKING
// ================================================
const faceImg = document.getElementById('faceImg');

document.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 2;

    if (faceImg) {
        faceImg.style.transform = `
            perspective(1000px)
            rotateY(${xPos * 20}deg)
            rotateX(${-yPos * 15}deg)
            translateX(${xPos * 15}px)
            translateY(${yPos * 10}px)
        `;
    }

    const faceShadow = document.querySelector('.face-shadow');
    if (faceShadow) {
        faceShadow.style.transform = `translateX(calc(-50% + ${-xPos * 10}px))`;
    }

    const faceGlow = document.querySelector('.face-glow');
    if (faceGlow) {
        faceGlow.style.transform = `translate(calc(-50% + ${xPos * 30}px), calc(-50% + ${yPos * 20}px))`;
    }
});

document.addEventListener('mouseleave', () => {
    if (faceImg) {
        faceImg.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    }
});

// ================================================
// PAGE LOAD ANIMATIONS
// ================================================
const loadTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

loadTimeline
    .from('.nav-link', { y: -30, opacity: 0, duration: 0.8, stagger: 0.1 })
    .to('.line-1', { y: 0, opacity: 1, duration: 1 }, '-=0.3')
    .from('.face-wrapper', { scale: 0, opacity: 0, duration: 1.2, ease: 'back.out(1.7)' }, '-=0.6')
    .to('.tagline', { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.contact-btn', { y: 0, opacity: 1, duration: 0.8 }, '-=0.6');

// ================================================
// MARQUEE + ROWS PAUSE ON HOVER
// ================================================
const marqueeTrack = document.querySelector('.marquee-track');
const trackLeft = document.querySelector('.track-left');
const trackRight = document.querySelector('.track-right');

if (marqueeTrack) {
    marqueeTrack.addEventListener('mouseenter', () => { marqueeTrack.style.animationPlayState = 'paused'; });
    marqueeTrack.addEventListener('mouseleave', () => { marqueeTrack.style.animationPlayState = 'running'; });
}
if (trackLeft) {
    trackLeft.addEventListener('mouseenter', () => { trackLeft.style.animationPlayState = 'paused'; });
    trackLeft.addEventListener('mouseleave', () => { trackLeft.style.animationPlayState = 'running'; });
}
if (trackRight) {
    trackRight.addEventListener('mouseenter', () => { trackRight.style.animationPlayState = 'paused'; });
    trackRight.addEventListener('mouseleave', () => { trackRight.style.animationPlayState = 'running'; });
}

// ================================================
// ABOUT ME SCROLL ANIMATIONS
// ================================================
gsap.to('.about-title', {
    scrollTrigger: { trigger: '.about-title', start: 'top 80%', toggleActions: 'play none none reverse' },
    y: 0, opacity: 1, duration: 1, ease: 'power3.out'
});

gsap.to('.about-description', {
    scrollTrigger: { trigger: '.about-description', start: 'top 80%', toggleActions: 'play none none reverse' },
    y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out'
});

// Floating emojis
gsap.utils.toArray('.floating-emoji').forEach((emoji, i) => {
    gsap.to(emoji, {
        scrollTrigger: { trigger: '.about-section', start: 'top 60%', toggleActions: 'play none none reverse' },
        opacity: 1, duration: 0.8, delay: i * 0.15, ease: 'power3.out'
    });
});

// ================================================
// SERVICES SCROLL ANIMATIONS
// ================================================
gsap.to('.services-title', {
    scrollTrigger: { trigger: '.services-title', start: 'top 80%', toggleActions: 'play none none reverse' },
    y: 0, opacity: 1, duration: 1, ease: 'power3.out'
});

gsap.utils.toArray('.service-item').forEach((item, i) => {
    gsap.to(item, {
        scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
        y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: 'power3.out'
    });
});

// ================================================
// LIVE PROJECTS - TITLE ANIMATION
// ================================================
gsap.to('.lp-title', {
    scrollTrigger: {
        trigger: '.lp-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
});

// ================================================
// LIVE PROJECTS - TITLE ANIMATION
// ================================================
gsap.to('.lp-title', {
    scrollTrigger: {
        trigger: '.lp-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
});

// ================================================
// LIVE PROJECTS - SIMPLE SLIDE UP (NO ZOOM/SCALE)
// ================================================
gsap.utils.toArray('.lp-card').forEach((card) => {
    gsap.from(card.querySelector('.lp-card-inner'), {
        scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            toggleActions: 'play none none reverse'
        },
        y: 150,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// ================================================
// REVIEWS - TITLE ANIMATION
// ================================================
gsap.to('.reviews-title', {
    scrollTrigger: {
        trigger: '.reviews-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
});

// ================================================
// REVIEWS - PAUSE ON HOVER
// ================================================
const reviewTracks = document.querySelectorAll('.review-track');
reviewTracks.forEach(track => {
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
});

// ================================================
// CONTACT SCROLL ANIMATIONS
// ================================================
gsap.to('.contact-title', {
    scrollTrigger: { trigger: '.contact-title', start: 'top 80%', toggleActions: 'play none none reverse' },
    y: 0, opacity: 1, duration: 1, ease: 'power3.out'
});

gsap.to('.contact-email', {
    scrollTrigger: { trigger: '.contact-email', start: 'top 85%', toggleActions: 'play none none reverse' },
    y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out'
});

// ================================================
// NAV BACKGROUND ON SCROLL
// ================================================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10,10,10,0.9)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
    }
});

// ================================================
// SMOOTH SCROLL
// ================================================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ================================================
// RESIZE HANDLER
// ================================================
window.addEventListener('resize', () => { ScrollTrigger.refresh(); });