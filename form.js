document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const namePattern = /^[a-zA-Z\s]+$/;
    if (name.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    // Address validation
    const address = document.getElementById('address').value;
    if (address.trim() === '') {
        document.getElementById('addressError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('addressError').style.display = 'none';
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Here, you can add code to submit the form data to the server
    }
});
