const topCreator = document.querySelector(".top-creators");
const right = document.querySelector(".right");
const menu = document.querySelector(".menu");
const left = document.querySelector(".left");
const header = document.querySelector("header");
const main = document.querySelector(".main");

topCreator.addEventListener("click", () => {
  right.classList.toggle("show");
  topCreator.classList.toggle("creator");
});

menu.addEventListener("click", () => {
  left.classList.toggle("left-add-class");
});
