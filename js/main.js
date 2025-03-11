

// --Header effect scroll--

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

// --Light / dark theme button--
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeBtn.classList.toggle('sun');

  localStorage.setItem('saved-theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  localStorage.setItem('saved-icon', themeBtn.classList.contains('sun') ? 'sun' : 'moon');
});

const savedTheme = localStorage.getItem('saved-theme');
if (savedTheme) {
  document.body.classList.toggle('dark-theme', savedTheme === 'dark');
  themeBtn.classList.toggle('sun', savedTheme === 'dark');
}

// Первая функция: скрывает кнопку
function hideThemeBtn() {
  if (themeBtn) {
    themeBtn.style.display = 'none';
  } else {
    console.warn('Кнопка не существует.');
  }
}

// Вторая функция: показывает кнопку
function showThemeBtn() {
  if (themeBtn) {
    themeBtn.style.display = 'flex';
  } else {
    console.warn('Кнопка не существует.');
  }
}

// --Scroll to top button--

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

// Responsive nav menu toggle

const navBtn = document.querySelector('.nav-menu-btn');
const navBar = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('close');
  navBar.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBtn.classList.remove('close');
    navBar.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// --ScrollReveal--
// Следи за тем, где закачивается DOMContentLoaded

document.addEventListener('DOMContentLoaded', function () {
  

  const revealConfigurations = [
    {
      selector: '.inner-title, .inner-second-title',
      config: { scale: 1, delay: 400 }
    },
    {
      selector: '.skills-description, .inner-info-link, .contact-card .title',
      config: { delay: 500, scale: 0.5 }
    },
    {
      selector: '.home-info h1, .about-img',
      config: { delay: 400, origin: 'left' }
    },
    {
      selector: '.home-info h3, .home-info p, .home-info-link',
      config: { delay: 600, origin: 'left' }
    },
    {
      selector: '.home-img, .description, .services-description',
      config: { delay: 600, origin: 'right' }
    },
    {
      selector: '.media-icons a, .professional-list, .education-all, .work-exp, .services-list',
      config: { delay: 600, origin: 'bottom', interval: 200 }
    },
    {
      selector: '.services-container, .portfolio-img-card, .contact-list, .contact-left, .contact-right p, .first-row, .second-row, .third-row',
      config: { delay: 600, origin: 'top', interval: 200 }
    }
  ];

  function initScrollReveal() {
    window.sr = ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 2500,
      delay: 100
    });

    revealConfigurations.forEach(({ selector, config }) => {
      sr.reveal(selector, config);
    });
  }

  initScrollReveal();
  
  // Функция отключения ScrollReveal
  function disableScrollReveal() {
    sr.clean(); // Очистка всех элементов от анимаций
    document.documentElement.style.overflowY = "hidden"; // Установка overflow hidden на html
    document.body.style.overflowY = "hidden"; // Установка overflow hidden на body


    revealConfigurations.forEach(({ selector }) => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.transform = "";
        el.style.opacity = "";
        el.style.transition = "";
        el.style.visibility = "";
      });
    });

    console.log("function off");
  }

  // Функция повторной инициализации ScrollReveal
  function enableScrollReveal() {
    document.documentElement.style.overflowY = ""; // Возврат overflow на html
    document.body.style.overflowY = ""; // Возврат overflow на body
    initScrollReveal(); // Вызов функции инициализации
    console.log("function on");
  }

  // --Services modal active--
  const serviceModal = document.querySelectorAll('.service-modal');
  const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
  const modalCloseBtn = document.querySelectorAll('.modal-close-btn');

  const modal = function (modalClick) {
    serviceModal[modalClick].classList.add("active");
    disableScrollReveal();
  }

  learnMoreBtn.forEach((button, i) => {
    button.addEventListener("click", function () {
      modal(i);
      hideThemeBtn();
    });
  });

  modalCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
      serviceModal.forEach(modal => {
        modal.classList.remove("active");
      });
      enableScrollReveal();
      showThemeBtn();
    });
  });

  const portfolioModal = document.querySelectorAll('.portfolio-modal');
  const portfolioImgCard = document.querySelectorAll('.portfolio-img-card');
  const portfolioCloseBtn = document.querySelectorAll('.portfolio-close-btn');
  
  portfolioImgCard.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      portfolioModal[index].classList.add('active');
      disableScrollReveal();
    });
  
    portfolioCloseBtn[index].addEventListener('click', function () {
      portfolioModal[index].classList.remove('active');
      enableScrollReveal();
    });
    
  });
});

// --Clients swiper--

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

// --Light / dark theme button--

// const themeBtn = document.querySelector('.theme-btn');

// const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';

// const getCurrentIcon = () => themeBtn.classList.contains('sun') ? 'sun' : 'moon';

// themeBtn.addEventListener('click', function () {
//   document.body.classList.toggle('dark-theme');
//   themeBtn.classList.toggle('sun');

//   localStorage.setItem('saved-theme', getCurrentTheme());
//   localStorage.setItem('saved-icon', getCurrentIcon());
// });

// const savedTheme = localStorage.getItem('saved-theme');
// const savedIcon = localStorage.getItem('saved-icon');

// // Check If there is a theme override in localStorage
// if (savedTheme) {
//   document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
//   themeBtn.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun');
// } else {}

// --Light / dark theme button--




















