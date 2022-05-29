const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let indexSlides = 0;

nextBtn.addEventListener("click", goNextSlide);
prevBtn.addEventListener("click", goPrevSlide);

function goNextSlide() {
  indexSlides++;
  if (indexSlides > slides.length - 1) {
    indexSlides = 0;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[indexSlides].classList.add("active");
}

function goPrevSlide() {
  indexSlides--;
  if (indexSlides < 0) {
    indexSlides = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[indexSlides].classList.add("active");
}
