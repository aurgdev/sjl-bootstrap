import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

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

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: false,
  },
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

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
    viewed = true;
    $(".value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
}
