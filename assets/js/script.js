// Navbar Toggle
const navbarMenu = document.querySelector(".nav-menu");
const navOpenBtn = document.querySelector(".open-btn");
const navCloseBtn = document.querySelector(".close-btn");
navOpenBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

navCloseBtn.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});
