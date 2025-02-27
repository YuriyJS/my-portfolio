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
















