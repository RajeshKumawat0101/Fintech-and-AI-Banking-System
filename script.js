const carousel = document.querySelector(".carousel-images");
const items = document.querySelectorAll(".carousel-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 10; // Offset for each slide
    carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

// Initialize carousel on page load
updateCarousel();
