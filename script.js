let currentIndex = 0;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carouselImages = document.querySelector(".carousel-images");
const carouselItems = document.querySelectorAll(".carousel-item");

const totalItems = carouselItems.length;

function updateCarousel() {
    // Move the carousel to the appropriate position based on currentIndex
    carouselImages.style.transform = `translateX(-${currentIndex * 10}%)`;
}

prevButton.addEventListener("click", () => {
    // Move to the previous item, loop back to the last item if needed
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    // Move to the next item, loop back to the first item if needed
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});





  