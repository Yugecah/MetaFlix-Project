const images = [
    'https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/25185045/Money-Heist-1152x759.png',
    'https://images2.alphacoders.com/134/1345084.jpeg',
    'https://preview.redd.it/stunning-fan-made-banner-for-bridgerton-season-2-v0-rudu2cgav6wc1.jpeg?auto=webp&s=61b49d5ea169099c0422a9e530d497ab812aed9d'
];

const slideDuration = 9000; // 9 seconds
const sliderWrapper = document.getElementById('slider-wrapper');

let currentIndex = 0;
let autoSlideInterval;

function initSlider() {
    images.forEach((imageUrl, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url('${imageUrl}')`;
        const overlay = document.createElement('div');
        overlay.classList.add('slide-overlay');
        const playBtn = document.createElement('button');
        playBtn.classList.add('btn');
        playBtn.textContent = 'Play now';
        const infoBtn = document.createElement('button');
        infoBtn.classList.add('btn');
        infoBtn.textContent = 'Info';
        overlay.appendChild(playBtn);
        overlay.appendChild(infoBtn);
        const leftArrow = document.createElement('button');
        leftArrow.classList.add('arrow', 'left');
        leftArrow.innerHTML = '&#10094;';
        leftArrow.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });
        const rightArrow = document.createElement('button');
        rightArrow.classList.add('arrow', 'right');
        rightArrow.innerHTML = '&#10095;';
        rightArrow.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
        slide.appendChild(leftArrow);
        slide.appendChild(rightArrow);
        slide.appendChild(overlay);
        sliderWrapper.appendChild(slide);
    });
    moveSlider(currentIndex);
}

function moveSlider(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    moveSlider(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    moveSlider(currentIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, slideDuration);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// per-slide arrows are created and bound in initSlider()

let touchStartX = 0;

sliderWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    stopAutoSlide();
});

sliderWrapper.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50;

    if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide();
    }

    startAutoSlide();
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollAreas = document.querySelectorAll('.scroll-area');
    
    scrollAreas.forEach(scrollArea => {
        const leftArrow = scrollArea.parentElement.querySelector('.cat-arrow.left');
        const rightArrow = scrollArea.parentElement.querySelector('.cat-arrow.right');
        
        if (leftArrow && rightArrow) {
            leftArrow.addEventListener('click', () => {
                scrollArea.scrollBy({
                    left: -300, // Adjust scroll distance as needed
                    behavior: 'smooth'
                });
            });
            
            rightArrow.addEventListener('click', () => {
                scrollArea.scrollBy({
                    left: 300, // Adjust scroll distance as needed
                    behavior: 'smooth'
                });
            });
        }
    });
});

initSlider();
startAutoSlide();
