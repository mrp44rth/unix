let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}
const images = document.querySelectorAll('.carousel-inner img');
let currentIndex = 0;

function showImage(index) {
  gsap.to(images, { opacity: 0, duration: 0.5 });
  gsap.to(images[index], { opacity: 1, duration: 0.5 });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Initialize opacity for all images
images.forEach((img, index) => {
  img.style.opacity = index === currentIndex ? 1 : 0;
});

setInterval(nextImage, 2000);

// progress bar
const progressBar = document.querySelector("#progress-bar");
const sections = document.querySelector("#all-sections");
const animateProgressBar = () => {
  let scrollDistance = -sections.getBoundingClientRect().top;
  let progressWidth = (scrollDistance / (sections.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;

  let value = Math.floor(progressWidth)
  progressBar.style.width = value + "%";
}
window.addEventListener("scroll", () => {
  animateProgressBar();
})
