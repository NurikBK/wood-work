const slides = document.querySelectorAll('.slide');
let auto = true;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
  // get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // add current class to next sibling
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'), 200);
};

// auto slide
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    // else {
    //   entry.target.classList.remove('show')
    // }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hamburgerButton = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');

hamburgerButton.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    hamburgerButton.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    hamburgerButton.setAttribute('aria-expanded', false);
  }
});
