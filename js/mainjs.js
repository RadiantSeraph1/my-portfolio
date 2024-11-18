 // Function to show the selected section
 function showSection(id) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('visible');
    });
    document.getElementById(id).classList.add('visible');
}

// Function to handle cookie consent
function acceptCookies() {
    document.cookie = "acceptedCookies=true; max-age=" + 60*60*24*30;
    document.getElementById('cookie-consent').style.display = 'none';
}

// Function to check for cookie consent
function checkCookieConsent() {
    if (!document.cookie.split('; ').find(row => row.startsWith('acceptedCookies'))) {
        document.getElementById('cookie-consent').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', checkCookieConsent);

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}