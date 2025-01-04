// Listen for scroll events to trigger animations when elements come into view
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');  // Add class to trigger animation
        }
    });
});


// Function to check if an element is in the viewport
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Apply animation to elements on page load
document.addEventListener("DOMContentLoaded", function() {
    const homeOne = document.querySelector('.home-one');
    const homeTwo = document.querySelector('.home-two');
    homeOne.classList.add('visible');
    homeTwo.classList.add('visible');
});
