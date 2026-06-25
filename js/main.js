// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the page from refreshing
            
            const submitBtn = contactForm.querySelector('.form-submit');
            const originalText = submitBtn.innerText;
            
            // Show loading state
            submitBtn.innerText = 'Sending...';
            submitBtn.style.opacity = '0.7';
            
            // Simulate a fake sending delay (Replace this with real backend/EmailJS later if needed)
            setTimeout(() => {
                submitBtn.innerText = 'Message Sent!';
                submitBtn.style.background = '#43b581'; // Green success color
                submitBtn.style.color = '#fff';
                submitBtn.style.opacity = '1';
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.style.background = 'var(--text-color)';
                    submitBtn.style.color = 'var(--bg-color)';
                }, 3000);
            }, 1500);
        });
    }

    // ScrollReveal Logic for new sections
    gsap.registerPlugin(ScrollTrigger);

    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%", 
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });
});