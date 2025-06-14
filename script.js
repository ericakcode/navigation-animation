const button = document.getElementById("toggle");
const nav = document.querySelector("nav");

button.addEventListener("click", function () {
  nav.classList.toggle("active");
});
