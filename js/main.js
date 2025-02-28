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

// for (let i = 0; i < learnMoreBtn.length; i++) {
//   learnMoreBtn[i].addEventListener('click', function () {
//     serviceModal[i].classList.add('active');
//   });
//   modalCloseBtn[i].addEventListener('click', function () {
//     serviceModal[i].classList.remove('active');
//   });
// }

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

// for (let i = 0; i < portfolioCard.length; i++) {
//   portfolioImgCard[i].addEventListener('click', function () {
//     portfolioModal[i].classList.add('active');
//   });
//   portfolioCloseBtn[i].addEventListener('click', function () {
//     portfolioModal[i].classList.remove('active');
//   });
// }
















