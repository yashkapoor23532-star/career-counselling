// EmailJS ko initialize karein
emailjs.init("3mLeRY38dR8VPt2Ba");

document.getElementById('contact-form')?.addEventListener('submit', function(event) {
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

    // Form ka data template variables ke sath map karein
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        mobile_number: phoneVal,
        message: document.getElementById('message').value
    };

    // Email bhejein (Naye account ka default template use kiya hai)
    emailjs.send('service_xka831d', 'template_mwa1fnq', templateParams)
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
