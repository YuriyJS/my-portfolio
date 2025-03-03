// Header effect scroll

const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 1);
});

// Nav Menu items active

// window.addEventListener('scroll', function () {
//   const sections = this.document.querySelectorAll('section');
//   const scrollY = this.window.scrollY;

//   sections.forEach(current => {
//     let sectionHeight = current.offsetHeight;
//     let sectionTop = current.offsetTop - 50;
//     let sectionId = current.getAttribute('id');

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document.querySelector(`.nav-menu a[href*="${sectionId}"]`).classList.add('active');
//     } else {
//       document.querySelector(`.nav-menu a[href*="${sectionId}"]`).classList.remove('active');
//     }
//   });
// });
  

let isScrolling = false;

window.addEventListener('scroll', function () {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;

      sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (navLink) navLink.classList.add('active');
        } else {
          if (navLink) navLink.classList.remove('active');
        }
      });

      isScrolling = false;
    });

    isScrolling = true;
  }
});

// Scroll to top button

const scrollTotop = document.querySelector('.scrollTotop');


// window.addEventListener('scroll', function () {
//   if(window.scrollY > 500) {
//     scrollTotop.classList.add('active');
//   } else {
//     scrollTotop.classList.remove('active');
//   }
// });

//Сокращенный вариант c toggle

window.addEventListener('scroll', function () {
  scrollTotop.classList.toggle('active', window.scrollY > 500);
});
  

scrollTotop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});












// Services modal active

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















