// Toggle Menu
function toggleMenu() {
  const navLinks = document.querySelectorAll(".nav-links");
  navLinks.forEach((ul) => ul.classList.toggle("active"));
}

function toggleDropdown(event) {
  event.preventDefault();
  const dropdownMenu = event.target.nextElementSibling;
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}

// Wedding Countdown Timer
const weddingDate = new Date("2025-02-01T00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  if (timeLeft <= 0) {
    clearInterval(timer);
    document.querySelector(".timer").innerHTML = "<h2>It's Wedding Time!</h2>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

// Image Slider
const imageSlides = document.querySelector(".slides");
const imageDots = document.querySelectorAll(".pagination-dots .dot");
let imageCurrentIndex = 0;
let autoSlideInterval;

function updateImageSlider() {
  imageSlides.style.transform = `translateX(-${imageCurrentIndex * 25}%)`;
  imageDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === imageCurrentIndex);
  });
}

function goToNextImage() {
  imageCurrentIndex = (imageCurrentIndex + 1) % imageDots.length;
  updateImageSlider();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(goToNextImage, 5000); // Automatically move to the next image every 5 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Stop the auto-slide when user interacts
}

document.querySelector(".prev").addEventListener("click", () => {
  imageCurrentIndex = (imageCurrentIndex - 1 + imageDots.length) % imageDots.length;
  updateImageSlider();
  stopAutoSlide();
  startAutoSlide(); // Restart the timer
});

document.querySelector(".next").addEventListener("click", () => {
  imageCurrentIndex = (imageCurrentIndex + 1) % imageDots.length;
  updateImageSlider();
  stopAutoSlide();
  startAutoSlide(); // Restart the timer
});

imageDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    imageCurrentIndex = index;
    updateImageSlider();
    stopAutoSlide();
    startAutoSlide(); // Restart the timer
  });
});

updateImageSlider();
startAutoSlide(); // Start the auto-slide when the page loads


// Wedding Images Carousel
const weddingContainer = document.querySelector('.wedding-images');
const weddingLeftBtn = document.querySelector('.wedding-images-container .left-btn'); // Match with HTML structure
const weddingRightBtn = document.querySelector('.wedding-images-container .right-btn'); // Match with HTML structure
const weddingScrollAmount = weddingContainer.offsetWidth / 2;

weddingRightBtn.addEventListener('click', () => {
  weddingContainer.scrollBy({
    left: weddingScrollAmount,
    behavior: 'smooth',
  });
});

weddingLeftBtn.addEventListener('click', () => {
  weddingContainer.scrollBy({
    left: -weddingScrollAmount,
    behavior: 'smooth',
  });
});

function updateWeddingButtons() {
  weddingLeftBtn.disabled = weddingContainer.scrollLeft === 0;
  weddingRightBtn.disabled =
    Math.ceil(weddingContainer.scrollLeft + weddingContainer.offsetWidth) >= weddingContainer.scrollWidth;
}

weddingContainer.addEventListener('scroll', updateWeddingButtons);
updateWeddingButtons();

// Friends Cards Carousel
const friendsCardsContainer = document.querySelector('.friends-cards');
const friendsLeftBtn = document.querySelector('.friends-slider-container .left-btn'); // Correct button selector
const friendsRightBtn = document.querySelector('.friends-slider-container .right-btn'); // Correct button selector
const friendsScrollAmount = 650;

friendsLeftBtn.addEventListener('click', () => {
  friendsCardsContainer.scrollBy({
    left: -friendsScrollAmount,
    behavior: 'smooth',
  });
});

friendsRightBtn.addEventListener('click', () => {
  friendsCardsContainer.scrollBy({
    left: friendsScrollAmount,
    behavior: 'smooth',
  });
});

function updateFriendsButtons() {
  friendsLeftBtn.disabled = friendsCardsContainer.scrollLeft === 0;
  friendsRightBtn.disabled =
    Math.ceil(friendsCardsContainer.scrollLeft + friendsCardsContainer.offsetWidth) >= friendsCardsContainer.scrollWidth;
}

friendsCardsContainer.addEventListener('scroll', updateFriendsButtons);
updateFriendsButtons();



let currentIndex = 1;

function moveSlide(direction) {
    const items = document.querySelectorAll('.slider-single-item');
    const totalItems = items.length;

    // Reset classes
    items.forEach(item => item.classList.remove('slider-left-item', 'slider-center-item', 'slider-right-item'));

    // Update index
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Update classes based on new index
    items[(currentIndex - 1 + totalItems) % totalItems].classList.add('slider-left-item');
    items[currentIndex].classList.add('slider-center-item');
    items[(currentIndex + 1) % totalItems].classList.add('slider-right-item');
}

function expandImage(index) {
    const items = document.querySelectorAll('.slider-single-item');
    const totalItems = items.length;

    // Reset classes
    items.forEach(item => item.classList.remove('slider-left-item', 'slider-center-item', 'slider-right-item'));

    // Update index to the clicked item
    currentIndex = index;

    // Update classes based on the clicked item
    items[(currentIndex - 1 + totalItems) % totalItems].classList.add('slider-left-item');
    items[currentIndex].classList.add('slider-center-item');
    items[(currentIndex + 1) % totalItems].classList.add('slider-right-item');
}