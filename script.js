import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  // },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".swiper-news", {
  slidesPerView: "auto",
  // loop: true,
  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  // },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
});

const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const menu = document.getElementById("menu");

function toggleMenu() {
  if (menu.classList.contains("active-menu")) {
    menu.classList.remove("active-menu");
  } else {
    menu.classList.add("active-menu");
  }
}

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
