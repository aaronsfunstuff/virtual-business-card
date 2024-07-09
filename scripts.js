// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Profile picture zoom effect
    const profilePic = document.querySelector('.profile-pic img');
    profilePic.addEventListener('click', function() {
        profilePic.style.transform = 'scale(1.5)';
    });

    profilePic.addEventListener('mouseout', function() {
        profilePic.style.transform = 'scale(1)';
    });

    // Modal for project details
    const projectLinks = document.querySelectorAll('.project-link');
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            openModal();
        });
    });

    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Form validation for contact information
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').textContent;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const phone = document.getElementById('phone').textContent;
        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        alert('Form submitted successfully!');
        contactForm.reset();
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    }
});
