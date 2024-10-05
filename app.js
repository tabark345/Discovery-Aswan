// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Leaflet map integration
function initMap() {
    const aswan = [24.0889, 32.8998];
    const map = L.map('map-container').setView(aswan, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const locations = [
        { name: "Abu Simbel Temple", lat: 22.3372, lng: 31.6258 },
        { name: "Philae Temple", lat: 24.0134, lng: 32.8832 },
        { name: "Aswan High Dam", lat: 23.9702, lng: 32.8763 },
        { name: "Elephantine Island", lat: 24.0875, lng: 32.8875 },
        { name: "Sofitel Legend Old Cataract", lat: 24.0877, lng: 32.8832 },
        { name: "Mövenpick Resort Aswan", lat: 24.0881, lng: 32.8872 },
        { name: "Nubian Museum", lat: 24.0889, lng: 32.8874 },
        { name: "Aswan Botanical Garden", lat: 24.0901, lng: 32.8830 }
    ];

    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(`<b>${location.name}</b>`);
    });
}

// Initialize the map when the page loads
window.addEventListener('load', initMap);


document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for subscribing to our newsletter!');
});

// Image lazy loading
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
// WhatsApp form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = encodeURIComponent(document.getElementById('message').value);
    
    // Replace this with your actual WhatsApp number
    const whatsappNumber = '+2001127958268';
    
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;
    const whatsappURL ="https://wa.me/" + whatsappNumber +"?text="+
    whatsappMessage
    
    window.open(whatsappURL, '_blank').focus();
});