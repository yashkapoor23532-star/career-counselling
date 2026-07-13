// EmailJS ko initialize karein
emailjs.init("OviraX13Mq5-AHfoE");

document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Submit button ko disable karein taaki user baar-baar click na kare
    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.innerText = "Sending...";

    // Form ka data template variables ke sath map karein
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Email bhejein (Naye account ka default template use kiya hai)
    emailjs.send('service_xka831d', 'my_first_template', templateParams)
        .then(function() {
            alert('Message Sent Successfully! We will contact you soon.');
            document.getElementById('contact-form').reset();
            if (submitBtn) submitBtn.innerText = "Submit";
        }, function(error) {
            alert('Failed to send message. Please try again later.');
            console.log('EmailJS Error:', error);
            if (submitBtn) submitBtn.innerText = "Submit";
        });
});
