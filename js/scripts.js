// inject year into footer
const curYear = new Date();
document.querySelector("#year").textContent = curYear.getFullYear();

const btnElement = document.querySelector('#theButton');
const navElement = document.querySelector('#primaryNav');

btnElement.addEventListener('click', () => {
  btnElement.classList.toggle('open');
  navElement.classList.toggle('open');
})


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  speed: 2000,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay:5000,
  },
});