document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const slideInterval = 6000; // Change slide every 6 seconds (6000 milliseconds)
    let intervalId;

    // Function to update the visible slide
    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlide(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlide(currentIndex);
    }

    // Initial display
    updateSlide(currentIndex);

    // Event listener for the "Back" button
    document.getElementById('prevBtn').addEventListener('click', function() {
        prevSlide();
        resetInterval(); // Reset interval on manual slide change
    });

    // Event listener for the "Forward" button
    document.getElementById('nextBtn').addEventListener('click', function() {
        nextSlide();
        resetInterval(); // Reset interval on manual slide change
    });

    // Function to start the auto-sliding
    function startAutoSlide() {
        intervalId = setInterval(nextSlide, slideInterval);
    }

    // Function to reset the auto-slide interval
    function resetInterval() {
        clearInterval(intervalId);
        startAutoSlide();
    }

    // Start auto-sliding on page load
    startAutoSlide();
});
