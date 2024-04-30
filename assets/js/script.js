"use strict";

let allSlides = document.querySelectorAll(".slider-content");
let slideIndex = 0;
let leftArrow = document.querySelector(".slider-area .nav-icons i:first-child");
let rightArrow = document.querySelector(".slider-area .nav-icons i:last-child");

rightArrow.addEventListener("click", function () {
  allSlides[slideIndex].classList.remove("active");

  slideIndex++;

  if (slideIndex == allSlides.length) {
    slideIndex = 0;
  }

  allSlides[slideIndex].classList.add("active");
});

leftArrow.addEventListener("click", function () {
  allSlides[slideIndex].classList.remove("active");

  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = allSlides.length - 1;
  }

  allSlides[slideIndex].classList.add("active");
});
