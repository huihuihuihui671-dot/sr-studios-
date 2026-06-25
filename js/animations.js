// 1. Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(follower, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.3 });
});

// 3. Magnetic Buttons
const magneticElements = document.querySelectorAll('.magnetic');

magneticElements.forEach((elem) => {
    elem.addEventListener('mousemove', (e) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(elem, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
    });

    elem.addEventListener('mouseleave', () => {
        gsap.to(elem, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    });
});

// 4. Hero Animations
gsap.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.2
});

// 5. Floating Doodles Animation
gsap.to(".floating-doodle", {
    y: -20,
    rotation: 10,
    yoyo: true,
    repeat: -1,
    duration: 2,
    ease: "sine.inOut",
    stagger: 0.2
});