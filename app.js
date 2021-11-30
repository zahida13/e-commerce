const header = document.querySelector("header");

const menu_list = document.querySelectorAll(".menu_list");
const sub_menu_list = document.querySelectorAll(".sub-menu-list");
const category = document.querySelector("#categories");
const mega_menu = document.querySelector("#mega_menu");
const mega_details = document.querySelector("#mega_details");

console.log(mega_menu);
menu_list.forEach(function (list) {
  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-active")) {
      e.target.classList.remove("menu-active");
    } else {
      menu_list.forEach((li) => li.classList.remove("menu-active"));
      e.target.classList.add("menu-active");
    }
  });
});

sub_menu_list.forEach(function (sub_list) {
  sub_list.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-active")) {
      e.target.classList.remove("menu-active");
    } else {
      e.target.classList.add("menu-active");
      sub_menu_list.forEach((li) => li.classList.remove("menu-active"));
    }
  });
});

category.addEventListener("click", (e) => {
  mega_menu.classList.toggle("active");
  mega_details.classList.toggle("active");
});
