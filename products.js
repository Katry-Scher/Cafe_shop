const carousel = document.querySelector('.carousel_card_d_coffe');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (carousel && prevButton && nextButton) {
    let currentIndex = 0;
    const totalCards = document.querySelectorAll('.card_d_coffe').length;

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
} else {
    console.error("Elements not found on the page.");
}