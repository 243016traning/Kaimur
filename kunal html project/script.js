let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.album-box');
    const totalSlides = slides.length;

    // Calculate the new index
    currentIndex += direction;

    // Loop the slides if we go beyond the first or last slide
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Update the position of the slider
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Optional: Detect swipe gestures on mobile
let startX = 0;
let endX = 0;

document.querySelector('.album-container').addEventListener('touchstart', function(e) {
    startX = e.changedTouches[0].pageX;
});

document.querySelector('.album-container').addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].pageX;
    if (startX > endX + 30) {
        moveSlide(1); // Swipe Left -> Next image
    } else if (startX < endX - 30) {
        moveSlide(-1); // Swipe Right -> Previous image
    }
});
