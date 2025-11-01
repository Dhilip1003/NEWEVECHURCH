// Auto-sliding Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Function to show specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Function to go to next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(0);

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);

// Dot click functionality
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// GPay QR Code Loading
const loadQRBtn = document.getElementById('loadQRBtn');
const qrLoading = document.getElementById('qr-loading');
const qrContainer = document.getElementById('qr-container');
const donationButtonContainer = document.getElementById('donation-button-container');
const closeQRBtn = document.getElementById('closeQRBtn');

loadQRBtn.addEventListener('click', () => {
    // Hide button container
    donationButtonContainer.classList.add('hidden');
    
    // Show loading animation
    qrLoading.classList.remove('hidden');
    
    // Simulate QR code loading (1.5 seconds)
    setTimeout(() => {
        // Hide loading animation
        qrLoading.classList.add('hidden');
        
        // Show QR code container
        qrContainer.classList.remove('hidden');
    }, 1500);
});

closeQRBtn.addEventListener('click', () => {
    // Hide QR code container
    qrContainer.classList.add('hidden');
    
    // Show button container again
    donationButtonContainer.classList.remove('hidden');
});

// Google Maps Link
const churchAddress = "Praise Carmel Prayer House, Main Street, City, State, ZIP Code";
const googleMapsLink = document.getElementById('googleMapsLink');
const churchAddressElement = document.getElementById('churchAddress');

// Update Google Maps link with encoded address
googleMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchAddress)}`;

// Update current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
