const images = document.querySelectorAll(".slider img");
let index = 0;
let interval;

function changeSlide(next = true) {
  images[index].classList.add("hidden");
  index = next
    ? (index + 1) % images.length
    : (index - 1 + images.length) % images.length;
  images[index].classList.remove("hidden");
}

function startAutoSlide() {
  interval = setInterval(() => changeSlide(true), 3000);
}

document.getElementById("next").addEventListener("click", () => {
  clearInterval(interval);
  changeSlide(true);
  startAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  clearInterval(interval);
  changeSlide(false);
  startAutoSlide();
});

startAutoSlide();
