// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
});

// Carousel functionality
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;
const totalItems = carouselItems.length;

// Auto-slide every 5 seconds
let autoSlide = setInterval(() => {
    nextSlide();
}, 5000);

// Show carousel when in view
window.addEventListener('scroll', () => {
    const carouselRect = carousel.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (carouselRect.top <= windowHeight * 0.9) {
        carousel.classList.add('visible');
    }
});

// Manual navigation
prevButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(() => {
        nextSlide();
    }, 5000);
});

nextButton.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(() => {
        nextSlide();
    }, 5000);
});

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
