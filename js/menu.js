const menuBtnEl = document.querySelector(".header_mob_nav_menu_box");
const mobMenuEl = document.querySelector(".mob_menu_box");

menuBtnEl.addEventListener("click", function () {
  mobMenuEl.classList.toggle("active");
});
