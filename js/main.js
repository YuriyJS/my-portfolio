//Services modal active

const serviceModal = document.querySelectorAll('.service-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

learnMoreBtn.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    serviceModal[index].classList.add('active');
  });
  modalCloseBtn[index].addEventListener('click', function () {
    serviceModal[index].classList.remove('active');
  });
});

//Portfolio modal active

const portfolioModal = document.querySelectorAll('.potfolio-modal');
const portfolioCard = document.querySelectorAll('.portfolio-card');
const portfolioImgCard = document.querySelectorAll('.portfolio-img-card');
const portfolioCloseBtn = document.querySelectorAll('.portfolio-close-btn');

portfolioImgCard.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    portfolioModal[index].classList.add('active');
  });
  portfolioCloseBtn[index].addEventListener('click', function () {
    portfolioModal[index].classList.remove('active');
  });
});

// Clients swiper

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".clients-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});















