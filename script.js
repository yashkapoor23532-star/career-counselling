// EmailJS ko initialize karein
emailjs.init("BkAWtH4BNYVP3lveo");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Submit button ko disable karein taaki user baar-baar click na kare
    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.innerText = "Sending...";

    // Mobile number validation aur extract karein
    const phoneVal = document.getElementById('phone').value.trim();
    if (phoneVal.length !== 10 || isNaN(phoneVal)) {
        alert('Please enter a valid 10-digit mobile number.');
        if (submitBtn) submitBtn.innerText = "Submit";
        return;
    }

    // Form ka data template variables ke saath map karein
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        mobile_number: phoneVal,
        message: document.getElementById('message').value
    };

    // Email bhejein (Apne account ka default template use kiya hai)
    emailjs.send('service_sba8tbf', 'template_0mdsflr', templateParams)
        .then(function() {
            alert('Message sent successfully! We will contact you soon.');
            document.getElementById('contact-form').reset();
            if (submitBtn) submitBtn.innerText = "Submit";
        }, function(error) {
            alert('Failed to send message. Please try again later.');
            console.log('EmailJS Error:', error);
            if (submitBtn) submitBtn.innerText = "Submit";
        });
});

// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Dropdown toggle link ko skip karne ke liye
        if(this.classList.contains('dropbtn')) return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Scroll Animation Effect for Sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    threshold: 0.15
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    // Initial style set kar rahe hain animation ke liye
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    sectionObserver.observe(section);
});
